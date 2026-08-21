# quant-social-science-skills

Claude Code configuration for quantitative social science research by Seo-young Silvia Kim: skills, rules, hooks, and agents.

| Directory | What's there |
|-----------|--------------|
| [`hooks/`](hooks/) | A PreToolUse guard that blocks permanent deletion, plus its Recycle-Bin helper |
| [`rules/`](rules/) | Always-in-context instruction modules: R conventions, workflow policy |
| [`skills/`](skills/) | On-demand Agent Skills for research QA and writing tasks |
| [`agents/`](agents/) | Subagent definitions for review and verification work |
| [`settings/`](settings/) | A starter `~/.claude/settings.json` with the hook already wired |

Nothing here is auto-discovered. Files are copied into `~/.claude/`, and hooks are wired in `settings.json`. Each directory's README has its own install instructions.

## License

Some assets here are original; others revise open-source projects and are credited where they live. [MIT](LICENSE), except where a directory says otherwise. See [LICENSE](LICENSE) for the exceptions and their attribution.
