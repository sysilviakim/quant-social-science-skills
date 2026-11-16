# Two-Way Fixed Effects Regression and Causal Inference with Panel Data

**Contributor:** Nahyeon Lee

**Full citation:** Imai, Kosuke, and In Song Kim. 2021. “On the Use of Two-Way Fixed Effects Regression Models for Causal Inference with Panel Data.” Political Analysis 29: 405–415. doi:10.1017/pan.2020.33.

---

## 1. What the paper establishes

Two-way fixed effects (2FE) regression is widely used with panel data. Researchers often include unit and time fixed effects and then interpret the treatment coefficient causally. The usual intuition is that unit fixed effects remove unit-specific confounders, while time fixed effects remove time-specific confounders. 

Imai and Kim show that this interpretation is more model-dependent than it appears. The 2FE estimator can adjust for both types of unobserved confounding at the same time only by relying on an additive and separable functional form. It therefore should not be treated as a design-based, nonparametric solution to unobserved confounding. 

The paper also challenges a second common justification, that 2FE is simply a difference-in-differences (DiD) estimator.

The point is not that 2FE can never be used. The paper's narrower claim is that its causal interpretation depends on modeling assumptions that researchers often leave implicit.

## 2. Checks for a reviewer

**(a) Check whether the paper treats unit and time fixed effects as sufficient to remove unobserved confounding.** Two-way fixed effects do not provide a nonparametric adjustment for unit-specific and time-specific confounders simultaneously.

**(b) Check whether the required functional-form assumption is acknowledged.** The causal interpretation of 2FE relies on unit and time effects entering additively and separately. A paper should make this assumption clear rather than presenting fixed effects as an assumption-free control strategy.

**(c) Check whether the paper justifies 2FE by claiming that it is equivalent to difference-in-differences.** This equivalence holds in the simple two-group, two-period setting, but not generally in multi-period panel data.

**(d) In a multi-period setting, check whether the paper identifies the actual treatment and control comparisons.** When treatment changes at different times, the standard 2FE estimator is not generally the same as the nonparametric multi-period DiD estimator.

**(e) Check whether the paper describes 2FE as a design-based or nonparametric causal estimator.** Its validity ultimately depends on modeling assumptions. The presence of unit and time fixed effects alone does not establish causal identification.

## 3. Evidence

**For (a).** The standard 2FE model is

\[
Y_{it}=\alpha_i+\gamma_t+\beta X_{it}+\epsilon_{it}.
\]

Here, \(\alpha_i\) represents unit-specific factors and \(\gamma_t\) represents time-specific factors. The authors explain the problem through a matching interpretation. A treated observation can be compared with observations from the same unit at different times or with other units in the same period. But no other observation shares both the exact same unit and exact same time index. The two dimensions therefore cannot both be matched away nonparametrically. The standard 2FE estimator needs the linear additive structure to combine these comparisons.

**For (b).** Proposition 1 makes this dependence more concrete by rewriting 2FE as a two-way matching estimator. The estimated counterfactual uses observations from the same unit, observations from the same time period, and an additional adjustment set.

These sets can include observations with the same treatment status as the target observation. The authors call these cases “mismatches.” For causal estimation, a treated observation should be compared with an appropriate control observation. A same-treatment comparison does not provide that contrast and can create attenuation bias.

The authors consider a weighted 2FE estimator that reduces mismatches by restricting the within-unit and within-time comparisons to observations with the opposite treatment status. Even then, mismatches can remain in the adjustment set. This is why they conclude that simultaneous nonparametric adjustment for unit-specific and time-specific unobserved confounding is generally impossible within the 2FE framework.

**For (c).** In the simplest two-group, two-period design, the usual DiD estimator and the 2FE regression estimator are numerically equivalent. This familiar result is often extended to more complicated panel settings.

Imai and Kim show that this extension is not automatic. With multiple periods, units may become treated at different times and may even move in and out of treatment. The simple two-period DiD comparison no longer describes the standard 2FE coefficient. The fact that 2FE reproduces DiD in the basic case therefore does not mean that every 2FE regression is a nonparametric DiD design.

**For (d).** The authors construct a multi-period DiD estimator to make the relevant comparisons explicit. It focuses on units that move from control at time \(t-1\) to treatment at time \(t\). Their outcome changes are compared with the changes of units that remain untreated over the same periods.

This matters because the treated and control comparisons are directly defined by the design. The relevant sets contain control observations, so the mismatches in the general 2FE representation are removed. Under the parallel-trends assumption, these comparisons identify the average treatment effect for the treated. A regression with unit and time fixed effects does not, by itself, provide the same design-based justification.

**For (e).** The multi-period DiD estimator can be written as a weighted 2FE regression, but it is not generally equal to the standard unweighted 2FE estimator. Some control observations receive negative regression weights when they repeatedly enter the adjustment set for treated observations.

This result reinforces the paper's broader point. The connection between 2FE and DiD in a general panel setting is not the simple equivalence often assumed in applied work. Standard 2FE should therefore not be viewed as a design-based, nonparametric causal estimator. If the linear additive model is correct, it can still identify the causal effect. The issue is that this conclusion comes from the model, not from fixed effects alone.

One implication is that the regression form alone does not tell researchers which observations are providing the causal comparison. In the authors' multi-period DiD construction, those comparisons are specified directly: a unit that enters treatment is compared with units that remain untreated over the same periods. The weighted 2FE representation is a consequence of those design-based comparisons, not their starting point. This distinction is important for applied work. Researchers should not assume that estimating a standard 2FE regression automatically reproduces the comparisons that would be justified by a DiD research design. Instead, they should examine how treatment changes over time, identify the relevant control observations, and state the assumptions that make those comparisons informative about the causal effect.

## 4. Scope

**Applies to:** panel-data studies that use linear regression with unit and time fixed effects to make causal claims. The paper focuses on binary treatments and allows units to move in and out of treatment at different times.

**Does not directly apply to:** settings with continuous or multi-valued treatments. The paper develops its formal results for a binary treatment and leaves more general treatment regimes for future research.

**Does not apply to:** studies that use unit and time fixed effects only for descriptive or predictive purposes. The paper's concern is the causal interpretation of the treatment coefficient, not the mere use of fixed effects.

**Does not challenge** the standard equivalence between 2FE and DiD in the basic two-group, two-period setting. In that setting, the two estimators are equivalent. The warning is about extending that intuition to more general panel designs.

## 5. What failure looks like

A paper estimates a treatment effect using unit and time fixed effects and claims that the specification controls for unobserved confounding simply because both sets of fixed effects are included.

The paper does not acknowledge that simultaneous adjustment depends on an additive and separable model. In a multi-period setting, it may also describe the specification as DiD without explaining which treated transitions and untreated observations form the comparison group.

This becomes especially problematic when the paper uses the familiar two-group, two-period equivalence as a general justification for 2FE. That equivalence does not automatically extend to settings with many periods or changing treatment status.

The problem is not the use of 2FE itself. The failure is treating the regression specification as sufficient evidence of causal identification without defending the assumptions that make the coefficient causal.

## 6. Test cases

**SHOULD trigger:** A study uses panel data covering many regions and fifteen years. Regions adopt a policy at different times, and some later repeal it. The authors regress an outcome on the policy indicator with region and year fixed effects. They call the coefficient a causal DiD estimate because region fixed effects remove stable regional differences and year fixed effects remove nationwide shocks.

The paper does not discuss the additive functional-form assumption or explain which untreated regions provide the counterfactual comparison for each treated transition. It relies mainly on the presence of region and year fixed effects and the statement that the model is a DiD specification.

This is within the paper's scope. A reviewer should check whether the causal interpretation of 2FE is justified, whether the relevant functional-form assumptions are plausible, and whether the claimed equivalence with DiD actually holds in the multi-period design.

**Should NOT trigger:** A study has exactly two groups and two periods. Both groups are untreated in the first period, and only one group becomes treated in the second period. The authors estimate the standard DiD contrast and write the same comparison as a regression with group and period fixed effects.

This is the basic setting in which 2FE and DiD are equivalent. Imai and Kim do not challenge that result. A reviewer may still question the parallel-trends assumption or other parts of the research design, but this paper should not be used to argue that the 2FE representation itself is invalid.