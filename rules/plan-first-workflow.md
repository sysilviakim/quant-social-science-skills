# Plan-First Workflow

**Enter plan mode before any non-trivial task.** Non-trivial means any of: touches multiple files, involves a design choice, has requirements you are unsure about, runs long, or takes a destructive or outward-facing action. Answering a question, reading code, and single-file edits with an obvious fix are trivial — just do them.

## The plan

Save the approved plan to `reports/plans/YYYY-MM-DD_descriptive-kebab-slug.md` — enough words to identify the task when scanning the directory later, appending `-2`, `-3` if the name is taken. Example: `2026-08-13_trim-plan-first-workflow-rule.md`. Plans persist on disk and support recovery when reread; nothing rereads them automatically.

Four sections, no more: **objective**, **files affected**, **ordered steps**, **how it will be verified**. Head the file with a status: DRAFT, ACTIVE, DONE, or ABANDONED.

## Execution

Implement, verify, fix, re-verify. Scale verification to risk, and say which checks failed, were skipped, or could not run — silence reads as "passed."

Re-approval is needed only when scope, risk, or affected files change materially. Note smaller deviations in the plan and keep going.

Dispatch review agents when the size or risk of the change earns it, not by reflex.

**Never loop more than 3 review-fix rounds.** If Blocking or Major issues survive the third, stop: leave the plan ACTIVE, report what is still open, and ask whether to continue. Do not report success.

Before marking a plan DONE, record the verification results and any material deviations in it.

## Session recovery

After compression or on a new session: read `CLAUDE.md`, then find the ACTIVE plan in `reports/plans/` matching the current task — not simply the newest file. Check `git log --oneline -10` and `git status`. Uncommitted changes are not necessarily yours. State what you understand the task to be before acting.
