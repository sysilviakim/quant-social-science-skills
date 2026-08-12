# Destructive Command Safety

Permanent deletion is prohibited. A PreToolUse hook
(`~/.claude/hooks/destructive-guard.js`, matcher `Bash|PowerShell`) DENYs
recursive and forced deletion (`rm -rf`, `Remove-Item -Recurse/-Force`,
`git clean -f`, `git reset --hard`, `del /s`, `robocopy /MIR`, and so on)
and ASKs on single-target deletions. Do not phrase around the guard.

## Rules

1. **Two-phase**: never enumerate and delete in one command. Enumerate to
   a manifest, inspect (count, size, about 10 sample paths), then delete
   only the inspected manifest. Matching more than 30% of a tree means the
   filter failed, so abort.
2. **Recycle Bin, not delete.** The sanctioned path:

       powershell -ExecutionPolicy Bypass -File "<hooks>/trash.ps1" <path> [...]

   It fails closed on Dropbox and OneDrive online-only placeholders; make
   files available offline, then retry. On macOS and Linux use `trash` or
   `gio trash`.
3. **Quarantine beats deletion.** Move candidates to a `_trash/` folder,
   verify the remaining tree, then let the user empty it.
4. PowerShell 5.1: `-Include` with `-LiteralPath` is silently ignored and
   matches ALL files. Filter with `Where-Object` instead, or prefer Bash
   `find -name`, whose filtering is predictable.
5. Destructive git operations are prohibited; single-file variants need
   approval. If a permanent delete is genuinely required, ask the user to
   run it or lift the guard in `settings.json`.
6. In a synced tree (Dropbox, OneDrive, Drive), confirm files have actually
   uploaded before any mass operation. Version history only covers synced
   state, and two-way-synced app folders propagate deletions to the remote
   service.

## Why

This rule exists because of a real incident: a LaTeX build-artifact cleanup
in PowerShell 5.1 deleted an archive of about 2 GB. `Get-ChildItem -LiteralPath ...
-Include` silently ignored the `-Include` filter, so the match returned the
entire tree, and the delete ran in the same pipeline as the match, so
nothing surfaced the mismatch before the files were gone. `Remove-Item`
bypasses the Recycle Bin, so there was no undo.

Both failure modes are addressed above. Rule 1 splits the match from the
delete so a bad filter is visible while it is still harmless, and rule 2
makes the delete itself recoverable.

Hook implementation and install instructions:
[`hooks/README.md`](../hooks/README.md).
