# quant-social-science-skills

Claude Code configuration for quantitative social science research —
skills, rules, and hooks, published piecemeal from a working setup.

## Contents

| Directory | What's there |
|-----------|--------------|
| [`hooks/`](hooks/) | `destructive-guard.js` — PreToolUse guard that blocks permanent deletion and redirects to the Recycle Bin; `trash.ps1` — the Windows Recycle-Bin helper it points to |
| [`rules/`](rules/) | Always-in-context instruction modules. Currently `destructive-command-safety.md` |
| [`skills/`](skills/) | On-demand Agent Skills. Empty so far — see the README for layout and frontmatter conventions |

Each directory has its own README with install instructions. Nothing here is
auto-discovered: files are copied into `~/.claude/` and, for hooks, wired in
`settings.json`.

## Start here

The [destructive command guard](hooks/) is the piece worth taking first. It
is the difference between an agent that can lose your working tree and one
that can only send it to the Recycle Bin:

- **DENY** on `rm -rf`, `Remove-Item -Recurse/-Force`, `git reset --hard`,
  `robocopy /MIR`, and friends — a hard block that approving the prompt
  does not clear.
- **ASK** on single-target deletions and recoverable git operations, even in
  auto-accept modes.
- The only deletion path left open is `trash.ps1`, which is recoverable.

The [companion rule](rules/destructive-command-safety.md) supplies the
procedure for the moment the guard fires: enumerate to a manifest, inspect
count and size and a sample, then delete only what was inspected.

Requires Node.js on `PATH`. The guard's patterns are cross-platform; its
remedy is Windows-specific — swap in `trash` or `gio trash` elsewhere, as
described in [`hooks/README.md`](hooks/README.md).

## Credits

The guard's two-tier deny/ask structure, whitelist-first ordering, and
fail-open-on-parse-error behavior follow
[Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard).

## License

[MIT](LICENSE)
