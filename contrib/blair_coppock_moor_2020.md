# When to Worry about Sensitivity Bias

**Full citation:** Blair, Graeme, Alexander Coppock, and Margaret Moor. 2020. "When to Worry about Sensitivity Bias: A Social Reference Theory and Evidence from 30 Years of List Experiments." *American Political Science Review* 114(4): 1297–1315. doi:10.1017/S0003055420000374.

**Contributor:** Jina Kim

---

## 1. What the paper establishes

Sensitivity bias arises when respondents expect a social referent, possibly themselves, to infer their answer, prefer a particular response, and impose a cost for another. A list experiment obscures an individual's answer from others except at floor or ceiling counts, but increases the variance of the estimate. Across 264 list experiments, the authors find that bias varies by topic and is often uncertain, so a list's value depends on the question and inferential goal.

## 2. Checks for a reviewer

**(a) If a list supplies the main prevalence estimate, ask why its precision cost is justified;** for accuracy claims, compare a plausible direct-question bias range with the variance of the actual list estimator, not nominal *N* alone.

**(b) If a nonsignificant list–direct gap within one population is called “no bias,” ask for an interval on the gap** and what substantively meaningful bias it excludes; a large *p*-value alone is insufficient.

**(c) If a list–direct gap is labeled sensitivity bias, check the no-liars/no-design-effects assumptions and comparability** of nonresponse, order, wording, and population; otherwise call it a difference between methods.

**(d) If bias is attributed to self-image or an intrusive item, ask how a list would remove that mechanism,** or require acknowledgment of residual bias.

**(e) For list-based subgroup comparisons, ask for an interval or power calculation on the *between-group contrast itself*, not separate subgroup tests;** for prevalence gaps, ask whether direct-question bias plausibly differs across groups.

## 3. Evidence

**For (a).** At *N* = 2,000, “the bias must be greater than 4 points” for a standard list to have lower root mean squared error than a direct question (p. 1304). Under illustrative assumptions, list variance is about 14 times direct-question variance (p. 1303). This is a total-error tradeoff: ask for a plausible direct-bias range and estimator-specific variance rather than treating 4 points as a universal cutoff.

**For (b).** “The power of the list experiment to detect moderate sensitivity bias is low” (p. 1311). With 1,000 respondents, 80% power requires bias exceeding 16 points (p. 1304). A nonsignificant gap cannot establish truthful reporting if its interval still includes bias large enough to change the conclusion; ask authors to name that threshold and state what the interval rules out.

**For (c).** “In order to interpret the difference between list experiments and direct questions as a measure of sensitivity bias, we make several auxiliary assumptions” (p. 1307). They cover nonresponse, order, wording, and population comparability, alongside standard list assumptions; otherwise the gap “can no longer be considered an estimate of sensitivity bias” (p. 1307). A later direct item may be affected by list exposure even with the same respondents, so ask for evidence about order effects before accepting a bias estimate.

**For (d).** A list “will not reduce sensitivity biases arising from self-image concerns” (p. 1302). Also, “Intrusive questions may still generate bias because the text of the question includes the same sensitive item text as the direct question” (p. 1302). The list changes who can infer the answer, not the respondent's own exposure to the item; concealment from others addresses neither mechanism.

**For (e).** For a direct-question group gap to be biased, “sensitivity must affect responses in each group differently” (p. 1304). For *prevalence* contrasts in a standard list, “Differences must exceed 20 percentage points before a 2,000 unit study has 80% power to detect them” (p. 1304). Tests of subgroup bias differences are also sample hungry (p. 1304), so power must concern the between-group contrast, not separate subgroup estimates. The significance of one within-group estimate and nonsignificance of another do not test whether the groups differ. The needed interval should target the difference between groups, or the difference in their bias estimates if that is the claim.

## 4. Scope

**Applies to:** Explicit, self-reported binary attitudes, beliefs, or behaviors measured with a list experiment. If the list supplies the main prevalence estimate, (a) asks why its precision cost is justified; an accuracy claim requires comparing plausible direct-response bias with the list's lost precision under the actual allocation and estimator. A null list–direct gap offered as proof of unbiased direct reporting activates (b). A gap interpreted as sensitivity bias activates (c), which examines list assumptions and comparability of nonresponse, order, wording, and population. A claimed cure for self-image concerns or for reading an intrusive item activates (d). A list-based claim about between-group prevalence or bias differences activates (e), which targets uncertainty for that difference itself.

**Does not directly trigger a warning:** A study that already benchmarks the list's accuracy and variance has addressed (a); a list used chiefly to protect respondents need not minimize estimation error, although any prevalence claim still needs uncertainty. Check (b) stays silent if authors call a null gap inconclusive or its interval excludes a prespecified, substantively meaningful bias. Check (c) stays silent if authors claim only a methods difference or credibly establish comparability. Check (d) stays silent when the proposed referent is only another person and the list plausibly conceals individual answers. Check (e) stays silent for a pooled estimate or a direct-question-only group comparison.

**Does not apply to:** Implicit-attitude tasks, which measure a different construct, or questions without a well-defined target response to conceal. None of these list-specific checks runs when a study has no list experiment; in particular, no list–direct gap exists for (b) or (c). Ordinary recall error by itself does not activate (d). This boundary keeps the memo from treating every uncomfortable survey topic as evidence of sensitivity bias.

**Partial application:** The paper's 4-point root mean squared error and 20-point group-power thresholds are illustrations for a balanced standard list with specified prevalence and control-item variance, not universal cutoffs. Double lists and combined estimators change precision and power even at fixed *N*, so recalculate (a) and (e). When both self-image and outside scrutiny matter, a list may remove only the audience component; floor or ceiling counts can also reveal the sensitive answer. Equal direct-question bias across groups cancels in a prevalence contrast, whereas a contrast in subgroup bias is a separate estimand. For (c), using the same respondents or wording does not exclude order effects; differing wording need not defeat a comparison if its effect is assessed.

## 5. What failure looks like

In a hypothetical manuscript, the authors introduce a list because the topic sounds sensitive but give no expected range of direct-response bias, sample allocation, or estimator-specific variance. Their results table shows a wide list estimate beside a direct estimate; the text treats a nonsignificant difference as proof of honest reporting without an interval for the list–direct gap. It calls that gap sensitivity bias despite differences in question wording or survey order whose effects on responses were never assessed, and claims that concealment solves respondents' discomfort with their own answer or with reading the item. Finally, two nonsignificant within-group list–direct gaps are used to dismiss subgroup differences in bias, but the manuscript never estimates the contrast between those gaps or its uncertainty.

## 6. Test cases

**SHOULD trigger:** Lax, Jeffrey R., Justin H. Phillips, and Alissa F. Stollwerk. 2016. “Are Survey Respondents Lying about Their Support for Same-Sex Marriage? Lessons from a List Experiment.” *Public Opinion Quarterly* 80(2): 510–533. Their weighted list estimate is 58.6% (95% CI 46.7–70.4), versus 56.3% directly (pp. 519–521). They treat the similarity as evidence against sensitivity bias in the expected direction and later suggest bias may be absent, yet report an interval for list prevalence rather than the overall list–direct gap or a threshold of bias their data could exclude: (b) should trigger. Their later direct item and differing wording also make (c) a focused comparability question, although they test one possible spillover. They do use regression and Monte Carlo intervals for subgroup effects, so their subgroup analysis should not be dismissed as a comparison of separate *p*-values (pp. 523–525). Check (a) is secondary because their main goal is bias detection; (d) stays silent because the proposed pressure comes from others' judgments.

**Should NOT trigger:** Rosenfeld, Bryn, Kosuke Imai, and Jacob N. Shapiro. 2016. “An Empirical Validation Study of Popular Survey Methodologies for Sensitive Questions.” *American Journal of Political Science* 60(3): 783–802. They compare methods with official vote shares in 19 counties, not individuals' known votes, and assess accuracy and variance directly (pp. 784, 793–797). Thus (a) is addressed rather than bypassed, and they do not turn a null list–direct gap into a claim of no bias or identify such a gap as bias without a benchmark. They withhold subgroup-heterogeneity conclusions because subgroup truth is unavailable and power is low (p. 798), so (e) stays silent. No self-image or intrusive-item remedy is claimed, so (d) stays silent.
