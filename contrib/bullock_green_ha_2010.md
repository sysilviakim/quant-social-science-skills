---
output:
  pdf_document: default
  html_document: default
---
# Mediation Analysis: Confounded Mediators, Compliers, and Heterogeneous Effects

**Full citation:** Bullock, John G., Donald P. Green, and Shang E. Ha. 2010. "Yes, But What's the Mechanism? (Don't Expect an Easy Answer)." *Journal of Personality and Social Psychology* 98(4): 550–558. doi:10.1037/a0018933.

**Contributor:** Jongyub Seok

Page numbers refer to the published journal version (pp. 550–558). Proofs are in the online appendix, cited below as pp. A2–A13.

---

## 1. What the paper establishes

In the standard three-equation mediation model associated with Baron and Kenny (1986), the treatment X is randomized but the mediator M is only measured (p. 551). The ordinary least squares (OLS) estimates of the effect of M on Y (b) and of the direct effect of X (d) are then biased, even in infinitely large samples, whenever the error terms of the M equation and the Y equation covary. Randomizing X does not remove this bias. Better standard errors, panel adaptations, and structural equation models do not remove it either. Because unobserved causes of M and Y often push in the same direction, the bias usually inflates the estimated mediation (p. 552).

Manipulating M experimentally removes this omitted-variable bias in principle, but three problems remain. First, the manipulation must move only the targeted mediator. Second, the estimated effect of M applies only to the subjects whose M the manipulation actually moves, and these subjects usually cannot be identified because mediators are mostly unobserved cognitive states. Different manipulations with the same average effect on M can therefore lead to different conclusions. Third, if the effects of X on M and of M on Y vary across subjects, the product of the two average effects does not equal the average indirect effect and can even have the wrong sign. The authors say the technical results are not new; their contribution is to show why these results matter in practice (p. 551).

In the authors' content analysis of 50 randomly selected social psychology articles from 2007, 46 contained some mediation analysis, only 3 considered that mediation might vary across subjects, and none of those 3 manipulated the mediator (p. 554, n. 6).

## 2. Checks for a reviewer

**(a) If the mediator is measured rather than manipulated, check whether the paper argues that the errors of the mediator and outcome equations are uncorrelated.** That is, the paper must explain why unobserved causes of M are unrelated to unobserved causes of Y, and why the measured mediator is unrelated to mediators that were not measured. The specific, common error is to treat randomization of X as sufficient. Bootstrapped confidence intervals for the indirect effect, or a structural equation model, do not answer this question.

**(b) For measured mediators, check the likely direction of bias against the paper's claim.** The bias of the OLS estimate of b is the covariance of the two error terms divided by the variance of the mediator equation's error; the bias of the estimate of d is that same quantity multiplied by −a. Therefore, if the omitted causes push M and Y in the *same* direction, so that the error covariance has the same sign as b, the estimated b and the indirect effect ab are overstated and the estimated direct effect d is pulled the opposite way. The authors argue that this same-direction case is the usual one. This derivation is for OLS in the linear model; other estimators change the size of the bias but do not remove it. A reviewer can state a likely direction only with a substantive argument about what the omitted causes are.

**(c) If the mediator is manipulated, check first whether the paper shows that the manipulation actually moved the targeted mediator, and then whether it argues that each manipulation moved only that mediator.** The first part is a manipulation check: without evidence that M changed, the design has not manipulated a mediator at all. The second part requires listing the other paths by which X could affect Y and explaining why the manipulation does not move them. With several hypothesized mediators, the design needs at least as many manipulations as mediators. Measuring more covariates does not solve this problem.

**(d) Check which subjects the indirect-effect claim describes.** An experimentally estimated effect of M applies to the subjects whose M the manipulation changes, not to the whole sample. The subjects whose M responds to the manipulation may also differ from those whose M responds to X. The reviewer should ask whether the paper changes M in more than one way: if different ways of inducing the same change in M give similar effects, it becomes more plausible that they move the same subjects. This assumption cannot be tested directly.

**(e) Check whether the paper reports a single average indirect effect for the whole sample without considering that effects may vary across subjects.** The reviewer should ask for the effects of X on M and of M on Y within substantively motivated subgroups, and should prefer subgroup-specific indirect effects to one sample-wide average. There is no general direction for this bias: it depends on how the subject-level effects covary, and it can reverse the sign.

## 3. Evidence

**For (a).** The bias of the estimator of b is the covariance of the two error terms divided by the variance of the mediator equation's error, and the bias of the estimator of d is the same quantity multiplied by a, with a negative sign (p. 551; proof at pp. A3–A4). On the intuition that randomizing X makes bias less likely, the authors write: "This is incorrect" (p. 551). Random assignment makes X unrelated to the error terms but says nothing about whether M is (p. 551). Bootstrapping yields better standard errors for estimates that remain biased; panel methods and structural equation models do not solve omitted-variable bias (p. 552). Recommendation 1 asks authors who do not manipulate mediators to explain why the error covariance is zero and why the observed mediator is unrelated to unobserved ones (p. 555).

**For (b).** The authors argue that the bias term usually shares the sign of b because factors other than X that affect M also affect Y in the same direction. Their example is parents' income, children's education, and children's income (p. 552). Footnote 2 states that the derivation assumes OLS and that other estimators may change the bias but will not cure it (p. 551, n. 2).

**For (c).** The requirement that the intervention affect only the targeted mediator is discussed on pp. 552–553. Even a carefully designed manipulation may fail; in the authors' example, confederate statements meant to change efficacy might also change mood (p. 552). Because the intervention either isolates a mediator or it does not, observing more variables does not fix the problem (p. 553). The appendix shows that if an intervention moves two mediators, the usual estimator is biased, and that identifying several mediators requires at least as many instruments as mediators (pp. A5–A6). Recommendation 2 asks for this argument and notes that a succession of studies may be needed (p. 555).

**For (d).** The authors compare the problem to noncompliance in a clinical trial: the estimate applies only to subjects affected by the intervention, and with unobserved mediators the researcher often cannot know who they are (p. 553). The appendix derives this as a local average treatment effect under a monotonicity assumption (pp. A6–A9). Two manipulations with the same average effect on M can give different conclusions if they affect different subjects, and the subjects moved by the manipulation may differ from those moved by X (p. 553). Recommendation 3 suggests comparing differently induced changes in M, such as an extra year of schooling induced by law, by payments, or by a preschool program (p. 555).

**For (e).** Figure 1 constructs a case in which every subject has a positive indirect effect, yet the conventional estimate is negative and much smaller in magnitude, even though both X and M are randomized (p. 554). The appendix shows that the product of the average effects equals the average indirect effect minus the covariance of the subject-level effects (p. A11). Moderated mediation and multilevel models can address this only under strong and often untestable assumptions (p. 554). Recommendation 4 proposes estimating indirect effects within relatively homogeneous subgroups, at the cost of statistical power (p. 555).

## 4. Scope

**Applies to:** any claim about an indirect or mediated effect from multi-equation regression, including Baron–Kenny steps, product-of-coefficients estimates, bootstrapped indirect effects, panel or time-series versions, and structural equation path models (pp. 551–552). Checks (a) and (b) apply when the mediator is measured. Checks (c) and (d) apply when the mediator is manipulated, whether directly or by manipulating a variable that affects it; the authors state that their arguments cover both kinds of experiment (p. 552, n. 4). Check (e) applies to both. When X itself is not randomized, all of these problems remain and are worse (p. 556).

**Does not apply to:** estimates of the total effect of a randomized X on Y. That estimate is unbiased, and variation in effects across subjects does little harm because the coefficient on X is the average effect (p. 553). A paper that makes only total-effect claims, even about an experiment with heterogeneous effects, should not trigger these checks.

**Partial application:** designs that expose each subject to several experimentally set values of X and M. The authors say these can in principle solve the heterogeneity problem, but they require that effects not change over time and that each manipulation wear off before the next (pp. 555–556). Flag those assumptions; do not apply check (e) as if the design ignored heterogeneity.

**Not evaluated by this paper:** mediation methods developed after 2010. The paper's demand that authors justify the absence of unobserved common causes of M and Y remains relevant to such methods, but the paper should not be cited as showing that those particular estimators are biased.

## 5. What failure looks like

A paper randomizes X, measures M with a questionnaire, and reports a significant bootstrapped indirect effect as evidence of "the mechanism." It cites the randomization of X as the basis for the causal interpretation. It offers no argument about unobserved common causes of M and Y, names no other possible mediators, and does not check whether the effects of X on M or of M on Y differ across subgroups. A reviewer should run checks (a), (b), and (e), and should describe the result as an association between X-induced variation and M that is consistent with mediation, not as an identified indirect effect. If the paper instead manipulates M with a single intervention, the reviewer should run checks (c)–(e) and ask for evidence that the intervention moved the targeted mediator and only that mediator.

## 6. Test cases

**SHOULD trigger:** Bolger, Niall, and David Amarel. 2007. "Effects of Social Support Visibility on Adjustment to Stress: Experimental Evidence." *Journal of Personality and Social Psychology* 92: 458–475. The study manipulates the hypothesized mediator, recipients' sense of efficacy, through confederates' statements to undergraduates preparing an evaluated speech (p. 552). Bullock et al. call it an elegant example that deserves much wider use, so triggering is not a finding of error. Checks (a) and (b) do not apply because the mediator was manipulated. Check (c) should ask whether the paper reports that efficacy actually changed, and whether the statements also changed other mediators such as mood, which the authors raise themselves (p. 552). Check (d) should ask whose efficacy actually changed and whether more than one script was used. Check (e) should ask whether effects were examined across subgroups. Bullock et al. describe the design only briefly, so the reviewer must read Bolger and Amarel before concluding what they did or did not do.

**Should NOT trigger:** Arceneaux, Kevin, Alan S. Gerber, and Donald P. Green. 2006. "Comparing Experimental and Matching Methods Using a Large-Scale Voter Mobilization Experiment." *Political Analysis* 14: 37–62. A near-miss: it involves a randomized experiment, a comparison with nonexperimental estimators, and the bias of observational estimates, so a careless agent may want to trigger. But its estimand is the overall effect of a mobilization treatment, not an indirect effect. Bullock et al. cite it as an experimental benchmark for overall effects (p. 556), the kind of quantity for which they say heterogeneity does little harm (p. 553). The reviewer should confirm that the article makes no mediation claim before ruling the checks out.
