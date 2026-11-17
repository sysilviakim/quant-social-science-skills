# Matching Methods for Causal Inference with Time-Series Cross-Sectional Data

**Contributor:** Gyujin Han

**Full citation:** Imai, Kosuke, In Song Kim, and Erik H. Wang. 2023. "Matching Methods for Causal Inference with Time-Series Cross-Sectional Data." *American Journal of Political Science* 67 (3): 587–605.

---

## 1. What the paper establishes

The paper extends matching methods to time-series cross-sectional (TSCS) data. First, it constructs a matched set by selecting observations with identical treatment histories over a prespecified number of lags. Treatment status in the following period, t, distinguishes treated from control observations. Second, it refines the matched sets using time-varying covariates and three standard matching or weighting methods: Mahalanobis distance matching, propensity score matching (PSM), and propensity score weighting (PSW). This makes it easier to compare treatment histories and covariates between treated observations and the control observations used to estimate their counterfactual outcomes. Finally, these comparisons help assess the plausibility of the parallel trend assumption underlying difference-in-differences (DiD). The method uses a DiD estimator to estimate both short-term and long-term treatment effects, supported by visual comparisons of covariate balance.

The paper shows the advantages of this approach by comparing it with two-way fixed effects (TWFE) regression, a common method for TSCS data that relies on model assumptions. TWFE and DiD yield the same estimate in the simple two-period setting, and the parallel trend assumption can support a causal interpretation. In more general settings, however, TWFE relies on parametric assumptions and differs from a DiD design that makes the counterfactual comparison explicit. Addressing these limitations for TSCS data is also a paper's main contribution.

## 2. Checks for a reviewer

**(a) Check whether treatments before the chosen L-period history could still confound the relationship between treatment and outcome, conditional on that history and the covariates, and whether the manuscript addresses this possibility.** For studies using this method or a similar causal design that accounts for timing, choosing the number of treatment lags is a key part of identification. Check how the manuscript addresses backdoor paths left open by omitting past treatments. A central step in this method is to justify L theoretically and account for treatment history back to t−L to address this confounding. Check both the theoretical basis for L and the sensitivity of the results to its choice. What theoretical time frame and observation interval justify L? What does the study assume about treatments before t−L? Does it report how effect estimates and the number of available matches change with L, and does it account for the bias–variance tradeoff?

**(b) Check when the effect is evaluated and how the design captures its dynamics.** Identify the outcome period, t+F, and the theoretical and empirical reasons for choosing it. Also examine whether estimates at several values of F show when the effect appears, persists, or fades.

**(c) Check how the comparison is constructed: which units at which times are compared with which other units at which times.** Making these comparisons explicit is central to the proposed method and distinguishes it from common uses of TWFE. Studies using TWFE with TSCS data to make causal claims should also explain the basis and assumptions of their comparisons. Check the theoretical rationale for the comparison group used to construct the treated group's counterfactual and how that rationale is implemented in the data. In this paper, the comparison is built through matching on treatment and covariate histories while accounting for timing. A causal claim based on a parallel trend assumption, as in DiD, is a warning sign if the underlying comparison is unclear.

**(d) Check the comparison diagnostics: when and on what basis the control group is compared with the treated group, especially pretreatment balance.** After matching on treatment history, the paper refines the matched sets using covariates to compare treated and matched control observations systematically at specified time periods. Following its use of pretreatment balance checks, examine how the manuscript addresses confounding from omitted past variables.

**(e) Check how the manuscript addresses carryover effects, spillover effects, and anticipation.** For carryover, how long could the effects of past treatments persist, and is that assumption consistent with the choice of L? For spillover, could another unit's treatment affect a unit's outcome, and how does the manuscript address such effects?

**(f) Check the implications of the treatment variation plot.** The paper uses this plot to visualize treatment histories and identify patterns, including the concentration of war observations around the world wars and repeated transitions between democracy and autocracy. These patterns motivate examining authoritarian reversal as well as democratization and help interpret the findings of earlier model-based studies in greater detail. Check how the visualization of treatment history and its theoretical interpretation inform the research design.

**(g) Check how the manuscript addresses posttreatment bias.** Examine when control variables are measured and where they sit in the causal sequence. Check whether variables affected by treatment are controlled for or used in matching. When treatment status changes repeatedly, later treatments may themselves be affected by earlier treatments. Examine how the study addresses bias from conditioning on future treatment paths or selecting only observations that follow a particular path. Evaluate these choices in relation to whether the study aims to estimate a total effect or the effect of a specific treatment sequence.

## 3. Evidence

**For (a).** When discussing L, the authors state that "selecting the number of lags is part of the identification assumption" (pp. 592–593). Past treatment may confound the relationship between current treatment and outcome. Increasing L reduces the number of potential matches, creating a bias–variance tradeoff (p. 593). The authors recommend choosing L using substantive knowledge and examining sensitivity to that choice. They also explain that treatment, outcome, and covariate histories before t−L violate the assumption in Equation (9) if they confound current treatment and future outcome (pp. 593–594).

Figure 3 shows how the number of available comparisons and unmatched observations changes when matching on one year rather than four years of treatment history (pp. 599–600).

**For (b).** F specifies "the outcome of interest measured at F time periods after the administration of treatment" (p. 592). The authors explain that F should reflect substantive interests. A larger F can make the effect harder to interpret when many units change treatment status during the intervening periods (p. 593). The basic average treatment effect on the treated (ATT) does not fix the future treatment sequence, so treated units may return to the control condition and control units may receive treatment during follow-up. The effect of stable policy change requires a separate definition (p. 596). Figures 6–7 report effects for F=0 through 4 (pp. 602–603).

**For (c).** In defining the comparison group, the authors state that "the matched sets only include observations from the same time period" (p. 594). Within that period, the method selects other units with identical treatment histories from t−L through t−1, as defined in Equation (11) (pp. 594–595). Equation (18) compares each treated observation's outcome change from t−1 to t+F with the weighted average change among its matched control observations (p. 596). The authors also stress that excluding unmatched observations changes the target population, so researchers should examine the characteristics of excluded observations (p. 595).

For TWFE, the authors explain that its equivalence to a simple two-period DiD does not extend to settings with multiple periods and repeated treatment. Invoking DiD alone therefore does not justify a causal interpretation of TWFE; the model assumptions and actual comparisons must be examined (p. 597).

**For (d).** The authors emphasize that "one must examine the balance of the lagged outcome variables over multiple pretreatment periods" and add that the balance of time-varying covariates must also be checked (p. 597). Equations (19)–(20) define standardized group differences at each pretreatment period and a measure that aggregates them (pp. 596–597). Figure 5 shows that refining the matched sets with covariates improves balance substantially compared with matching on treatment history alone (p. 601). Where some imbalance remains, the authors interpret relatively constant differences in lagged outcomes across pretreatment periods as a sign consistent with the parallel trend assumption (pp. 601–602). They also state that the parallel trend assumption cannot account for unobserved time-varying confounders (p. 594).

**For (e).** The assumption is explicit: "We assume the absence of spillover effect but allow for some carryover effects (up to L time periods)" (p. 593). Another unit's treatment must not affect a unit's potential outcome, and the effects of its own past treatments are limited to the specified history. The authors acknowledge that assuming no spillover may be too restrictive in applications and leave relaxing this assumption to future research (p. 593; pp. 603–604). Checking possible effects across units follows directly from this stated limitation.

**For (f).** The treatment variation plot is intended to "help researchers build an intuition about how comparison of treated and control observation can be made" (p. 591). After identifying repeated regime changes in Figure 1, the authors distinguish democratization from authoritarian reversal. They also interpret the concentration of war observations around the two world wars as a constraint on comparability and generalization (pp. 591–592). They do not estimate the effect of ending a war because too few comparison countries remain at war and many observations cannot be matched (pp. 599–600). This is a concrete example of patterns in a visualization informing the choice of what to analyze. Separating democratization from authoritarian reversal also provides a basis for reinterpreting the original study's findings on democracy's effects (p. 602).

**For (g).** In discussing treatment sequences, the authors identify the problem of "avoiding posttreatment bias (as future treatments may be caused by past treatments)" (p. 588). They also warn that the long-term effects of democratization may introduce posttreatment bias through carryover when comparing observations across time (p. 592). On the same page, they assume that the causal order within a period is covariates, treatment, then outcome: covariates must be realized before treatment. This supports checking the timing and causal position of control variables.

## 4. Scope

**Applies to:** studies using TSCS data to answer causal questions. For checks (a)–(g), the timing of treatment history and the assumptions about it matter whether a study uses TWFE, the proposed matching method, or another method that constructs a counterfactual, such as synthetic control (Abadie et al. 2010).

Studies using panel data may also find these checks useful because timing is central to their designs. Checks (a), (b), (c), and (d) are also relevant more broadly to causal designs that account for potential differences between treated and comparison groups.

**Does not directly apply to:** studies that use data with a time dimension and make causal claims but are not suited to matching, or studies that do not consider a counterfactual.

**Does not apply to:** analyses of a single time period and descriptive or exploratory studies that make no causal claims.

## 5. What failure looks like

A manuscript makes causal claims about changes over time without considering a counterfactual.

A study uses TSCS data and adopts the paper's matching method but provides no clear theoretical discussion of the number of lags or how long treatment effects are expected to last.

A manuscript states, "We estimate causal effects because we include country and year fixed effects," but does not explain which control observations are compared with each treated observation.

A study with a similar design proceeds without adequately balancing the treated and control groups.

A study routinely uses only one lag even though past treatment may have lasting effects, and reports neither estimates nor the number of available comparisons under alternative lag lengths.

A manuscript does not address how long the effects of past treatments persist, whether interference occurs across units, or whether anticipation of treatment changes behavior or outcomes before treatment begins. It uses the proposed matching method without a clear assessment of the parallel trend assumption.

A study uses the paper's method but provides neither a clear theoretical account of treatment history nor a treatment variation plot, leaving the reader with little description of when and how treatment occurs.

Other signs include choosing an unnecessarily long treatment history without considering the loss of potential matches, controlling for variables affected by earlier treatment without addressing posttreatment bias, or failing to discuss excluded observations and how their exclusion changes the target population.

## 6. Test cases

**SHOULD trigger:** Acemoglu, Daron, Suresh Naidu, Pascual Restrepo, and James A. Robinson. 2019. "Democracy Does Cause Growth." *Journal of Political Economy* 127(1): 47–100. The study estimates the causal effect of democratization using country-level panel data. A reviewer should therefore check adjustment for past histories, construction of the comparison group, and the timing of effect evaluation.

**Should NOT trigger:** Tach, Laura, Barrett Lee, Michael Martin, and Lauren Hannscott. 2019. "Fragmentation or Diversification? Ethnoracial Change and the Social and Economic Heterogeneity of Places." *Demography* 56(6): 2193–2227. The study observes U.S. places in 1980, 1990, 2000, and 2010 to examine how changes in ethnoracial diversity relate to changes in other forms of socioeconomic heterogeneity. It uses panel models with place fixed effects and time indicators. The authors explicitly describe the analysis as descriptive rather than a counterfactual causal analysis because the changes occur over the same period and the processes cannot be separated. It would therefore be a review error to flag a failure of causal identification simply because the paper does not specify a treated group, a counterfactual, L, or F. This case marks the boundary: using panel data and fixed effects alone should not automatically trigger these causal-inference checks.
