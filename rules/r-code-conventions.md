---
paths:
  - "**/*.R"
  - "**/*.Rmd"
  - "**/*.qmd"
---

# R Code Standards

Applies to R in academic research projects: analysis scripts, replication packages, and the figures and tables they produce.

---

## 0. Project Conventions

- All R scripts start with `source(here::here("R", "utilities.R"))`
- `here::here()` for all file paths; never `setwd()` or `rm(list = ls())`
- All libraries loaded in `utilities.R`; global reusable objects live there too
- Global objects must be strictly necessary and informatively named. No throwaway names (`x`, `tmp`, `df`), no objects used by only one script
- Figures save to `fig/`, tables to `tab/`, model objects to `output/`
- Factor-encode categorical variables whose levels or ordering matter for the analysis. Keep identifiers, free text, and open-ended responses as character; factors on IDs invite silent level explosions and accidental reordering
- Avoid `print()` and `cat()` as a way of emitting output. Use `message()` or `cli` for progress and diagnostics, since both write to stderr and can be suppressed. `print()` remains correct where you need its side effect, as in `print(xtable(df), file = ...)`
- Run `styler::style_file()` after all edits

## 1. Reproducibility

- `set.seed()` with a simple integer seed: `123`, `1234`, or `42`. Set it once per analysis stage, immediately before the stochastic step it governs. Do not reset the same seed before every call in a sequence: repeated draws replay the same stream and silently correlate results that should be independent
- Parallel work needs its own stream discipline. Use `RNGkind("L'Ecuyer-CMRG")`, or `furrr_options(seed = TRUE)` with `future_map()`. A plain `set.seed()` does not make parallel results reproducible
- Where exact reproduction matters, record `RNGversion()` next to the seed. `sample()` changed its algorithm in R 3.6.0, so a seed alone does not pin the draw
- All packages loaded at top via `library()` (not `require()`)
- All paths relative to repository root
- `dir.create(..., recursive = TRUE)` for output directories
- Start R on a blank slate: no `.RData`, no restore workspace, no saved histories
- Assert documented invariants rather than running informal spot-checks. State what must be true of the data and fail loudly when it is not, with `stopifnot()` or `assertthat::assert_that()`, whichever reads better in context
- Lock package versions with `renv` and commit the lockfile
- Record the provenance of raw inputs: a version, a retrieval date, or a checksum. Data changing underneath a script is the most common reason a replication stops reproducing
- Capture `sessionInfo()` (or `sessioninfo::session_info()`) alongside published results
- Set locale and time zone explicitly wherever sorting, date parsing, or case conversion could differ across machines

## 2. Function Design

- `snake_case` naming, verb-noun pattern
- Roxygen documentation on reusable functions. A three-line helper called once in the same script does not need a full header
- No magic numbers. Give defaults where a sensible default exists, but do not invent one for a logically required argument such as the data being analyzed
- Name the elements of multi-value returns (lists or tibbles). A function that genuinely returns one number should return the number
- Code must be DRY. Extract repeated logic into functions or shared constants; never copy-paste blocks across scripts
- Define constants once. Never duplicate magic strings (model IDs, construct names, etc.) across functions or default arguments. Build display strings dynamically from the source-of-truth constant.
- Return empty structures (empty tibble, list with zero counts) rather than `NULL` when the result is a collection that happens to be empty, so callers can keep piping without `NULL` guards. `NULL` is still right when absence is the contract, as in a lookup that found nothing
- Check specific result fields, not just the wrapper. A non-`NULL` container can hold `NULL` contents (e.g., check `result$ensemble`, not `!is.null(result)`)
- Wire every parameter to actual logic. If a function declares `n_sample`, the body must use `n_sample`, not a hardcoded literal

## 3. Domain Correctness

Deliberately left open. Fill it with your own field's failure modes: the estimators that are easy to misapply, the packages with known bugs, the conventions a referee checks first. Two entries apply everywhere:

- Verify estimator implementations against the paper's equations, term by term
- Record package-specific bugs in section 6 as you hit them

## 4. Visual Identity

Pick your palette, theme, and figure dimensions once, define them in `utilities.R`, and never inline them per script. What the choices are is yours; that they live in one place is the rule.

- **Continuous and sequential scales:** use a perceptually uniform, colorblind-safe ramp such as viridis or cividis. Avoid rainbow and jet, which invent boundaries the data does not have.
- **Categorical scales:** choose colors that stay distinguishable in grayscale print, and cap the count at what a reader can actually track in a legend.
- **Never let color carry a distinction on its own.** Add a redundant channel: shape, line type, direct labels, or fill pattern. Around one in twelve men has a color vision deficiency, and photocopies and print drop color entirely.
- **Conventional encodings beat aesthetics.** Where readers already hold a mapping (political party, pass/fail, hot/cold, diverging around zero), use it. Overriding an established convention costs comprehension and buys nothing.
- **One theme, defined once.** Wrap your `theme_minimal()` or equivalent in a single project function and apply it to every figure.
- **Set dimensions explicitly** in `ggsave()`, with units, rather than accepting the device default, and keep them consistent within a document so type renders at the same size throughout. 7 x 5 inches is a serviceable default; journal templates override it, and a column-width specification in millimetres beats any house default.
- **Vector by default.** Save PDF or SVG so figures stay sharp at any size. Where a raster format is required, set `dpi = 300` or higher explicitly.

```r
# utilities.R: define once, use everywhere
project_palette <- c(...)
theme_project <- function(base_size = 12) {
  theme_minimal(base_size = base_size) +
    theme(legend.position = "bottom")
}
FIG_WIDTH <- 7   # inches
FIG_HEIGHT <- 5
```

### Figure Production Rules

- **One analytical purpose per figure.** A multi-panel display is fine, often better, when the panels serve a single argument. Split the figure when it is carrying two unrelated arguments at once.
- **Generate from code, every time.** Every published figure comes from a script checked into the replication archive. Never make substantive edits by hand: no nudged points, no retyped labels, no adjusted axis limits in Illustrator, because those break the chain from raw data to published artifact. Production steps that change no content, such as format conversion, font embedding, or a journal-required bounding box, are fine when scripted or documented.
- **Multi-panel figures use real composition libraries.** Build with `patchwork`, `cowplot`, or `gridExtra`, not by stitching exported PNGs in Word or Keynote.

## 5. Tables & Figures

### xtable Output (mandatory options)

```r
print(xtable(df),
  include.rownames = FALSE,
  comment          = FALSE,
  floating         = FALSE,
  booktabs         = TRUE,
  file             = here::here("tab", "table_name.tex")
)
```

- `floating = FALSE` means the `.tex` file contains only a `tabular`; the `\begin{table}` environment lives in the paper `.tex` and calls `\input{tab/table_name.tex}`
- Captions go **below** the tabular in the paper (same for figures)

### Number formatting

All numeric values in tables must display a consistent number of decimal places using `formatC`:

```r
# Good: consistent 3 decimal places
formatC(x, digits = 3, format = "f")

# Bad: default print() gives varying digits
```

Apply before passing columns to `xtable`. `formatC()` returns character on purpose: that is what preserves a trailing zero, so 0.12 prints as `0.120` and the column stays aligned. The underlying numeric column is untouched and still available for computation.

**Round in the formatting layer, not in the analysis.** Keep raw model output at full precision (`coef(fit)`, `vcov(fit)`, fit indices) and round only when rendering the table. Premature rounding contaminates downstream calculations (predictions, contrasts, hand-checked sums) and makes replication-tolerance comparisons impossible.

### Table self-containment

A reader should be able to understand the table from **title + notes alone**, without scanning back to the prose for variable definitions, the estimator, the omitted category, clustering, weights, or significance markers. If a table needs the surrounding paragraph to be legible, the notes are incomplete.

### LaTeX table skeleton (in paper .tex)

```latex
\begin{table}[h]
  \centering
  \input{tab/table_name.tex}
  \caption{Your caption here.}
  \label{tab:table_name}
\end{table}
```

### Checklist addition

```
[ ] xtable: include.rownames=F, comment=F, floating=F, booktabs=T
[ ] Numbers: consistent digits via formatC
[ ] Captions: below table and figure environments
[ ] \table environment in paper .tex, not in exported tabular
```

## 5b. RDS Data Pattern

**Save costly or reusable objects as RDS when a later script needs them.** This is for model fits, bootstrap replicates, and API results, not for every intermediate. An object used twice inside one script does not need a file.

```r
saveRDS(
  result,
  here::here("output", "descriptive_name.rds")
)
```

Record enough provenance to tell when a cached object has gone stale: the script that produced it, the input data version, and the parameters that would invalidate it. A stale RDS is much harder to notice than a missing one.

## 6. Common Pitfalls

| Pitfall | Impact | Prevention |
|---------|--------|------------|
| Positional indexing (`df[, 3]`, `select(3)`) | Breaks silently when columns move | Select and filter by name or predicate, never by position |
| Package masking | Wrong fn silently | `pkg::fn()` for ambiguity |
| Curly apostrophes in regex | Unicode `\u2019` bypasses `'?` patterns | Use `['\u2019]` in natural-language regex |
| `map_chr()` on a numeric field | purrr type error | Choose the `map_*` variant matching the type you want out, and know what the field actually stores |
| `seq(start, end)` when `start > end` | Iterates backwards silently | Guard: `if (start > end) return()` |
| `\\S` vs `\\s` in regex | Splits on wrong delimiter | Double-check case; test with 1-word, empty, multi-space inputs |
| Commented-out code as flow control | Error-prone, unsafe to `source()` | Use a config variable read by `if`/`else`, so every path stays executable |

## 7. Line Length & Mathematical Exceptions

**Standard:** Keep lines <= 80 characters. This governs R code, not prose. Do not hard-wrap paragraphs in `.md`, `.tex`, or roxygen comments; one paragraph is one line.

Enforce with `lintr::line_length_linter(80L)`. `styler` reflows code but does not guarantee the limit: it will not break a long string literal or a deeply nested call.

**Exception: Mathematical Formulas.** Lines may exceed 80 chars **if and only if:**

1. Breaking the line would harm readability of the math (influence functions, matrix ops, formula implementations matching paper equations)
2. An inline comment explains the mathematical operation:
   ```r
   # Sieve projection: inner product of residuals
   # onto basis functions P_k
   alpha_k <- sum(r_i * basis[, k]) /
     sum(basis[, k]^2)
   ```
3. The line is in a numerically intensive section (simulation loops, estimation routines, inference calculations)

## 8. Code Quality Checklist

```
[ ] source(here::here("R", "utilities.R")) at top
[ ] set.seed() with a simple integer seed (123/1234/42)
[ ] All paths via here::here()
[ ] No hardcoded indices or rm(list = ls())
[ ] Functions documented (Roxygen)
[ ] Figures: palette and theme pulled from utilities.R, never inlined
[ ] Figures: explicit dimensions (7 x 5 default), caption below
[ ] Tables: xtable with include.rownames=F, comment=F, floating=F, booktabs=T
[ ] Tables: formatC for consistent digit display; \table env in paper .tex
[ ] Tables: rounding done in formatting layer only; readable from title+notes alone
[ ] Figures: one analytical purpose each; generated from script; multi-panel via patchwork/cowplot
[ ] Figures: color never the only channel; vector output, or dpi set for raster
[ ] RDS: costly and cross-script objects saved, with provenance noted
[ ] Comments explain WHY not WHAT
[ ] styler::style_file() run
[ ] Data invariants asserted, not spot-checked
[ ] renv lockfile committed; sessionInfo() recorded with results
[ ] lintr::line_length_linter(80L) clean
```
