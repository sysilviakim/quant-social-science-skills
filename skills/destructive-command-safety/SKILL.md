---
name: destructive-command-safety
description: Safe procedure for bulk or risky file deletion. Use when about to delete, clean up, prune, or remove files in bulk, when planning a build-artifact or cache cleanup, when a deletion needs to be undone, or when the destructive-command guard hook has blocked a command and an alternative is needed. Covers two-phase enumerate-inspect-delete, the Recycle Bin helper, quarantine folders, and the PowerShell -Include trap.
---

# Deleting files without losing the tree

Enforcement lives in the `destructive-guard.js` PreToolUse hook, which DENYs recursive and forced deletion and ASKs on single-target deletion. This skill is the procedure for what to do once you actually need to remove something. Do not phrase around the guard.

## The two-phase rule

Never enumerate and delete in one command.

1. **Enumerate** matches into a variable or a manifest file. Separate command.
2. **Inspect** before deleting. Report the count, the total size, about ten sample paths, and the ratio to the parent tree.
3. **Delete only the inspected manifest.** Never re-run the filter inside the delete command.

A cleanup that matches more than about 30% of a tree means the filter failed. Abort and re-check rather than proceeding.

The reason for splitting the phases: when the match and the delete happen in one pipeline, a filter that silently matched everything is indistinguishable from one that worked, until the files are gone.

## Prefer recoverable deletion

Windows Recycle Bin, which is the sanctioned path and passes the guard silently:

```powershell
powershell -ExecutionPolicy Bypass -File "<hooks>/trash.ps1" <path> [<path> ...]
```

It fails closed on Dropbox and OneDrive online-only placeholders, which the Recycle Bin API rejects. Make the files available offline, then retry. Nothing is deleted on a partial failure.

On macOS and Linux use `trash` or `gio trash`.

**Quarantine beats deletion.** Move candidates to a `_trash/` folder, verify the remaining tree still builds and still has what you expect, then let the user empty it. A move is reversible in a way that `Remove-Item` is not.

## PowerShell traps

| Trap | Consequence | Prevention |
|------|-------------|------------|
| `-Include` with `-LiteralPath` | Filter silently ignored, matches ALL files | Filter with `Where-Object` instead |
| `-Include` with `-Path` lacking `\*` or `-Recurse` | Matches nothing, or everything | Same |
| `Remove-Item` | Permanent, bypasses the Recycle Bin | Use `trash.ps1` or quarantine-move |

Multi-dot extensions such as `.synctex.gz` need `-like` rather than an exact `-in` comparison. Where the Bash tool is available, prefer `find -name`: its filtering is predictable.

## Git operations

Destructive git operations are prohibited: `reset --hard`, `clean -f`, whole-tree `checkout .` or `restore .`. Single-file variants need explicit approval. Prefer `git stash` over discarding.

## Synced trees

In Dropbox, OneDrive, or Drive, confirm files have actually uploaded before any mass operation. Version history only covers synced state, so an unsynced file has no remote copy to restore. Two-way-synced application folders, Overleaf among them, propagate deletions to the remote service.

Dropbox recovery: dropbox.com, then Deleted files or folder Rewind. Thirty days on the free tier, one hundred eighty on paid.

## If permanent deletion is genuinely required

Ask the user to run it themselves, or to lift the guard in `settings.json` first. Do not work around it.
