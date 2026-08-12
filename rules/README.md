# Rules

Instruction modules loaded into context, either globally via `~/.claude/CLAUDE.md` or per-project via a project `CLAUDE.md`.

| File | Scope |
|------|-------|
| [`destructive-command-safety.md`](destructive-command-safety.md) | Deletion policy. Pairs with the `hooks/destructive-guard.js` PreToolUse hook |

## How rules differ from skills

A rule is always in context for the sessions that load it. A skill is loaded on demand when its `description` matches the task. So:

- Rule: short, general, and costly to get wrong if the model has not read it *before* acting. Safety policies, code conventions, workflow expectations.
- Skill: longer, procedural, and only relevant to a specific kind of task.

Keep rules terse. Everything in this directory is paid for on every turn of every session that loads it. Anything over about 50 lines is probably a skill, or a rule plus a reference document the rule links to. That second pattern is what `destructive-command-safety.md` does with `hooks/README.md`.

## Install

Rules are not auto-discovered. Copy the file into `~/.claude/rules/` and reference it from a `CLAUDE.md`:

```markdown
@rules/destructive-command-safety.md
```

Global (`~/.claude/CLAUDE.md`) applies everywhere; a project `CLAUDE.md` applies to that repo only.
