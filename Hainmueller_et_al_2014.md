# Causal Inference in Conjoint Analysis

**Contributor:** Haleen Jung

**Full citation:** Hainmueller, Jens, Daniel J. Hopkins, and Teppei Yamamoto. 2014. "Causal Inference in Conjoint Analysis: Understanding Multidimensional Choices via Stated Preference Experiments." *Political Analysis* 22(1): 1–30. doi:10.1093/pan/mpt024.

---

## 1. What the paper establishes

Conjoint experiments can identify the effects of individual attributes within multidimensional alternatives by randomly varying the information respondents see. Hainmueller, Hopkins, and Yamamoto define the average marginal component effect (AMCE), which averages an attribute change's causal effect over a specified distribution of the remaining attributes and competing profiles, and show how it can be identified and estimated without specifying a behavioral model of choice. The interpretation and uncertainty of those estimates still depend on the randomization scheme, the assumptions used to pool responses, and dependence among observations from each respondent.

## 2. Checks for a reviewer

**(a) Check whether the paper states what each AMCE compares and what distribution it averages over.** Locate the reference level, outcome scale, assignment probabilities, and any alternative averaging weights. Check whether claims about an attribute's importance remain tied to those contrasts and weights.

**(b) If attribute combinations were restricted, check whether estimation and interpretation respect those restrictions.** Compare the assignment rules with the analysis. For linked attributes, look for comparisons within valid strata and an appropriately weighted average, rather than an unrestricted difference in means or an uninterpreted main-effect coefficient.

**(c) If responses are pooled across repeated tasks or profile positions, check the evidence supporting that pooling.** Look for task-specific and position-specific AMCEs, or interactions testing their differences. When task effects differ, compare the pooled result with an analysis of the first task.

**(d) Check whether uncertainty accounts for observations contributed by the same respondent.** Read the standard-error or bootstrap description, rather than inferring independence from the number of profile rows. Look for respondent-clustered inference or a bootstrap that resamples respondents.

**(e) When a conjoint presents many attributes or potentially distracting profiles, check the evidence against information overload and distraction.** Look for AMCEs by randomized attribute-row position and, where relevant, by exposure to atypical profiles. Check whether the conclusions distinguish these diagnostics from validation of real-world behavior.

## 3. Evidence

**For (a).** The authors write, "It should always be made clear what weighting distribution of the treatment components was used in calculating the AMCE" (p. 12). The estimand averages over other attributes, including competing profiles, so changing that distribution can change the effect being estimated; the manuscript should justify its weights and identify the baseline and outcome scale rather than present the coefficient as an unconditional measure of importance (pp. 10–12, 19).

**For (b).** In the restricted immigration experiment, "the AMCE is only defined for a subset of the linked attribute values" (p. 20). The paper estimates within-stratum differences and averages them using the known assignment distribution, with a regression implementation that includes the relevant interactions (pp. 14–15). For example, education contrasts involving low schooling exclude high-skill occupations ruled out by design; adding ordinary controls cannot recover those excluded counterfactuals (pp. 11, 20).

**For (c).** For repeated tasks, the authors recommend "examining if the results from later tasks differ from those obtained in the first task" (p. 8). For profile positions, "the estimated AMCEs should be similar regardless of whether the attribute occurs in the first or the second profile in a given task" (p. 25). These implications make pooling assessable through interactions or separate estimates; the immigration application implements both comparisons (pp. 22, 25).

**For (d).** AMCE estimates can be coupled with "standard errors corrected for within-respondent clustering" (p. 17). Choosing one profile rules out its competitors, while repeated choices or ratings can share respondent-specific preferences, so treating profile rows as independent ignores the dependencies described on pp. 16–17. The alternative block bootstrap resamples respondents, retaining their observations together (p. 17).

**For (e).** To test attribute-order effects, "the order of the attributes must be randomly varied across respondents" (p. 25). The authors then compare effects across row positions and across groups exposed to different numbers of atypical profiles (pp. 26–27). However, "atypical combinations as such do not pose a threat to internal validity" (p. 26): the diagnostic addresses possible distraction and external validity, rather than treating every unusual combination as a randomization failure.

## 4. Scope

**Applies to:** These checks primarily concern randomized conjoint experiments measuring choices among profiles or numerical ratings of profiles (pp. 5–7). Check (a) applies when an attribute effect is averaged over other randomized components or competitors. It can also apply to a factorial survey experiment that collapses across treatment dimensions, even without the conjoint label (p. 12). Check (b) applies specifically when assignment restrictions link an attribute to other attributes; a restriction elsewhere in the design does not automatically require changing the estimator for an independent attribute (pp. 13–16). Check (c)'s task comparison applies when the analysis pools repeated tasks, and its position comparison applies when it pools profiles across presentation positions (pp. 8–9). Check (d) applies when multiple analyzed profile observations belong to a respondent, including profiles within one forced-choice task (pp. 16–17). Check (e) applies when the display or profile combinations create a plausible overload or distraction concern (pp. 25–27).

**Does not directly apply to:** Observational comparisons of actual candidates or immigrants do not acquire experimental identification merely because their data contain multiple attributes. Random assignment of profile attributes is an identifying condition here (p. 9). Likewise, ordinal rankings and point allocations fall outside the paper's formal analysis of choice and rating outcomes (p. 7, n. 4). Do not automatically transfer these estimators to those response formats.

**Does not apply to:** Check (b)'s demand for restriction-related interactions should stay silent for a completely independently randomized attribute. A difference in means or suitable dummy-variable regression suffices for its AMCE; heterogeneous effects do not themselves require modeling every interaction to estimate the average effect (pp. 15–16). The task component of (c) should stay silent when only one task per respondent is analyzed. Check (d)'s specific within-respondent correction is unnecessary when each independent respondent contributes just one analyzed outcome. Attribute-row and atypical-profile diagnostics under (e) do not apply to a single-wording experiment with no profile table or varying attribute combinations.

**Partial application:** If later-task effects differ, a first-task-only analysis is an available fallback with lower precision; it estimates effects at initial exposure and cannot validate pooling the later responses (pp. 8, 25). For profile-order concerns, examining positions separately follows the paper's framework, but should be labeled a second-best analysis that narrows the target rather than establishes order invariance. The authors provide partial diagnostics, not tests that can prove the individual-level assumptions (pp. 7–9).

## 5. What failure looks like

A manuscript calls education the most important immigrant attribute but omits its comparison level and the distribution over which effects are averaged (a). It excludes low-education doctors, then interprets an education coefficient as applying across all occupations without a valid-stratum calculation (b). Its pooled AMCE figure includes repeated tasks and both profile positions, but neither the article nor its appendix examines whether effects differ across them (c). Its uncertainty calculation treats thousands of profile rows as independent even though several belong to each respondent (d). Finally, it asserts that a dense profile table caused no overload without examining randomized row positions, or claims that stable diagnostic estimates validate actual admission decisions (e). These are distinct failures; evidence of one does not establish the others (pp. 12, 20, 22, 25–27).

## 6. Test cases

**SHOULD trigger:** Hainmueller, Jens, and Daniel J. Hopkins. 2015. "The Hidden American Immigration Consensus: A Conjoint Analysis of Attitudes toward Immigrants." *American Journal of Political Science* 59(3): 529–548. Respondents evaluate five pairs varying nine attributes, with restrictions linking education to occupation and origin to application reason (pp. 534–535). Checks (a)–(e) should run, but triggering means assessing the safeguards: the paper already reports respondent-clustered standard errors and interaction-based averaging over valid strata (p. 537, n. 7).

**Should NOT trigger:** Hainmueller, Jens, and Michael J. Hiscox. 2010. "Attitudes toward Highly Skilled and Low-skilled Immigration: Evidence from a Survey Experiment." *American Political Science Review* 104(1): 61–84. Its main split-sample experiment changes only the skill wording of one immigration question (p. 67), so these conjoint-specific checks should remain silent for that contrast. Its separate crossover follow-up raises its own repeated-response concerns (pp. 68, 80); that does not justify imposing profile-table diagnostics on the main experiment.
