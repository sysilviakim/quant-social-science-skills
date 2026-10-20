# Yes, but What's the Mechanism? (Don't Expect an Easy Answer)

**Full citation:** Bullock, John G., Donald P. Green, and Shang E. Ha. 2010. "Yes, but What's the Mechanism? (Don't Expect an Easy Answer)." *Journal of Personality and Social Psychology* 98 (4): 550-58.

**Contributor:** Seyeon Park

---

## 1. What the paper establishes

The Baron and Kenny (1986) regression-based mediation analysis is biased even when treatment X is randomized. As an alternative, experimental manipulation of M has been recommended, but even that fails to resolve the following three problems: (1) There is no guarantee that the manipulation moves only one of the target mediators (2) the estomate applies only to some respondents who respond to the manipulation (3) if the effect varies among individuals, the calculation of the mean indirect effect itself may be incorrect. This paper gives recommendations on how to address these problems. Mediation cannot be demonstrated through a single study or statistical techniques and can only be addressed convincingly through a research program that accumulates multiple experiments.

## 2. Checks for a reviewer

**(a)** If only M has been measured, verify whether the possibility of the confounding in M-Y relationship has been demonstrated. If a paper reports on indirect effects or mediating ratios without manipulating the mediators, look whether it provides evidence that there are no unobserved factors affecting both M and Y, and whether there are no other mediators related to M.

**(b)** If a significant indirect effect is reported, check for the possibility that the estimate is overestimated. When the missing variable moves M and Y in the same direction, the bias of b has the same sign as b, thus inflating the mediation effect. The reviewer should specifically consider which omitted variables M and Y might be likely yo be elevated or lowered in th context of the research. If any, interpret the reported indirect effects as values close to the upper bound rather than conservative estimates.

**(c)** If M is manipulated experimentally, check whether there is a justification for the argument that only the target mediator is moved. Observe whether the manipulation lists and excludes paths that can move other mediators as well. Since the mediators are are mostly cognitive variables (in psychology) that are nor generally observable, simply measuring the variables does not solve this problem.

**(d)** If M was manipulated experimentally, check whether it was specified to whom the estimated indirect effect applies. The estimate corresponds to an unknown subset rather than the entire sample, because the experimental manipulation only changes the M of some respondents who respond. Also, examine whether there is a basis for the claim that the subjects whose M is changed by the manipulation (Z) and those whose M is changed by X are the same, and whether the same conclusion can be reached using different types of manipulation.

**(e)** Check whether  ā·b̄ is interpreted as an average indirect effect without considering heterogeneity .If the X→M effect (a) and the M→Y effect (b) differ between individuals, the product of the two means differs from the mean indirect effect and can even reverse the causal effect. Check whether a and b were reported by subgroups. Subgroup estimation can mitigate heterogeneity.

## 3. Evidence

**For (a).** "Random assignment of X can ensure that X bears no systematic relationship to $e_1$ or $e_3$, but it says nothing about whether M or Y are systematically related to these error terms and thus nothing about whether mediation analyses are biased" (p. 551) The key basis for this check is that if X is assigned randomly, the relationship between the error terms of M and Y remains intact. Recommendation 1 (p. 555) also states that a researcher conducting a non-experimental mediation analysis must explain why cov($e_1$, $e_3$) = 0 and why the observed M is not correlated with other unobserved mediators.

**For (b).** The authors argue that if the bias term has the same sign as b, the Baron-Kenny estimate is inflated, and most of the time this is generally the case. (p. 551-552). Various missing variables could move M and Y in the same direction, and the more there are, the greater the bias.

**For (c).** "[E]xperimental estimates of indirect effects are accurate only if the experimental interventions affect just the mediator in question and no other mediator" (p. 552). If the manipulation does not isolate a single mediator, adding another variable will not help. Recommendation 2 (p. 555) requires that the causal paths through which X affects Y be described and that the reason why each manipulation affects only one of them be explained.

**For (d).** In the example of clinical trial analogy, just as one cannot know the effect of a pill for those who were assigned to take it but did not, the mediation effect for those who did not respond to the manipulation of M cannot be known (footnote 5, p. 553). Since mediators are often cognitive variables that cannot be observed, it is also impossible to know who did not respond (p. 553). Moreover, even if different manipulations produce the same effect on average, acting on different subgroups can lead to different conclusions about mediation (p. 553). Recommendation 3 (p. 555) states that the assumption that the changes in M induced by X and those induced by the experimenter through Z act on the same subjects is nearly impossible to verify directly, so it recommends studies that compare changes in M induced in different ways.

**For (e).** "[I]f the effects of X and M vary across subjects, regression of Y on X and M will typically not recover the average direct effect of X, even if both X and M have been experimentally manipulated" (p. 553). Figure 1 (p. 554) shows an example where the indirect effects for all individuals are positive (4 and 3), yet ā·b̄ = −0.25 is estimated. The same problem arises when a and b are negatively correlated across individuals (p. 554). Recommendation 4 (p. 555) advises checking differences in a and b between subgroups and estimating the indirect effect within relatively homogeneous subgroups, while also stating that dividing the sample reduces power.

## 4. Scope

**Applies to:** Papers that make quantitative claims such as indirect effects through mediators, mediation ratios, or "the effect of X is transmitted through M." The estimation method can be anything, such as the Baron-Kenny steps or bootstrap indirect effects. Checks (a) and (b) apply when M is a measured variable, and do not depend on whether X is randomly assigned. Checks (c) and (d) apply only when M is manipulated experimentally; the authors state that this discussion applies both to designs that directly manipulate M and to those that manipulate a variable affecting M. Check (e) applies in both cases.

**Does not apply to:** Papers that estimate only the total effect (ATE) of a randomly assigned X and do not claim mediation effects. The authors state that when mediation is not examined, the assumption that the effect is the same for each individual generally does little harm, and if X is assigned randomly, the coefficient from regressing Y on X simply indicates the average effect of X (p. 553). Therefore, all five checks should not be applied to such papers.

**Does not apply to:** Papers that analyze only heterogeneous treatment effects (moderation, CATE). Check (e) is may easily be triggered because of the word "heterogeneity," but this paper concerns the heterogeneity problem of the mean indirect effect computation breaking down. If there is no mediation claim, (e) must remain unapplied.

**Does not directly apply to:** Papers that use the word "mediated" in the text, while the actual analysis is a treatment × moderator interaction. The checks in this paper target the estimation of indirect effects, so they do not apply directly.

## 5. What failure looks like

In a non-experimental data or in an experiment with only random assignment, the paper reports a significant indirect effect using the Baron-Kenny three step model or bootstrap confidence intervals and concludes a certain amount of the effect is mediated by M. The discussion of the missing variable that moves M and Y together is either absent or expressed concisely. Estimates for a and b by subgroup were not reported. Single mean is interpreted as representing the mechanism for the entire sample. In experiments manipulating the mediator, the paper checks for only one target mediator, and discussions about other mediators that the manipulation may have affected are absent.

## 6. Test cases

**SHOULD trigger:** Zhu, Boliang. 2017. “MNCs, Rents, and Corruption: Evidence from China.” American Journal of Political Science 61(1): 84–99. Both foreign firm entry (X) and market concentration (M) are observed variables, and the author determines the mediation effect using Baron and Kenny's (1986) three-step conditions (p. 95, footnote 30). Then through estimating the ACME, the author reports that 30 % of the total effect is mediated by market concentration, while stating that the exogeneity of X and sequential ignorability are assumed to hold once covariates are controlled (p. 96, footnote 32). Thus checks (a) and (b) are triggered. Check (e) could also be triggered because the single ACME estimation does not consider heterogeneity across industries or regions. Checks (c) and (d) are nor triggered because M was not manipulated.

**Should NOT trigger:** Green, Donald P., et al. 2016. “The Effects of Lawn Signs on Vote Outcomes: Results from Four Randomized Field Experiments.” Electoral Studies 41: 143–150. In the paper, table 1 is titled "Expected mechanisms" (p. 145) and "direct or indirect effects" is repeated throughout the text (pp. 146–147). "Indirect" in this context refers to spillover in adjacent precincts (p. 146), and the study estimates only the total effects of the randomly assigned treatments rather than indirect effects through mediators. Therefore triggering here is a failure that makes the review agent become unusable.
