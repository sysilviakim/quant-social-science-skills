# Good and Bad Controls

**Full citation:** Cinelli, Carlos, Andrew Forney, and Judea Pearl. 2024. "A Crash Course in Good and Bad Controls." *Sociological Methods & Research* 53(3): 1071–1104. doi:10.1177/00491241221099552.

**Contributor:** Sung Jihyun

---

## 1. What the paper establishes

Adding a variable to a regression can move the coefficient on the treatment away from the causal effect it is meant to represent, not only toward it. Whether a control is "good," "bad," or "neutral" depends on its position in the causal structure, not on whether it is measured before treatment, predicts the outcome, or makes the model "richer." Using directed acyclic graphs, the paper shows that common rules of thumb fail in both directions: some pre-treatment variables are bad controls (M-bias, bias amplification), and some post-treatment variables are harmless or even helpful. Covariate choice for causal claims therefore requires an explicit causal argument.

## 2. Checks for a reviewer

**(a) Check whether the manuscript justifies each control with a causal argument about the path it blocks, rather than by the number of controls, model fit, or "pre-treatment" status alone.** A sentence such as "we control for a rich set of covariates" is not a justification.

**(b) Check whether any control is a mediator of the treatment effect or a descendant of a mediator when the stated estimand is the total effect.** If so, flag overcontrol bias. In the linear case with no other confounding, this pulls the estimate toward zero, so a small or null total effect may be an artifact of the control. If the stated estimand is a controlled direct effect, check instead whether the paper addresses confounding between the mediator and the outcome.

**(c) Check whether the analysis conditions on a common effect of treatment and outcome, or on a descendant of the outcome, either as a regression control or by restricting the sample (e.g., only employed people, only enlisted soldiers, only hospitalized patients).** Flag collider or selection bias. Note one exception: such conditioning does not invalidate a test of the sharp null of no effect.

**(d) Check whether the manuscript conditions on variables that strongly predict treatment but have no plausible path to the outcome except through treatment, while unobserved confounding plausibly remains.** Flag that, in linear models, this amplifies the remaining bias rather than reducing it. Also check whether a "pre-treatment" control could be a collider of two unobserved causes (M-bias).

**(e) Second-best: when the causal status of a control cannot be settled from the paper's own causal story, check whether the paper reports estimates with and without it and a sensitivity analysis bounding the plausible bias.** This does not identify the effect; it shows how conclusions depend on assumptions the data cannot verify.

## 3. Evidence

For (a).The authors diagnose the folk practice directly: readers of standard textbooks "may get the impression that adding “more controls” to a regression model is always better" (p. 1072). They also say the usual textbook rule that good controls are unaffected by treatment is "neither necessary nor sufficient" (p. 1073). Their conclusion is that "structural knowledge is indispensable for deciding whether a variable is a good or bad control" (p. 1085). A manuscript that offers no structural argument for its controls has not met this standard.

For (b).For a mediator, "Controlling for Z will block the very effect we want to estimate (the total effect of X on Y), thus biasing our estimates" (p. 1078). For a descendant of a mediator, "controlling for Z is equivalent to partially controlling for the mediator M, and will thus bias our estimates" (p. 1078). The direction comes from the linear derivations: with a mediator controlled, the adjusted coefficient equals zero while the true effect does not (Model 11, p. 1095), and with a descendant of the mediator the coefficient is multiplied by a factor below one (Model 12, pp. 1095–1096). For the CDE case, adjusting for the mediator "would indeed be appropriate," but an unobserved mediator–outcome confounder then biases the CDE estimate (p. 1079).

For (c).Adjusting for a common effect "induces what is classically known as “selection bias” or “collider stratification bias”" (p. 1080). For a pure descendant of the outcome, "controlling for the effects of the outcome Y will induce bias in the estimate of the ACE, even without the direct arrow X → Z" (p. 1081). Sample restriction counts as conditioning: "Restricting the analysis to those enlisted in the military is therefore equivalent to controlling for Z, and leads to selection bias" (p. 1083). The null-test exception is explicit: "adjusting for Z is valid for testing whether the effect of X on Y is zero" (p. 1081).

For (d).Textbooks "usually deem pre-treatment variables “good controls”," yet in the M-structure "Careful analysis, however, reveals that Z is a “bad control.”" (p. 1076). For a variable that affects only treatment, naive control "will not only fail to deconfound the effect of X on Y, but, in linear models, will amplify any existing bias" (p. 1078); the derivation shows the absolute bias with adjustment always exceeds the bias without it (p. 1095). The authors warn against the propensity-score habit "of conditioning on all pre-treatment predictors of the treatment assignment" (p. 1085).

For (e).When a control both closes and opens a back-door path, "whether adjusting for Z reduces or increases the absolute value of the bias cannot be determined without further assumptions," and "progress can be made with sensitivity analyses" (pp. 1076–1077). The authors list the plausibility judgments such analyses require, such as the strength of latent confounders relative to observed ones (p. 1085). These remain assumptions, not identification.

## 4. Scope

**Applies to**: manuscripts that make a causal claim by adjusting for covariates, through regression, matching, weighting, or stratification, and whose identification rests on selection on observables. The paper's target is explicitly "identification of causal effects through simple covariate adjustment" (p. 1084). The problem is not a linearity artifact: it "holds regardless of functional form assumptions" (p. 1075). However, the *directional* claims in (b) and (d) are derived for linear models (pp. 1078, 1095), so the agent should state direction only as a linear-case expectation.

**Randomized experiments.** Checks (a), (d), and (e) should stay silent when treatment is randomly assigned and only pre-treatment covariates are added, because random assignment already closes back-door paths; a pre-treatment covariate cannot introduce confounding there. Checks (b) and (c) still apply in experiments: controlling for a variable measured after treatment, or dropping respondents based on a post-treatment response, can bias an otherwise clean experimental estimate.

**Does not apply to purely predictive models.** The paper concerns "the causal interpretation of regression models" (p. 1071). A forecasting model that makes no causal claim about a coefficient should not trigger any check.

**Does not apply when the variable is used for a different identification strategy.** An instrument is a bad control but "can still be used as an instrument" (p. 1084), and the front-door criterion can legitimately use post-treatment variables (p. 1084). Check (d) must stay silent when the instrument-like variable is used as an instrument rather than as a control.

**Check (b) does not fire merely because a variable is post-treatment.** "Contrary to folklore, not all “post-treatment” variables are inherently bad controls" (p. 1080). A variable caused by treatment but with no path to the outcome is neutral for bias (Model 14, p. 1080). The trigger is a variable on, or descended from, a causal path from treatment to outcome. Nor does (b) fire on a cause of the mediator, which is neutral and may improve precision (Model 13, p. 1079).

**Check (b) changes form when the estimand is a controlled direct effect** (p. 1079). Then the mediator control is required, and the reviewer should ask about mediator–outcome confounding instead.

**Check (c) should stay silent when the paper only tests the sharp null** of no effect (p. 1081), and should not fire on a pure cause of the outcome, which is a neutral control that can improve precision (Model 8, p. 1077).

**Multiple controls.** The status of one variable "may change depending on the context of the other variables under consideration" (pp. 1083–1084). The agent should evaluate the full adjustment set, not flag variables one at a time.

**Neutral controls and precision.** Variables that predict only treatment can hurt precision, while those predicting only the outcome help (p. 1077). This is an efficiency comment, not a bias problem, and should not be reported as a validity failure.

## 5. What failure looks like

A methods section says the authors "control for a comprehensive set of covariates" or "include all available pre-treatment variables" without saying what each one blocks. The regression table adds variables such as income, occupation, or attitudes measured after the treatment, alongside a total-effect claim. A robustness table that adds more controls is presented as reassurance, and the coefficient shrinks toward zero as post-treatment variables enter. The sample is restricted to a group defined by a consequence of treatment or outcome (e.g., employed workers, survivors, enlisted recruits) with no discussion of selection. In an experiment, the treatment model includes a covariate measured after exposure, or respondents are dropped for answers given after treatment.

## 6. Test cases

**SHOULD trigger:** Fryer, Roland G., Jr. 2019. "An Empirical Analysis of Racial Differences in Police Use of Force." *Journal of Political Economy* 127(3): 1210–1261. The treatment is civilian race and the outcome is police use of force, but every data set is restricted to people who already had a police encounter: "Unless otherwise noted, all results are conditional on an interaction" (p. 1212). Being stopped or arrested is plausibly affected both by race and by unobserved factors that also affect force, which is the collider structure of Model 16, so check (c) should fire. Fryer himself notes that one may find "no differences in police use of force, conditional on an interaction, but large racial differences in the probability" of such interactions (p. 1225), and his own selection estimates range from blacks being 323 percent more to 47.6 percent less likely to be stopped (p. 1229). The headline null for shootings is explicitly conditional and "does not, however, rule out" racial differences in whether interactions occur (p. 1244), yet the paper concludes the data make "a more compelling case that there is no discrimination in officer-involved shootings" (p. 1216). Check (b) is partly satisfied: the main specification deliberately omits eventual outcomes such as arrest "because of the fear of overcontrolling" (p. 1232, n. 26), but Table 3 still reports estimates within subsamples defined by those post-stop outcomes (p. 1236), and the civilian-behavior controls are recorded by the same officers whose bias is under study (pp. 1215, 1231). In a later reply, Fryer concedes that if bias determines who enters the arrestee risk set, "then our estimates are biased" (Fryer 2020, *JPE* 128(10): 4007).

**Should NOT trigger:** DeMora, Stephanie L., Jennifer L. Merolla, Brian Newman, and Elizabeth J. Zechmeister. 2024. "Jesus Was a Refugee: Religious Values Framing Can Increase Support for Refugees Among White Evangelical Republicans." *Political Behavior* 46: 2145–2168. The main estimates (Table 2, p. 2156) regress outcomes only on randomly assigned treatment dummies, so no bad control is present. The authors also moved a hypothesis using Trump support to the appendix because it was measured after treatment (p. 2152, n. 3), which is the correct handling under check (b).
