# Multiplicative Interaction Models

**Contributor:** Jung Hoik

**Full citation:** Hainmueller, Jens, Jonathan Mummolo, and Yiqing Xu. 2019. "How Much Should We Trust Estimates from Multiplicative Interaction Models? Simple Tools to Improve Empirical Practice." *Political Analysis* 27(2): 163–192. doi:10.1017/pan.2018.46.

---

## 1. What the paper establishes

Linear regression models with multiplicative interaction terms are widely used in the social sciences. Hainmueller, Mummolo, and Xu argue that existing best practices overlook two key problems: the Linear Interaction Effect (LIE) assumption may fail because the conditional effect of a treatment can be nonlinear or nonmonotonic in a continuous moderator, and conditional marginal effects may be estimated in regions with insufficient common support. The authors propose diagnostics and flexible estimators to assess whether substantive interaction findings remain credible when linearity is relaxed and extrapolation is limited.

## 2. Checks for a reviewer

**(a) Check whether an interaction with a continuous moderator is supported by approximately linear conditional relationships in the underlying data.** If the manuscript estimates a conventional multiplicative interaction, inspect the relationship among the outcome, treatment, and moderator rather than only the fitted marginal-effect line. For a binary treatment, compare linear and flexible fits separately for treated and control observations.

**(b) Check whether substantively interpreted conditional marginal effects are estimated where there are sufficient observations and sufficient treatment variation.** Inspect the moderator distribution, preferably separately by treatment status. Pay particular attention to claims at the upper or lower tail. If observations are sparse or the treatment does not vary there, the estimated effect may depend heavily on extrapolation.

**(c) Check whether the substantive interaction survives a flexible binning estimator.** Compare treatment effects at typical low, medium, and high values of a continuous moderator with the conventional linear marginal-effect curve. If the binned estimates depart substantially from the line or are nonmonotonic, the claimed interaction may depend on the LIE assumption.

**(d) Check whether a flexible estimator such as kernel smoothing supports the shape implied by the standard linear interaction model.** If the flexible estimate is nonlinear, nonmonotonic, or becomes highly uncertain where the manuscript claims an effect, the linear result should be treated as model dependent.

## 3. Evidence

**For (a).** The standard interaction model imposes linearity on the conditional effect:

> "the effect of D on Y can only linearly change with X" (p. 166).

The model implies \(ME_D=\alpha+\beta X\), so each unit increase in \(X\) changes the effect of \(D\) by the same amount throughout the moderator distribution (p. 166). The authors therefore recommend:

> "Generate the LID plot to check whether the conditional relationships between the outcome, treatment, and moderator are well approximated by a linear fit" (p. 187).

Thus, a reviewer should examine whether flexible and linear fits tell approximately the same story rather than infer linearity from the fitted marginal-effect line itself.

**For (b).** The paper specifies two requirements for estimating a conditional effect:

> "there should be (1) a sufficient number of data points in the neighborhood of X = x0 and (2) those data points should exhibit variation in the treatment" (p. 167).

Without these conditions, conditional effects depend on interpolation or extrapolation and become more model dependent (p. 167). The authors accordingly advise:

> "Researchers should avoid computing marginal effects in areas where the data is too sparse" (p. 186).

A strong-looking marginal effect in a thinly populated tail should therefore reduce, rather than increase, confidence in the claimed heterogeneity unless adequate support is demonstrated.

**For (c).** The authors recommend:

> "Compute the conditional marginal effects using the binning estimator" (p. 186).

They suggest three equal-sized bins evaluated at their medians as a reasonable default (p. 186). Because the binning estimator does not force effects at typical low, medium, and high moderator values onto one global straight line, substantial disagreement with the conventional marginal-effect curve provides evidence against the LIE assumption (pp. 171–172).

**For (d).** The authors further recommend:

> "generating the marginal-effect estimates using the kernel estimator is recommended to further evaluate the effect heterogeneity" (p. 186).

The kernel estimator permits the conditional effect to vary flexibly rather than imposing the global form \(\alpha+\beta X\). Most importantly, the authors state:

> "The standard linear interaction model and marginal-effect plots should only be used if the estimates from the binning and/or kernel estimator suggest that the interaction is really linear" (pp. 186–187).

Flexible estimates therefore provide a direct check on whether the stronger linear specification is warranted.

## 4. Scope

**Applies to:** studies using a multiplicative interaction model in which the treatment or key independent variable \(D\) is binary or continuous and the moderator \(X\) is continuous, and where a substantive claim rests on how the effect of \(D\) changes across values of \(X\) (p. 166). Check (a) applies when the manuscript relies on the standard linear interaction specification to characterize this heterogeneity. Check (b) applies when conditional marginal effects are reported across the moderator, especially in regions with sparse observations or limited treatment variation (p. 167). Checks (c) and (d) apply when the substantive conclusion depends on the shape of the interaction and can be compared with more flexible binning or kernel estimates (pp. 171–174, 186–187).

**Does not directly apply to:** interactions in which both \(D\) and \(X\) are
binary or discrete with only a few unique values and the researcher uses a fully saturated model. The authors explicitly recommend a fully saturated model in this setting to estimate the treatment effect at each level of \(X\) (p. 166). Because there is no continuous moderator over which the conditional effect is forced to follow a linear function, the paper's central LIE diagnostic should not trigger merely because the model contains an interaction term.

**Partial application:** lack of common support may affect only part of the
moderator distribution. If observations and treatment variation are sparse in one tail but adequate elsewhere, the reviewer should restrict substantive
inference to the supported region rather than reject the entire model (p. 167). Moreover, weak common support does not by itself prove that an estimate is biased if the assumed functional form is correct; the central concern is greater model dependence (p. 167, n. 11).

**Does not apply to:** causal-identification problems such as endogeneity or
omitted-variable bias. The proposed diagnostics address functional-form
misspecification and common support, not whether \(D\) is causally identified. The authors explicitly state that their checks "cannot help with other common problems such as endogeneity or omitted variables" (p. 187). Those problems generally require improvements in research design rather than a more flexible interaction estimator.

## 6. Test cases

**SHOULD trigger:** Malesky, Edmund, Paul Schuler, and Anh Tran. 2012. "The Adverse Effects of Sunshine: A Field Experiment on Legislative Transparency in an Authoritarian Assembly." *American Political Science Review* 106(4): 762–786. The paper interacts a binary transparency treatment with continuous Internet penetration, and Hainmueller, Mummolo, and Xu show that flexible estimates and a leverage check substantially weaken the claimed interaction pattern (pp. 180–181).

**Should NOT trigger:** Lee, Haillie Na-Kyung, and Yu-Ming Liou. 2022. "Where You Work Is Where You Stand: A Firm-Based Framework for Understanding Trade Opinion." *International Organization* 76(3): 713–740. Table 4, Model 3 interacts GLOBALIZED EMPLOYER with MANAGEMENT, both dichotomous indicators; because this specification does not model effect heterogeneity across a continuous moderator, the LIE check should not trigger for this specification.