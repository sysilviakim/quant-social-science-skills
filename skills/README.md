# Skills

Agent Skills for quantitative social science research, loaded on demand when the task matches.

Ported so far:

- `figure-table-audit` — end-stage QA pass over figures, tables, captions, cross-references, and statistical notes before submission.

## Layout

One directory per skill, each with a `SKILL.md`:

```
skills/
  <skill-name>/
    SKILL.md          # required: frontmatter + instructions
    references/       # optional: longer docs the skill links to
    scripts/          # optional: helper scripts the skill invokes
```

## SKILL.md frontmatter

```markdown
---
name: skill-name
description: This skill should be used when the user [trigger conditions].
  Provides [what it does].
---

# Imperative title

...
```

`name` must match the directory name. `description` is the only part in context before the skill loads, so it carries the whole triggering decision. Write it as *when to use this*, not *what this is*, and name the concrete artifacts, verbs, and phrasings a user would actually say. A description like "helps with surveys" never fires. "Use when the user is running CFA, testing measurement invariance, or building composite scores from Likert items" does.

## Body conventions

- Write the body as instructions to the agent, not documentation for a human. Imperative mood, concrete steps.
- Split anything long into `references/` and link to it. The body loads in full when the skill fires; reference files load only if the agent opens them.
- State what is out of scope and which skill or agent covers it instead. Skills that quietly overlap fire unpredictably.

## Install

Copy the skill directory into `~/.claude/skills/` and restart Claude Code. Project-local skills go in `<project>/.claude/skills/`.
