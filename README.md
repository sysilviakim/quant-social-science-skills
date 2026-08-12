# quant-social-science-skills

Claude Code configuration for quantitative social science research: skills, rules, and hooks, published piecemeal from a working setup.

## Contents

| Directory | What's there |
|-----------|--------------|
| [`hooks/`](hooks/) | `destructive-guard.js`, a PreToolUse guard that blocks permanent deletion and redirects to the Recycle Bin, plus `trash.ps1`, the Windows helper it points to |
| [`rules/`](rules/) | Always-in-context instruction modules. Currently `r-code-conventions.md`, scoped to R files |
| [`skills/`](skills/) | On-demand Agent Skills. `destructive-command-safety` and `figure-table-audit`, the latter CC BY-NC 4.0 rather than MIT |
| [`agents/`](agents/) | Subagent definitions for review and verification work. Empty so far |
| [`settings/`](settings/) | `settings.example.json`, a starter `~/.claude/settings.json` with the guard already wired |

Each directory has its own README with install instructions. Nothing here is auto-discovered. Files are copied into `~/.claude/`, and hooks are wired in `settings.json`.

## The destructive command guard

Take [this one](hooks/) first. Without it, an agent running in auto-accept mode can lose your working tree. With it, the worst it can do unsupervised is move files to the Recycle Bin.

- DENY on `rm -rf`, `Remove-Item -Recurse/-Force`, `git reset --hard`, `robocopy /MIR`, and similar. Approving the prompt does not clear these.
- ASK on single-target deletions and recoverable git operations, even in auto-accept modes.
- The only deletion path left open is `trash.ps1`, which is recoverable.

The [companion skill](skills/destructive-command-safety/SKILL.md) supplies the procedure for the moment the guard fires: enumerate to a manifest, inspect count and size and a sample, then delete only what was inspected. It loads on demand rather than sitting in every session, since the hook does the enforcing and the procedure only matters when you are actually deleting something.

Requires Node.js on `PATH`. The guard's patterns are cross-platform, but its remedy is Windows-specific. Swap in `trash` or `gio trash` elsewhere, as described in [`hooks/README.md`](hooks/README.md).

## Credits

The guard's two-tier deny/ask structure, whitelist-first ordering, and fail-open-on-parse-error behavior follow [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard).

## License

[MIT](LICENSE), with one exception: `skills/figure-table-audit/` is [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/), because it is adapted from [Steven Denney's open-science-skills](https://github.com/scdenney/open-science-skills), which remixes Cheng-I Wu's Academic Research Skills for Claude Code. Non-commercial use only for that directory. Everything else, including the hook, the rules, and the settings example, is MIT and free for any use.
