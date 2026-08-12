# Rules

Instruction modules read into context at the start of every session, the same way a `CLAUDE.md` is.

| File | Scope |
|------|-------|
| [`destructive-command-safety.md`](destructive-command-safety.md) | Deletion policy. Pairs with the `hooks/destructive-guard.js` PreToolUse hook |

## How rules differ from skills

A rule is always in context for the sessions that load it. A skill is loaded on demand when its `description` matches the task. So:

- Rule: short, general, and costly to get wrong if the model has not read it *before* acting. Safety policies, code conventions, workflow expectations.
- Skill: longer, procedural, and only relevant to a specific kind of task.

Keep rules terse. Everything in this directory is paid for on every turn of every session that loads it. Anything over about 50 lines is probably a skill, or a rule plus a reference document the rule links to. That second pattern is what `destructive-command-safety.md` does with `hooks/README.md`.

## Scoping a rule to certain files

By default a rule loads in every session. Add `paths:` frontmatter to load it only when matching files are in play:

```markdown
---
paths:
  - "paper/*.tex"
  - "R/*.R"
---

# Quality gates
```

Use this for anything that only matters in one kind of project. A rule with no frontmatter is always on, and always costing context, so reach for `paths:` before writing a long unconditional rule.

## Install

Copy the file into `~/.claude/rules/` and restart Claude Code. It loads automatically; there is nothing to import and no `CLAUDE.md` required. Project-local rules go in `<project>/.claude/rules/`.

To confirm a rule is live, start a session and ask what instructions are loaded. A rule that does not appear is either scoped out by its `paths:` frontmatter or sitting in the wrong directory.
