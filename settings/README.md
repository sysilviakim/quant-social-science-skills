# Settings

[`settings.example.json`](settings.example.json) is a starter
`~/.claude/settings.json` with the destructive-command guard already wired,
so installing the hook does not require hand-editing nested JSON.

## Use it

If you have no `~/.claude/settings.json` yet, copy the file there. If you
already have one, merge the blocks you want rather than overwriting. A
settings file that fails to parse silently disables every setting in it.

Then make two edits:

1. Replace `CHANGEME` in the hook command with your username. The path is
   absolute and there is no variable expansion in that field. On macOS or
   Linux use `node "$HOME/.claude/hooks/destructive-guard.js"`.
2. Trim the `permissions.allow` list to commands you actually want
   auto-approved. The six included are a conservative starting point, not a
   recommendation.

Verify it parses:

```bash
node -e "require(require('os').homedir()+'/.claude/settings.json')" && echo ok
```

## What's in the example

| Block | Why |
|-------|-----|
| `hooks.PreToolUse` | Wires [`hooks/destructive-guard.js`](../hooks/) on `Bash` and `PowerShell`. The 15-second timeout is generous for a regex check; the `statusMessage` is what shows in the spinner |
| `attribution.commit` | Empty string removes the `Co-Authored-By: Claude` trailer from commits, so GitHub attributes them to you alone. Set `attribution.pr` the same way for pull request bodies |
| `permissions.allow` | Read-only git, R, and directory commands that rarely warrant a prompt |

## Scope

Three files load in order, each overriding the last:

| File | Scope | Commit it? |
|------|-------|------------|
| `~/.claude/settings.json` | All your projects | Personal, so no |
| `<project>/.claude/settings.json` | One repo, whole team | Yes |
| `<project>/.claude/settings.local.json` | One repo, just you | No, gitignore it |

Put the guard in the user-level file. It is a property of the machine you
are protecting, not of any one repository, and a project-level hook silently
stops applying the moment you work somewhere else.
