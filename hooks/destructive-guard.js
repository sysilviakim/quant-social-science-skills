// PreToolUse guard against destructive shell commands (Bash + PowerShell).
// Born from a real mass-deletion incident: a LaTeX build-artifact cleanup in
// PowerShell 5.1 wiped a ~2 GB archive because `Get-ChildItem -LiteralPath
// ... -Include` silently ignored the filter and the delete ran in the same
// pipeline as the match. Design informed by
// Dicklesworthstone/destructive_command_guard (two-tier deny/ask,
// whitelist-first, fail-open on parse errors).
// See rules/destructive-command-safety.md for the procedure.
//
// Tiers:
//   DENY - commands that permanently destroy data at scale. Hard-blocked;
//          the model is redirected to the Recycle-Bin helper (trash.ps1)
//          or a quarantine move. Even the user's approval can't clear these
//          in-session (edit settings.json to lift).
//   ASK  - ordinary single-target deletions. Forces a manual approval
//          prompt even in auto-accept modes.
// Anything else passes silently.

const path = require('path');

// Resolved from this file's own location, so the guard is portable across
// machines and install paths — no hardcoded home directory.
const TRASH_SCRIPT = path.join(__dirname, 'trash.ps1').replace(/\\/g, '/');
const TRASH =
  `powershell -ExecutionPolicy Bypass -File "${TRASH_SCRIPT}" <path>`;

// Known-safe patterns checked FIRST (whitelist-first, per dcg) so common
// harmless commands never prompt.
const SAFE = [
  /^\s*git\s+clean\s+-n\b/i,          // dry run
  /^\s*rm\s+--help\b/i,
  /trash\.ps1/i,                       // the sanctioned deletion path
];

const DENY = [
  // \b-anchored on purpose: must catch nested forms (bash -c "rm -rf",
  // xargs rm -rf, loops). Occasional prose false positive is safe-side.
  [/\brm\s+(?:--?[\w-]+\s+)*(?:-\w*[rf]|--recursive|--force)/i, 'recursive/forced rm'],
  [/\bfind\b[\s\S]*\s-delete\b/i, 'find -delete'],
  [/\brsync\b[\s\S]*--delete/i, 'rsync --delete'],
  [/\bgit\s+clean\b[\s\S]*-\w*f/i, 'git clean -f'],
  [/\bgit\s+reset\s+--hard\b/i, 'git reset --hard'],
  [/\bgit\s+(checkout|restore)\s+(--\s+)?\.(\s|$)/i, 'whole-tree discard'],
  [/\bgit\s+(checkout|restore)\b[^\n;|&]*\s--\s+\.(\s|$)/i, 'whole-tree discard via ref'],
  [/\s-enc(odedcommand)?\b/i, 'PowerShell encoded command (uninspectable)'],
  [/\bshred\b/i, 'shred'],
  [/\b(rd|rmdir|del)\b[^\n]*\/[sq]\b/i, 'cmd.exe recursive/quiet delete'],
  [/\brobocopy\b[\s\S]*\/(mir|purge)\b/i, 'robocopy /MIR|/PURGE'],
  [/shutil\.rmtree/i, 'shutil.rmtree'],
  [/\bclear-recyclebin\b/i, 'Clear-RecycleBin (destroys the backstop)'],
  [/\bmkfs|\bformat(\.com)?\s+[a-z]:/i, 'disk format'],
  [/\bdd\b[\s\S]*\bof=/i, 'dd raw write'],
];

// File-deletion verbs -> ASK, escalating to DENY when combined with
// -Recurse/-Force (e.g. Remove-Item -Recurse, rm -Force via PS alias).
// Command-position anchor for short aliases (rm/rd/del/ri/erase) so paths
// like man/foo.Rd don't false-positive.
const FILE_VERBS = [
  /(?:^\s*|[;&|(`'"]\s*|\b(?:do|then|xargs|exec|sudo)\s+)(rm|ri|rd|del|erase|rmdir)\s/im,
  /\b(remove-item|clear-content)\b/i,
  /\bunlink\b/i,
  /\bos\.(remove|unlink|rmdir)\s*\(/i,
  /\bfs\.(rm|rmdir|unlink)\w*\s*\(/i,
  /\b(file\.remove|fs::(file_delete|dir_delete|link_delete))\s*\(/i, // R
  /\.\s*Delete\s*\(/, // .NET instance method, e.g. (Get-Item x).Delete()
];
const ESCALATE = /-(recurse|force)\b/i;

// Destructive-but-recoverable git operations -> ASK only (git's --force
// must not trip the file-verb escalation).
const GIT_ASK = [
  /\bgit\s+(checkout|restore)\s+--\s/i,
  /\bgit\s+stash\s+(drop|clear)\b/i,
  /\bgit\s+push\b[\s\S]*(--force\b|\s-f\b)/i,
  /\bgit\s+branch\b[\s\S]*\s-D\b/,
];

function decide(cmd) {
  if (SAFE.some((re) => re.test(cmd))) return null;
  for (const [re, why] of DENY) {
    if (re.test(cmd)) return { decision: 'deny', why };
  }
  if (FILE_VERBS.some((re) => re.test(cmd))) {
    if (ESCALATE.test(cmd)) {
      return { decision: 'deny', why: 'deletion verb with -Recurse/-Force' };
    }
    return { decision: 'ask', why: 'deletion command' };
  }
  if (GIT_ASK.some((re) => re.test(cmd))) {
    return { decision: 'ask', why: 'destructive git operation' };
  }
  return null;
}

let d = '';
process.stdin.on('data', (c) => (d += c));
process.stdin.on('end', () => {
  let cmd = '';
  try {
    cmd = (JSON.parse(d).tool_input || {}).command || '';
  } catch (e) {
    return; // fail open on unparseable input (dcg philosophy)
  }
  const r = decide(cmd);
  if (!r) return;
  const reason =
    r.decision === 'deny'
      ? `BLOCKED (${r.why}): permanent-deletion commands are disabled on this ` +
        `machine (destructive-command-safety rule). Recoverable alternative: ` +
        `${TRASH} - or quarantine-move to a _trash/ folder. If permanent ` +
        `deletion is truly required, the user must run it themselves or lift ` +
        `the guard in ~/.claude/settings.json.`
      : `Deletion command detected (${r.why}) - manual approval required. ` +
        `Verify the match list (count/size/sample) before bulk deletes; ` +
        `prefer the Recycle-Bin helper: ${TRASH}`;
  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        permissionDecision: r.decision,
        permissionDecisionReason: reason,
      },
    })
  );
});
