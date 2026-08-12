---
name: citation-check
description: Audit a manuscript's citations and bibliography. Use to check in-text/reference parity, validate DOIs against Crossref/DataCite/Semantic Scholar/OpenAlex, detect title drift, retractions, and likely fabricated sources, audit evidentiary use, and produce a severity-stratified report; supports per-field sweeps on inherited bibliographies.
argument-hint: "[path to manuscript and bibliography, or paste citation list; include target style/journal if known]"
allowed-tools: Read, Grep, Glob, WebFetch, WebSearch, Write
---

# Citation Integrity Auditor

## Scope

This skill audits and reports. Do not edit `.tex` or `.bib` files unless the user explicitly asks for fixes to be applied.

The audit has four independent dimensions: structural parity (§3), source existence and identifiers (§4), publication status (§4), and evidentiary support (§6). Report each dimension's coverage separately; passing one never implies another was checked.

## Instructions

### 1. Orient before checking

Identify the inputs and constraints:

- Manuscript source: LaTeX, Markdown, Word export, PDF text, or pasted prose.
- Bibliography source: `.bib`, CSL JSON, Zotero export, reference section, footnotes, or mixed.
- Target style: default to APA 7 unless the user names a journal or style.
- Scope: whole manuscript, one section, bibliography only, or DOI-only pass.
- Tool availability: if web lookup, Crossref, DataCite, DOI.org, Semantic Scholar, or OpenAlex are unavailable, mark verification status as `NOT CHECKED` rather than guessing.
- Bibliography style: many common styles (`apalike`, `plain`, `unsrt`) do not render the `doi` field, so a wrong or dead DOI is invisible in the compiled PDF and ranks as source hygiene unless the style prints it. Author, year, title, volume, issue, and pages do render — prioritize those for any artifact that is already public.

### 2. Build the citation inventory

Create two inventories before judging errors:

- **In-text inventory:** every author-year, parenthetical, narrative, footnote, or numeric citation appearing in the manuscript.
- **Reference inventory:** every bibliography entry, including entry key if present, authors, year, title, outlet, DOI/URL, publication status, and notes.

For LaTeX, resolve the full source tree (`\input`/`\include`) and every bibliography resource (`\bibliography`, biblatex `\addbibresource`) before harvesting. Harvest from all cite macros — `\cite`, natbib `\citep`/`\citet`/`\citealt`, biblatex `\parencite`/`\textcite`/`\autocite`/`\footcite` — plus starred variants, optional arguments, multi-key calls, and any custom wrappers defined in the preamble. Prefer compiled artifacts when present: `.aux` files (`\citation{...}` lines) or biblatex `.bcf` files list exactly what the build cited and beat regex harvesting. Treat selective `\nocite{key}` as intentional inclusion of an uncited work; `\nocite{*}` pulls every `.bib` entry into the bibliography, making the never-cited check uninformative — say so instead of reporting false positives. Watch for BibTeX `crossref` fields and `@string` macros, which naive parsing misreads.

For numeric styles, expand citation ranges (`[12-15]` cites four works). For footnote-only systems, Word field codes, or PDF-only input, extract from rendered text and mark the inventory as lower confidence: rendered text loses keys and can silently merge or truncate entries.

Normalize cautiously:

- Treat spelling variants, diacritics, hyphenated surnames, particles (`de`, `van`, `von`), and organizational authors as possible matches until checked.
- For multiple works by the same author-year, verify `a/b/c` suffixes are assigned consistently.
- For BibTeX, preserve the entry key and report it with every finding.

### 3. Run structural checks

Structural checks are local and cheap: always run them on every entry, regardless of scale. Report:

- Cited in text but missing from references; in LaTeX this includes stale keys left behind by renames, which render as `[?]` or bold citation text.
- In references but never cited — distinguishing accidental orphans from intentional inclusions (selective `\nocite`, bibliography types that permit background reading lists).
- Author-year mismatch between in-text citation and reference entry.
- Duplicate bibliography entries for the same work.
- Ambiguous citations where two reference entries could satisfy one in-text citation.

Do not "fix" ambiguous cases silently. List the likely match and the evidence.

### 4. Verify source existence and identifiers

This is the highest-stakes check: hallucinated citations — a real author with a plausible but nonexistent title, or a DOI that resolves to a different paper — are the failure mode that ends careers. Verify every entry when tools allow. Work in priority order — entries supporting substantive claims (§6), then entries flagged by §3 or §7, then the rest — so an interrupted run has covered the most load-bearing entries; report anything unprocessed as `NOT CHECKED`, never as verified.

Before lookup, normalize identifiers: strip `https://doi.org/` prefixes, lowercase the DOI, fix URL encoding, and trim trailing punctuation that hitched a ride from the sentence. Judge a match on title, authors, year, outlet, and publication type together — title similarity alone is not decisive.

Use a tiered check:

1. **DOI resolution:** does the DOI resolve, and does the resolved metadata match the cited work? Never treat "DOI resolves" as "DOI correct" — a live DOI pointing at a different real work is the single most common LLM-fabrication signature.
2. **Metadata lookup:** Crossref/DataCite/Semantic Scholar/OpenAlex title-author-year search for entries without DOI or with suspicious DOI.
3. **Exact-title search:** the title in quotes plus first author; zero hits anywhere is a strong fabrication signal.
4. **Author-corpus cross-check:** query the first author's works (`&query.author=<name>` on Crossref, or their OpenAlex author page) and confirm the cited title appears in their corpus — catches the classic fabrication of an invented title grafted onto a real author.
5. **Manual-verification flag:** when no programmatic match is found, classify as `NEEDS AUTHOR VERIFICATION`, not fabricated.

Fallbacks by source type:

- Journal articles: Crossref / OpenAlex / DOI resolution.
- Books and chapters: publisher page, WorldCat, Google Books, OpenAlex. Book DOIs are spotty and frequently 404 even for real books.
- Datasets and official statistics: the issuing archive (ISSP, V-Dem, ANES, KGSS, national election studies, government statistical catalogues). Verify the catalogue or series number resolves to the *cited* title — a real catalogue number attached to the wrong title is a fabrication tell.
- Grey literature and government or internal reports: the issuing agency's own site (`site:` search); if untraceable, `NEEDS AUTHOR VERIFICATION`, not fabricated — an insider may be citing a real internal document.
- News and web items: confirm the named outlet actually ran the piece.
- Preprints and "forthcoming": SSRN, arXiv, SocArXiv, OSF, author pages and CVs, conference programs; a forthcoming item's year is inherently uncertain, so prefer the authors' own current listing.

Trust order: Crossref and DataCite are identifier registries; Semantic Scholar and OpenAlex are discovery and corroboration sources; when metadata conflicts, the publisher, repository, institutional, or library record is authoritative.

Query mechanics (via WebFetch; URL-encode all query parameters, space out requests, and back off on HTTP 429 or 5xx; on persistent Crossref 429, fall back to OpenAlex):

- Resolve a DOI: `https://api.crossref.org/works/<doi>`, or `https://doi.org/<doi>` and inspect where it redirects.
- Title search without a DOI: `https://api.crossref.org/works?query.bibliographic=<title>+<first author>&rows=3`; append `&mailto=` with the user's real address for Crossref's polite pool if one is known — never invent an address.
- Alternatives: `https://api.openalex.org/works?search=<title>`; `https://api.datacite.org/dois?query=<title>` for datasets; `https://api.semanticscholar.org/graph/v1/paper/search?query=<title>`.
- Check publication status while you are there: Crossref exposes retractions, corrections, expressions of concern, and linked updates as `update-to` relations (Crossmark); publisher pages confirm.
- A dead URL alone does not make a source unverifiable: look for an official replacement, persistent identifier, repository copy, or archived page (web.archive.org) first. A confirmed work with a dead link is a Recommended fix (update the URL); only an entry unconfirmable anywhere becomes `NEEDS AUTHOR VERIFICATION`.

Flag these separately:

- `MISSING DOI`: likely DOI exists but is absent from the reference.
- `NO DOI FOUND`: searched, no DOI found; not an error — record in the DOI table only.
- `DEAD DOI`: the identifier 404s; common for real book DOIs, so usually source hygiene rather than nonexistence.
- `DOI RESOLVES TO DIFFERENT WORK`: the DOI is live but points to another paper — a high-signal hallucination tell.
- `METADATA MISMATCH`: real work, wrong year, volume, issue, pages, or author names.
- `TITLE DRIFT`: cited title differs materially from indexed title.
- `STATUS UPDATE`: working paper, preprint, or conference paper appears to have a journal/book version. Do not assume the published version should replace the cited one: versions can differ, so confirm the published version still contains the material relevant to the cited claim before recommending a swap.
- `RETRACTED OR CORRECTED`: authoritative records show a retraction, correction, withdrawal, or expression of concern.
- `LIKELY FABRICATED`: no trace after identifier, exact-title, and author-corpus searches. Reserve for genuine non-existence, but do not shy away from it when the evidence is clear.

Boundary between the two unresolved labels: use `NEEDS AUTHOR VERIFICATION` when tooling was limited or the item is plausibly unindexed (working papers, book chapters, non-English or pre-digital sources); reserve `LIKELY FABRICATED` for items that should be indexed — e.g., a recent journal article citing volume and pages — yet return nothing across DOI, metadata, exact-title, and author-corpus searches.

Do not over-flag as fabricated:

- Double-blind anonymization placeholders (`title={Article withheld for review}`, author `{Author}`) are blinding stubs, not citations.
- Self-citations with metadata conflicts: flag for the author to reconcile their CV against the canonical record rather than silently overwriting — the author is the authority on their own paper.

For high-stakes audits (submission or public posting), run a second, independent verification pass with different framing, defaulting to "fabricated until independently confirmed" for any suspect — independent passes catch each other's gaps. When asked to remediate rather than only report, never invent a replacement: substitute only a real, verified source, confirm any new DOI resolves to the right work before writing it, and re-verify the fix.

### 5. Check style and completeness

For APA 7 and most social-science journal styles:

- DOI in URL form when available (`https://doi.org/...`), with no trailing period after the DOI or URL.
- Journal articles need article title, journal title, volume, issue when available, pages or article number, and DOI when available.
- Books need publisher; edited chapters need editors, book title, page range, publisher.
- Reports and datasets need institutional author, date, title, publisher/archive, version if relevant, and URL/DOI.
- Data, code, and materials should be cited as research products, not buried only in availability statements.

When target style is not APA, apply the target style but still keep the integrity checks above.

Style checks on raw BibTeX are provisional: bibliography styles transform capitalization and punctuation at render time, so inspect the rendered reference list when available and separate source-metadata errors from rendering-style artifacts.

### 6. Audit evidentiary use

Check every citation supporting an empirical, causal, methodological, or otherwise substantive claim — in the abstract, introduction, theory, discussion, and conclusion, not only the literature review. Classify how each is used:

- **Background:** source establishes context only.
- **Claim support:** source is used as evidence for a substantive claim.
- **Method precedent:** source justifies a design, estimator, measurement strategy, or reporting practice.
- **Contrast:** source is cited as an opposing or incomplete account.

Where one sentence attributes a claim to a citation cluster, check the cluster collectively and each member individually — a claim "supported" by three sources is often supported by none of them singly.

Flag overclaiming when the cited source plausibly cannot support the sentence where it appears. For every judgment, record what was examined — full text, abstract only, or metadata only — and never judge claim support from a title alone. Cite the supporting page, section, table, or passage when available. If source text is unavailable, mark `SOURCE TEXT NOT CHECKED`.

### 7. Per-field mode for inherited bibliographies

For long or inherited `.bib` files, complement the per-entry pass (§3-§5) with a **per-field sweep**: verify one field (author, year, title, journal, volume, pages, DOI) across *all* entries before moving to the next. This catches **field mixing** — paper A's title sitting under paper B's entry key — which per-entry reads miss because the entry looks plausible as a whole, but a column-wise read exposes as anomalous. The sweep is anomaly detection, not proof: confirm suspected mixing against authoritative metadata (§4) before reporting it.

## Output

Produce a `Citation Audit Report`. Inside a project repo, save it to `reports/quality/YYYY-MM-DD_citation-audit.md`; otherwise return it inline.

```
# Citation Audit Report

Scope: <files/sections checked>
Target style: <style or journal>
Verification tools used: <Crossref/DataCite/S2/OpenAlex/Web/manual/none>
Dimension coverage: <structural / existence / status / evidentiary — each checked or NOT CHECKED>
Online verification coverage: <n of N entries checked; list NOT CHECKED entries>
Summary: <N blocking, N recommended, N minor; N awaiting author verification>

## Blocking Issues
| Location | Entry/key | Issue | Evidence | Fix |
|---|---|---|---|---|

## Recommended Fixes
| Location | Entry/key | Issue | Evidence | Fix |
|---|---|---|---|---|

## Minor Style Issues
| Location | Entry/key | Issue | Fix |
|---|---|---|---|

## DOI and Source-Status Table
| Entry/key | Current DOI/URL | Verification status | Checked via (URL, access date) | Suggested action |
|---|---|---|---|---|

## In-text / Reference Parity
| Type | Citation or key | Location | Suggested action |
|---|---|---|---|

## Needs Author Verification
| Entry/key | Severity if wrong | Why unresolved | What author should check |
|---|---|---|---|
```

Severity:

- **Blocking:** missing cited reference, DOI resolving to a different work, retracted source, likely fabricated source, citation supports a decisive claim but appears wrong, or broken citation build.
- **Recommended:** missing likely DOI, stale working paper, dead URL for a confirmed work, corrected source needing a note, author-year mismatch that is fixable, uncited important reference, incomplete metadata.
- **Minor:** punctuation, capitalization, inconsistent initials, style-only issues.

The §4 labels map onto these tiers as follows: `DOI RESOLVES TO DIFFERENT WORK`, `RETRACTED OR CORRECTED` (retraction, withdrawal, expression of concern), and `LIKELY FABRICATED` are Blocking; `MISSING DOI`, `DEAD DOI`, `METADATA MISMATCH`, `STATUS UPDATE`, corrections, and `TITLE DRIFT` are Recommended, escalating `TITLE DRIFT` to Blocking when the drift suggests a different work entirely; `NO DOI FOUND` carries no severity.

`NEEDS AUTHOR VERIFICATION` is a verification status, not a severity tier: an unresolved item still carries the severity it would have if wrong, recorded in the verification table's severity column.

## Quality checks

- [ ] In-text inventory and reference inventory were built before findings were listed.
- [ ] Every DOI mismatch was based on resolved metadata, not intuition.
- [ ] Every "DOI resolves" was confirmed to resolve to the cited work, not merely to resolve.
- [ ] Suspected fabrications were tested with exact-title and author-corpus searches before labeling.
- [ ] Anonymization stubs, grey literature, and self-citations were not mislabeled as fabricated.
- [ ] For high-stakes audits, an independent second pass was run, or its absence was noted.
- [ ] Unverified sources are labeled as unresolved, not fabricated.
- [ ] Existing author-year suffixes were checked for consistency.
- [ ] Data/code/material citations were included when relevant.
- [ ] The report distinguishes integrity errors from style issues.
- [ ] Publication status (retraction/correction) was checked for entries verified online.
- [ ] Evidentiary judgments record what was examined (full text / abstract / metadata only).
- [ ] Dimension and online-verification coverage are stated; partial sweeps are reported as partial.
- [ ] For inherited `.bib` files, a per-field sweep was performed (§7).
- [ ] No manuscript or bibliography files were edited unless the user asked for fixes.

## Attribution and license

Adapted from [Steven Denney's open-science-skills](https://github.com/scdenney/open-science-skills), whose citation-check remixes ideas from Cheng-I Wu's Academic Research Skills for Claude Code; the per-field mode in §7 is from Scott Cunningham's `bibcheck` in [MixtapeTools](https://github.com/scunning1975/MixtapeTools), which is offered freely with attribution appreciated but not required. Denney's and Wu's skills are licensed [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/), and so is this file, unlike the rest of this repository, which is MIT. Non-commercial use only; keep this attribution if you adapt it further.
