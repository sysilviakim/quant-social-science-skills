---
name: figure-table-audit
description: Audit figures, tables, captions, cross-references, and statistical notes. Use for an end-stage manuscript QA pass once the figure/table set is stable: inventory callouts and source scripts, check text-to-evidence consistency, audit captions, accessibility, and SI/replication linkage.
argument-hint: "[path to manuscript, figures, tables, SI, or compiled PDF; include target journal if known]"
---

# Figure and Table Auditor

## Scope

When a claim requires reading plotted values from an image, prefer source data or mark the issue as needing author verification rather than estimating values off the plot.

This is the **end-stage** auditor. Run `figure-table-audit` once the figure and table set is stable and you are preparing for submission.

The audit is read-only: do not modify the manuscript, figures, or code, and never compile or run builds, since the author compiles. The only file written is the audit report.

## Instructions

### 1. Orient before auditing

Identify:

- Manuscript source and compiled output, if any.
- Figure directory, table files, appendix/SI files, and build command.
- Target journal or style guide.
- Whether figures are generated from code, manually edited, or exported from software.
- Whether source data for figures/tables are available.

If only a compiled PDF is available, rendered cross-references and printed table values remain fully auditable; state that provenance, source-script, and unlabeled-value checks are out of reach.

### 2. Inventory figures and tables

Build an inventory with:

- Figure/table number or label.
- File path or source location.
- Caption/title.
- First in-text callout.
- Appendix/SI location if applicable.
- Producing script or data source, if visible.

Check:

- Every in-text callout resolves to an existing figure/table.
- Every figure/table has at least one in-text callout, and callout order roughly matches numbering. (Float placement is decided at compile time, so physical position in the source is not checkable; do not flag it.)
- Numbering is gap-free and not duplicated.
- Main-text and SI labels do not collide.

### 3. Check text-to-evidence consistency

For each figure/table used to support a substantive claim:

- Match the in-text claim to the exact row, column, panel, model, or plotted quantity.
- Verify direction, magnitude, uncertainty, subgroup, and denominator.
- Include abstract and introduction headline numbers in scope: stale numbers most often survive revisions there.
- Check whether text overstates non-significant or imprecise estimates.
- Check significance markers against reported p-values where present; otherwise recompute t ≈ coefficient/SE as an approximation and flag only clear mismatches (small-sample dfs, clustered or bootstrap inference, one-sided tests, and multiplicity adjustments shift thresholds).
- Check internal arithmetic: percentages sum to ~100 (unless categories overlap or items allow multiple responses), subgroup Ns sum to the total N, and Ns agree across tables/models claiming the same sample (allowing for per-specification listwise deletion and weighted vs unweighted counts).
- Treat identical coefficient columns across models as a verification trigger: check against source output for a copy-paste error in table assembly.
- Distinguish percentage points from percentages, and transformed (log, standardized) estimates from raw ones, in both text and notes.
- When the same estimate appears in both a figure and a table (e.g., a coefficient plot and a regression table), verify the two agree.
- Check whether figure/table notes disclose model specification, N, weights, fixed effects, clustering, and missing-data handling.
- For experimental papers, check ITT vs per-protocol labeling, attrition-by-arm, baseline balance, and CONSORT/sample-flow consistency.

Tolerance: an exact restatement must round from the table value at the displayed precision (text "2.0" matches a table value of 1.96 but not 2.06). For hedged claims ("about", "roughly"), flag only clear mismatches in magnitude or direction.

Do not infer exact values by eyeballing a plot unless the figure encodes labeled values. If source data are unavailable, write `VISUAL READ ONLY - AUTHOR VERIFY`.

### 4. Audit captions and notes

Captions and table notes should let a reader understand the evidence without hunting:

- Figure caption states what is plotted, units, sample, uncertainty interval, and panel meanings.
- Table title states the estimand or model family, not only "Results."
- Table notes define dependent variable, treatment/condition coding, omitted categories, controls, fixed effects, clustering, weights, and significance markers.
- All abbreviations are defined on first use.
- All transformations, scales, and index directions are explicit.
- Any data exclusions or subgroup restrictions are named.
- When the producing script is available, verify caption claims about uncertainty type (95% CI vs SE bars), weighting, and sample restrictions against the code.

### 5. Check accessibility and production quality

Flag:

- Color palettes not interpretable in grayscale or by color-blind readers.
- Low-resolution or rasterized text in vector outputs.
- Axis labels too small or missing units.
- Legends that obscure data or use ambiguous labels.
- Inconsistent decimal precision.
- Overcrowded tables that should move to SI.
- Missing alt text when the target venue requires it.
- Non-reproducible manual edits that are not documented (Blocking if they affect a main-result figure/table, Recommended otherwise).
- Truncated, log-scaled, or dual axes that are not disclosed, or visual encodings that exaggerate effect sizes.

### 6. Audit SI and replication linkage

Check whether:

- Main-text claims that point to SI land on the correct appendix/table/figure.
- SI numbering and captions are internally consistent.
- Each main figure/table can be traced to a script or documented manual step.
- Replication README maps outputs to scripts and data files.
- Figure/table source data are archived or clearly restricted.

## Output

Produce a `Figure and Table Audit Report` and save it to `reports/quality/YYYY-MM-DD_figure-table-audit.md`:

```
# Figure and Table Audit Report

Scope:
Inputs checked:
Not checked / unavailable inputs:
Build/source status:
Summary: <N blocking, N recommended, N minor, N author-verification>

## Inventory
| ID | Path/location | Caption/title | First callout | Source/script |

## Blocking Issues
| Location | Figure/table | Issue | Evidence | Fix |

## Recommended Fixes
| Location | Figure/table | Issue | Evidence | Fix |

## Minor / Production Issues
| Figure/table | Issue | Fix |

## Author Verification Needed
| Figure/table | Why verification is needed |

## Readiness Checklist
| Dimension | PASS/FAIL/PARTIAL/NA | Notes |
```

Readiness key: PASS = checked, clean; PARTIAL = non-blocking issues; FAIL = blocking issue; NA = not applicable or input unavailable.

Severity:

- **Blocking:** missing figure/table, wrong referenced value, denominator mismatch, unresolved label, table contradicts text, missing sample-flow evidence for experimental paper, or non-reproducible main result output.
- **Recommended:** incomplete notes, unclear captions, missing units, missing source script (Blocking when it leaves a main result non-reproducible), accessibility problem, imprecise uncertainty reporting.
- **Minor:** style, spacing, decimal precision, typography, cosmetic consistency.

## Quality checks

- [ ] Figure/table inventory was built before findings were listed.
- [ ] Every substantive text-to-table finding names the row/column/panel/model checked.
- [ ] Visual-only readings are flagged for author verification unless exact values are labeled.
- [ ] Significance markers and internal arithmetic (t ≈ coef/SE, sums, Ns) were recomputed where tables allow.
- [ ] Abstract and introduction headline numbers were checked against tables/figures.
- [ ] Captions and notes were checked for sample, units, uncertainty, and model details.
- [ ] SI and replication links were checked when files were available.

---

## Attribution and license

Adapted from [Steven Denney's open-science-skills](https://github.com/scdenney/open-science-skills), which remixes workflow concepts from Cheng-I Wu's Academic Research Skills for Claude Code. Both are licensed [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/), and so is this file, unlike the rest of this repository, which is MIT. Non-commercial use only; keep this attribution if you adapt it further.
