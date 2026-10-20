# High-order Polynomials in Regression Discontinuity Designs

**Full citation:** Gelman, Andrew, and Guido Imbens. 2019. "Why High-Order Polynomials Should Not Be Used in Regression Discontinuity Designs." Journal of Business & Economic Statistics 37 (3): 447–56.

**Contributor:** Sayon Yun

---

## 1. What the paper establishes

In regression discontinuity designs, researchers should estimate the two limits of the conditional expectation function at the threshold using local low-order polynomials, rather than using a global high-order polynomial in the forcing variable.

## 2. Checks for a reviewer

**(a) Check whether the manuscript provides a sufficient justification for approximating the conditional means with a high-order polynomial when estimating the discontinuity.**

**(b) Compare the estimator-implied observation weights for the global high-order polynomial with those for a local low-order specification, separately for observations on each side of the threshold.** Extreme weights, especially for observations far from the threshold, may indicate that a few observations have a disproportionate influence on the estimate.

**(c) Compare the variation in point estimates across polynomial orders with their standard errors.** If the estimates vary substantially across orders relative to their standard errors, check whether the paper provides explanation for the specification sensitivity.

**(d) Check whether the authors assess confidence intervals in settings where no discontinuity is expected, such as repeated pseudo-threshold tests.** If the rejection rate substantially exceeds the nominal 5% level, the intervals may indicate poor coverage in those settings. In this case, check whether the paper qualifies the inferential claims.

## 3. Evidence

**For (a)**. "If a researcher is confident that the conditional means can be described with sufficient accuracy by a fifth-order polynomial, than that would be a perfectly sensible method to use" (p. 448). The authors acknowledge that this exception might apply, but argue that researchers are unlikely to be confident in practice.

**For (b)**. The authors state that the "weights based on the values of the forcing variable in the sample" can be inspected and compared (p.449). If weights can be compared, the reviewer can assess how the estimator weights observations and whether a global polynomial gives disproportionate weight to observations far from the threshold, especially compared with local low-order specifications. In the three examples, the authors illustrate that weights assigned to observations with forcing variable values far from the threshold vary with the order of the polynomial (pp. 449-452).

**For (c)**. In the Matsudaira application, the authors report that "the variation in the global polynomial estimates over the six specifications is much bigger than the standard error for any of these six estimates" (p. 452). They explain that this suggests the standard errors do not adequately describe the full uncertainty about the causal effect. The same analyses for Jacob-Lefgren and Lee datasets show similar sensitivity to polynomial order (p. 453).

**For (d)**. The authors assess whether the coverage result from a single pseudo-threshold is typical. They repeatedly draw pseudo-thresholds and random samples, then check whether the 95% confidence intervals include zero. They report that the "rejection rates for the global polynomials are substantially above the nominal rejection rate of 5%" whereas the rates for the local estimators were "fairly close to the nominal rate" (p. 455).

## 4. Scope

Applies to: regression discontinuity designs that estimate the limits of the regression function at the threshold using a global polynomial of order three or higher in the forcing variables. Check (a) can be applied to evaluate whether the paper provides a credible basis for believing that polynomial adequately approximates the conditional means.

Does not apply to: regression discontinuity designs using only local or global low-order polynomials.

Does not directly apply to: manuscripts for which the estimator-implied observation weights are neither reported nor recoverable. If the weights cannot be identified, check (b) cannot be applied.

Does not directly apply to: manuscripts for which estimates across polynomial orders cannot be calculated from the reported data. If alternative-order estimates are calculable but not reported, check (c) still applies; it could note the missing sensitivity analysis.

Does not directly apply to: manuscripts in which the sample size or support of the forcing variable is too limited to construct placebo-threshold exercise with enough observations on both sides of the pseudo-threshold. Check (d) works in a setting where no discontinuity is expected.

## 5. What failure looks like

A manuscript uses a global high-order polynomial to estimate a regression discontinuity effect but gives no reason to believe that the polynomial adequately approximates the conditional means near the threshold. When the weights are shown, a table or figure shows large positive or negative weights on observations far from the threshold, especially relative to a local low-order specification. A results table shows that the estimated discontinuity changes substantially across polynomial orders, by more than the estimates' standard error. However, the manuscript does not report on this sensitivity. For inference, a repeated placebo-threshold exercise shows rejection rates above the nominal 5% level, but the paper presents the conventional confidence intervals without qualifying the inferences.

## 6. Test cases

**SHOULD trigger:** Lee, D. S. (2008). Randomized experiments from non-random selection in U.S. House elections. Journal of Econometrics, 142(2), 675–697. The paper uses fourth-order polynomial to estimate the discontinuity (pp. 687-688), so checks (a)-(d) should be considered. Reviewers should assess the justification for the polynomial specification, inspect the estimator-implied observation weights, compare estimates across polynomial orders, and examine whether confidence-interval coverage is assessed where no discontinuity is expected.

**Should NOT trigger:** Erikson, R. S., & Titiunik, R. (2015). Using regression discontinuity to uncover the personal incumbency advantage. Quarterly Journal of Political Science, 10(1), 101–119. The paper illustrates a regression discontinuity approach to estimating the personal incumbency advantage. Its parametric analysis uses a linear regression, while the nonparametric estimates are based on local linear regressions of the outcomes on the either side of the cutoff (pp. 113-114). Because the paper does not use a global high-order polynomial to estimate the discontinuity, checks (a)-(d) should not trigger.
