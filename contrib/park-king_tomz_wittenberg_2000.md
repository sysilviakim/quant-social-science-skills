# Making the Most of Statistical Analyses

**Contributor:** Minje Park

**Full citation:** King, Gary, Michael Tomz, and Jason Wittenberg. 2000. "Making the Most of Statistical Analyses: Improving Interpretation and Presentation." *American Journal of Political Science* 44(2): 347–361.

## 1. What the paper establishes
Political science has rapidly adopted statistical methods, but results are often reported as coefficients and significance levels that are hard to interpret and say little about the substantive quantity the research is about. The paper argues that researchers should instead convert their estimates into quantities on the outcome’s scale, such as predicted probabilities, expected values, and first differences, and report each with its uncertainty. It offers a simulation procedure, implemented in the software CLARIFY and demonstrated by reanalysis of published works. 

## 2. Checks for a reviewer
(a) Check whether a manuscript that estimates a model with a nonlinear link interprets its main result only through coefficient signs and significance stars (p. 348). If so check whether it also reports at least one quantity of interest on the outcome scale such as a predicted probability, an expected value or a first difference (p. 348). Check whether it states the values at which the other covariates are held (p. 351).

(b) When a substantive conclusion depends on comparing or sizing model-derived quantities, such as fitted values, first differences, or marginal effects, check whether those quantities include a measure of uncertainty (p. 349). When a manuscript compares cells in a counterfactual table or points on a predicted-probability curve, check whether it shows that the differences are distinguishable, not merely different in point estimate (p. 356). Small gaps and universal claims such as “always” are most likely to fail once uncertainty is added, whereas large gaps usually survive (p. 357).

(c) Check whether the type of interval matches the type of claim (p. 350). A claim about a single actual outcome, such as an election forecast, needs predicted-value uncertainty (p. 350). A claim about an average effect needs expected-value uncertainty (p. 351). An expected-value interval used for a forecast is too narrow and overstates confidence, whereas a predicted-value interval used for an average effect is too wide (p. 350).

(d) If the dependent variable was transformed for estimation (for example, ln Y), check how quantities on the original scale were obtained (p. 354). Exponentiating the fitted mean of ln Y does not give the expected value of Y (p. 354). 

(e) If the manuscript reports simulated quantities of interest, check how the simulation was done (p. 350). Were parameters drawn jointly from the full variance–covariance matrix rather than one at a time from their standard errors (p. 353)? Were ancillary parameters such as variances, cutpoints, and shape parameters drawn along with the coefficients (p. 353)? Were bounded parameters reparameterized (p. 353)? Is the reported precision justified by repeated runs (p. 354)?

## 3. Evidence
For (a). Having estimated a model, "many researchers stop after a cursory look at the signs and 'statistical significance'" (p. 348) despite nonlinear coefficients being hard to interpret. The authors instead recommend that "researchers should calculate and present quantities of direct substantive interest" (p. 348). Covariate values matter because a first difference holds the other variables at chosen values such as their means (p. 351).

For (b). Researchers report standard errors for coefficients, but "they overlook it when computing quantities of interest" (p. 349). Reanalyzing Garrett's point-estimate counterfactuals (p. 356), the authors find the left-labor gap indistinguishable at low market integration but clear at high integration. His claim that left-labor governments always spend more therefore fails, because "the results could have arisen from chance alone" (p. 357).

For (c). Because "predicted values have a larger variance than expected values" (p. 350), forecasting an actual election calls for predicted values. Highlighting an average effect calls for expected values instead (p. 351). The direction of a mismatch follows from which source of variance is left out.

For (d). With ln Y as the dependent variable, computing its fitted mean and then "exponentiating gives the wrong answer," so each simulated draw should be exponentiated instead (p. 354).

For (e). "Simulating each parameter independently would be incorrect" because it ignores covariances among estimates (p. 353). The authors also warn that "one common mistake is to exclude some parameters" (p. 353), such as ancillary parameters. Bounded parameters should be reparameterized (p. 353), and the whole algorithm rerun to check precision (p. 354).

## 4. Scope
Applies to: quantitative manuscripts that estimate a parametric model and draw a substantive conclusion from it. Check (a) applies to nonlinear models (logit, probit, ordered, multinomial, count, and duration models) and to linear models with interactions, where a constituent coefficient is not the variable's effect (p. 356, n. 7). Check (b) applies only when a conclusion rests on comparing or sizing derived quantities that are reported without intervals; the trigger is how the conclusion is drawn, not the model type (p. 357). Check (c) applies only when an interval is reported and the claim is clearly about either a single outcome or an average. Check (d) applies only when the outcome was transformed for estimation and results are reported on the original scale. Check (e) applies only when the manuscript itself simulates quantities from a normal approximation. No second-best fallback is needed because the remedy works "without new assumptions, new statistical models, or new data collection efforts" (p. 360).

Does not apply to: critiques of specification, identification, or omitted variables. The procedures assume that "the statistical model is identified and correctly specified" (p. 351). This is the sharpest boundary in the paper, and citing it against a model's specification overreaches past what the authors claim.

Does not apply to: linear models with an untransformed outcome and no interactions that report coefficients with standard errors (check (a)), since "when g is linear there is obviously no need for a linearizing approximation" (p. 352, n. 4). Check (a) also stays silent when the parameters are of intrinsic interest, such as ideal points (p. 352).

Does not apply to: experimental differences in means or coefficients already reported with intervals (check (b)), or to coefficient-only presentations with no interval at all (check (c)), which are a (b) problem.

Does not apply to: log-outcome models interpreted only on the log scale, or Poisson models that estimate E(Y) directly through a log link (check (d)).

Does not apply to: MCMC, bootstrap, or analytical calculations (check (e)), which do not rely on the normal-approximation step (p. 352).

Partial application: illustrative plots and very large samples (check (b)). If a predicted-probability plot lacks bands but the conclusions rest on coefficient tests with standard errors, suggest adding bands rather than flag a failure. When N is large, intervals are narrow (p. 355, n. 6), so request them but mark the issue low priority.


## 5. What failure looks like
Each failure below matches one check. For (a), a logit or probit table with significance stars is interpreted only in sentences such as "the coefficient on education was statistically significant at the 0.05 level" (p. 348), and no predicted probabilities or first differences appear anywhere. For (b), a counterfactual table reports point estimates without intervals, as in Garrett's Table 1 (p. 356), and the text claims that one group "always" exceeds another even though the gaps between cells are small. For (c), an election forecast comes with an interval but never says whether it describes the expected value E(Y) or the actual outcome Y. For (d), levels on the original scale are computed by exponentiating fitted values, exp(Xβ̂), from a model of ln Y. For (e), the methods section says parameters were drawn using their standard errors, with no mention of the covariance matrix.

## 6. Test cases
SHOULD trigger: Bueno de Mesquita, Bruce, and Randolph M. Siverson. 1995. "War and the Survival of Political Leaders: A Comparative Study of Regime Types and Political Accountability." American Political Science Review 89(4): 841–855. The authors estimate a censored Weibull model and report hazard ratios, the exponentiated coefficients, as point estimates without intervals (p. 851). From these they conclude that victory does not enhance survival as much as prewar tenure does for authoritarian leaders, a comparison between derived quantities that they never test (p. 851). Check (b) should fire and, by its directional logic, flag this small gap as most at risk, while the large tenure effect should survive, as King, Tomz, and Wittenberg's simulations confirm (p. 359). Check (d) should stay silent, because the logged variables are regressors, not the outcome (p. 849). A good agent fires (b) and not (d).

Should NOT trigger: Scheve, Kenneth, and Michael Tomz. 1999. “Electoral Surprise and the Midterm Loss in U.S. Congressional Elections.” British Journal of Political Science 29(3): 507–521. A near-miss: it estimates a binary logit, so an agent keyed only to model type would fire check (a). But King, Tomz, and Wittenberg cite it as an application of simulated counterfactual predictions in a binary logit (p. 358, n. 11). The article itself simulates changes in predicted probability from the estimated coefficients (p. 516) and reports them with 95 percent intervals rather than stopping at coefficients (p. 518). Triggering (a) here would mean the agent is reacting to the word “logit,” not to the failure.
