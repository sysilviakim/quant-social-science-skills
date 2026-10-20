# Matching Methods for TSCS Data

**Contributor:** Yanlin Jin

**Full citation:** Imai, Kosuke, In Song Kim, and Erik H. Wang. 2023. "Matching Methods for Causal Inference with Time-Series Cross-Sectional Data." *American Journal of Political Science* 67(3): 587–605. doi:10.1111/ajps.12685.

## 1. What the paper establishes

Matching methods are good at improving the validity of causal inference. But they are mostly used with cross-sectional data and rarely with time-series cross-sectional (TSCS) data, because TSCS data are complex: a unit can be treated many times, and treatment timing differs across units. So most researchers use fixed effects (FE) regression instead. The problem is that FE models rely heavily on parametric assumptions, offer few diagnostic tools, and make it hard to see how the counterfactual outcomes are actually estimated. This paper fills the gap by developing matching methods for TSCS data.

## 2. Checks for a reviewer

**(a) Check whether the paper shows what its treatment variation looks like** (e.g., a treatment variation plot). Which units change treatment status, when, and in which direction? Do they switch back and forth? Is the variation spread across units and time, or concentrated in a small subset of the data? If variation is concentrated, the estimate may not generalize beyond that subset; if one direction has few changes, its effect cannot be credibly estimated.

**(b) Check whether the paper uses TWFE and justifies it as DiD.** This is the specific, common, and consequential error. TWFE equals DiD only with two periods and treatment given to some units in the second period. Otherwise the equivalence breaks down, and the DiD justification holds only if the linear model is correct. A paper that calls TWFE “a generalized DiD” and says nothing more has not shown how its counterfactuals are built.

**If the paper uses matching methods for TSCS data:**

**(c) Check whether the estimand is clear.** Is the target the ATT, the ART (average treatment effect on the reversed), or the ATT of stable policy change (treatment stays in place for F periods)? Does the paper give a reason for F, such as an interest in short-term or long-term effects? If many units switch status within F periods, the default ATT is hard to interpret, and the stable-policy-change version is the better choice.

**(d) Check the choice of L, the number of past periods of treatment and covariates the method adjusts for.** It assumes treatment more than L periods ago does not affect the outcome. Does the paper state L and give a substantive reason for it? Does it report results under other values of L? If results change across L, the conclusion is fragile: a small L risks bias from omitted carryover, and a large L leaves fewer matches.

**(e) Check its matched sets and covariate balance.** Are controls drawn from the same time period, with an identical treatment history? Treated observations without a match are dropped, the paper should report how many and which ones, since this changes the target population. It should also report covariate balance after refinement, for lagged outcomes and time-varying covariates across multiple pretreatment periods. This help evaluate the appropriateness of the parallel trend assumption used to justify DiD estimator.

**(f) Check its standard errors.** The proposed standard errors are conditional on the matching weights and do not include uncertainty from building the matched sets; does the paper say so? If it uses a bootstrap, does it resample whole units and keep the weights fixed? 

**(g) Check whether assumptions the method cannot fix are plausible.** Is there a likely unobserved confounder that changes over time? Could one unit’s treatment affect other units’ outcomes, as with neighboring countries? When units are geographically or economically linked, check whether the manuscript addresses spillover.

## 3. Evidence

**For (a).** The authors ask researchers to check “whether the treatment sufficiently varies both over time and across units ... or the treatment variation is concentrated in a relatively small subset of the data” (p. 592). The reason is that “the internal and external validity of causal effect estimation with TSCS data critically rely upon such variation” (p. 592). In Scheve and Stasavage’s data, most wars fall in the two world wars, so “it may be difficult to generalize the estimates obtained from this data set beyond the two world wars” (p. 592). Concentrated variation limits what the estimate can describe. The authors also skip the effect of ending a war “because the latter lacks enough control countries” (p. 599). 

**For (b).** The equivalence holds “if there are two time periods and the treatment is administered to some units only in the second time period” (p. 597), but it “does not generalize to the multiperiod DiD design” (p. 597). Outside this simple case, TWFE is no longer a DiD. The error is common: the authors note that “many applied researchers motivate the use of two-way fixed effects regression by the DiD design” (p. 597). Theorem 1 shows that writing the DiD estimator as a TWFE regression requires weights W_it that “can take a negative value in many cases” (p. 597). Ordinary TWFE does not use these weights, so its result rests on the model rather than the design. Hence the DiD argument “is invalid unless the modelling assumption is correct” (p. 597). The error is also consequential: in simulations, TWFE “suffers from a substantial bias unless the model is correctly specified” (p. 588), especially when relevant lags are omitted (p. 598). And because TWFE makes it “difficult to intuitively understand how counterfactual outcomes are estimated” (p. 587), the reader cannot see which comparisons drive the result.

**For (c).** In this paper, the treated “are those who experience the policy change” (p. 593), so the ATT is the effect of switching into treatment; the ART is its counterpart for switching out (p. 593, n. 5). The choice of F “determines whether one is interested in short-term or long-term causal effects” (p. 593). Because the default ATT allows reversal before the outcome is measured, “a large value of F may make the interpretation of causal effects difficult if many units switch the treatment status during the F lead time periods” (p. 593). The ATT of stable policy change requires the treatment to stay “in place at least for F time periods” (p. 593).

**For (d).** "The choice of L is important and faces a bias–variance tradeoff" (p. 593). The authors recommend choosing L by substantive knowledge and checking "the sensitivity of empirical results to this choice" (p. 593). They redo Scheve and Stasavage with four lags because one lag "may not be sufficient" (p. 599), and the results change (Figure 7, p. 603).

**For (e).** Matched sets include only observations “from the same time period” with “the identical treatment history from time t − L to t − 1” (p. 594). Unmatched treated observations are dropped, and researchers should examine them "as this modifies the target population" (p. 595). For the end of war, 18 cases are unmatched, so the authors do not estimate that effect (p. 600). On balance, “one must examine the balance of the lagged outcome variables over multiple pretreatment periods as well as that of time-varying covariates” to evaluate “the appropriateness of the parallel trend assumption” (p. 597)

**For (f).** The standard errors “do not account for the uncertainty about a matching procedure” (p. 597). “[A] standard bootstrap procedure yields an invalid inference for matching estimators”; the authors avoid this “by conditioning on the weights rather than recompute them for each bootstrapped sample” (p. 598), resampling whole units to preserve within-unit dependence (p. 598).

**For (g).** “[T]his parallel trend assumption cannot account for unobserved time-varying confounders” (p. 594). The method also assumes no spillover, and the authors concede that “[i]n many applications, the assumption of no spillover effect may be too restrictive” (p. 593).

## 4. Scope

**Applies to:** observational studies with TSCS data, a binary treatment, and a causal claim(pp. 587, 592). Treatment can be adopted once or switch on and off. Check (a) applies to any such paper. Check (b) applies when the paper uses TWFE and justifies it as DiD. Checks (c)–(g) apply when the paper uses matching or weighting for TSCS data.

**Does not directly apply to:** non-binary (e.g., continuous) treatments. The paper covers only binary treatment and only suggests an extension (p. 603). Settings where spillover between units matters (e.g., neighboring countries, social networks). The method assumes none (p. 593). 

**Does not apply to: c**ross-sectional data with one observation per unit there is no treatment history to match on.

## 5. What failure looks like

A paper matches only on treatment history and calls the groups comparable. It does not refine the matched sets on past outcomes and covariates. It shows no covariate balance, yet applies DiD as if parallel trends held. It drops treated observations that have no match and does not say so, so the target population changes without the reader knowing.

## 6. Test cases

**SHOULD trigger:** Scheve, Kenneth, and David Stasavage. 2012. “Democracy, War, and Wealth: Lessons from Two Centuries of Inheritance Taxation.” *American Political Science Review* 106(1): 81–102. Using data on 19 countries from 1816 to 2000, the authors regress the top inheritance tax rate on lagged war mobilization with country and period fixed effects. They call this a “generalized difference-in-differences framework” and interpret the estimates as causal “under the usual assumptions of the difference-in-differences framework” (p. 91). Countries enter and leave war at different times, but the paper never shows which country-periods serve as counterfactuals. Because the main claim rests on a multiperiod TWFE model justified as a DiD, the case is within scope, and checks (a) and (b) should run. (a) should flag that mobilization years fall almost entirely in the two world wars (p. 91, n. 28). (b) should flag both the DiD justification and the lag structure: the authors argue that war’s effect on taxation “will continue for some time” (p. 82), yet the model includes only a one-period lag of mobilization.

**Should NOT trigger:** Bilach, Thomas J., and Sean Patrick Roche. 2026. “Using PanelMatch to Estimate the Causal Effects of Police Interventions with Irregular Treatment Patterns: An Assessment of the NYPD’s Summer All Out, 2014–2019.” *Journal of Quantitative Criminology*. It is in scope (TSCS, binary treatment that switches on and off), but it does what the checks ask. It shows treatment variation in a plot (Fig. 2, p. 7), explains why TWFE weights may be negative (p. 25), and ties L to the police planning process and compares 2- and 4-month windows (pp. 26–30). It also shows balance over the 4-month window for three refinement methods (Fig. 7, pp. 27–28).