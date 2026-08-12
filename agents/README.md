# Agents

Subagents for research tasks, dispatched with the Agent tool. Each runs in
its own context window with its own system prompt and tool set, and returns a
report rather than a running commentary.

*(None ported yet. Layout and conventions below.)*

## Layout

One `.md` file per agent, named for the agent:

```
agents/
  <agent-name>.md
```

An agent that needs long checklists or per-method modules can carry a
companion directory (`<agent-name>-modules/`) and link to it from the body.

## Frontmatter

```markdown
---
name: r-reviewer
description: R code reviewer for academic research scripts. Checks code
  quality, reproducibility, figure generation patterns, and convention
  compliance. Use after writing or modifying R scripts.
tools: Read, Grep, Glob
model: inherit
---

You are a ...
```

| Field | Required | Notes |
|-------|----------|-------|
| `name` | yes | Must match the filename |
| `description` | yes | Decides when the agent is dispatched. Same rule as skills: write when to use it, not what it is |
| `tools` | no | Comma-separated allowlist. Omit to inherit everything |
| `model` | no | `inherit`, or a tier such as `haiku` for cheap mechanical work |
| `color` | no | Chip color in the agent list |

Name the tools deliberately. A reviewer with `Read, Grep, Glob` cannot edit
the files it is judging, which is the point. Add `Bash` only when the agent
genuinely has to run something, as a verifier does.

## Body conventions

- Write the body as the agent's system prompt, in second person. It never
  sees the main conversation, so state the role, the process, and the output
  format explicitly.
- Specify the return format. The agent's final message is its whole
  contribution, so say whether you want a severity-stratified list, a
  pass/fail verdict, or a punch list with file:line anchors.
- Say what the agent must not do. Review agents that quietly start fixing
  things destroy the separation that made them worth dispatching.
- Flag expensive agents in the `description` itself if a run costs real
  money, so the dispatch decision is informed.

## Agent, skill, or rule?

- Agent: needs a separate context window, either because the work is bulky
  or because independence is the point (review, verification, audit).
- Skill: procedural knowledge the main conversation should follow itself.
- Rule: short policy that must be in context before the model acts.

See [`../skills/README.md`](../skills/README.md) and
[`../rules/README.md`](../rules/README.md).

## Install

Copy the `.md` file into `~/.claude/agents/` and restart Claude Code.
Project-local agents go in `<project>/.claude/agents/`.
