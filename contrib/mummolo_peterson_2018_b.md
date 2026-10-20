# Improving the Interpretation of Fixed Effects Regression Results

**Full citation:** Mummolo, Jonathan, and Erik Peterson. 2018. "Improving the Interpretation of Fixed Effects Regression Results." *Political Science Research and Methods* 6 (4): 829–35

**Contributor:** Na Yeon Kim

---

## 1. What the paper establishes

When using fixed-effects regression models, researchers often fail to capture the resulting large reduction in variance. This paper discusses two significant consequences of this omission. Namely, the inaccuracy in describing the variation under study and the use of counterfactual assumptions with low validity, such as discussing the effects of changes in independent variables that are rarely or never observed within entities.

This paper proposes four solutions:

1. Do not merely present the magnitude of the coefficients; explain the variation from which those coefficients were derived and the actual extent of the change they represent.

2. Plot histograms to examine how frequently and significantly the treatment changed. Additionally, identify the proportion of observations where the treatment did not change at all within a unit.

3. When explaining the results of a fixed-effects model, explicitly state the variation used to estimate the effect within the sentence.

4. Report the effect in the outcome’s original units and also in terms of the standard deviations of the original outcome Y and the outcome residualized with respect to the fixed effects, ỹ

## 2. Checks for a reviewer

**(a) Assess the scope of the proposed checklist.** The authors state that the checklist applies to linear fixed-effects models. Check whether they explain why interpreting effects in terms of the standard deviation of the residualized independent variable is specific to linear models. If the recommendations cannot be applied to nonlinear models without modifications, sssess whether the paper makes this boundary sufficiently clear so that its conclusions are not read as applying to fixed-effects models more broadly.

**(b) Assess whether the variation in the residualized independent variable adequately represents the variation used for estimation.** The authors regress the treatment variable on the fixed-effect indicators and treat the standard deviation of the residuals as the amount of treatment variation used in fixed-effects estimation. Check whether this approach accords with the logic of fixed-effects regression and whether the residualized standard deviation is a defensible measure of a “typical change.” For models with multiple fixed effects, assess whether the distribution of the residualized treatment and the histogram of within-unit treatment ranges convey the same information. Since the authors acknowledge that the range histogram does not fully account for two-way fixed effects, check how far it can serve as a guide to plausible counterfactual changes.

## 3. Evidence

**For (a).** The authors specify that the checklist applies “when researchers employ linear fixed effects models” (p. 834), and their literature review focuses on studies using linear fixed-effects estimators (p. 830). Thus, it would be inaccurate to say that they never specify the scope of their recommendations. However, the title and abstract may give readers the impression that the paper addresses the interpretation of fixed-effects results more generally. In particular, residualizing the treatment variable and interpreting the effect by multiplying the coefficient by the standard deviation of the residualized variable rely on the structure of a linear model.

**For (b).** The authors explain that regressing the treatment variable on the fixed-effect indicators and retaining the residuals isolates the variation in X used to estimate the coefficient of interest (p. 834). They add that this approach can accommodate multiple fixed effects and may be preferable to manually demeaning the data (p. 834, fn. 12). In their Snyder and Strömberg (2010) example, the treatment’s standard deviation falls from 0.286 to 0.068 after fixed effects are applied; the mean within-unit range is about 0.05, the 95th percentile is about 0.36, and the treatment does not vary within the unit in roughly 44% of cases (pp. 831–32). These figures illustrate the difference between the treatment’s overall variation and the variation remaining after fixed effects are accounted for. However, the authors state that the within-unit range histogram does not fully capture the relevant variation under two-way fixed effects and present it only as a guide to within-unit counterfactuals (p. 831, Fig. 1 note).

## 4. Scope

**Applies to:** (a) when a study uses a linear fixed-effects regression model. Do not apply it as written to pooled regressions without fixed effects or to nonlinear fixed-effects models such as logit or probit. In nonlinear models, residualizing the treatment against fixed-effect indicators and interpreting the coefficient do not have the same straightforward interpretation as in a linear model.

**Applies to:** (b) when a linear fixed-effects model uses treatment variation that remains after the fixed effects are absorbed. A histogram of within-unit treatment ranges can be informative in panel designs with repeated observations within units; with multiple fixed effects, however, it should not be treated as conveying the same information as the distribution of the residualized treatment.

**Does not apply to:** The residualization procedure is unnecessary for models without fixed effects and should not be interpreted in the same way for nonlinear fixed-effects models such as logit or probit. For binary treatments, changes typically consist of a switch from 0 to 1, so the reviewer should assess separately whether the residualized standard deviation is a meaningful measure of a “typical change.”

## 5. What failure looks like

The paper states that it focuses on linear fixed-effects models, residualizes the treatment variable with respect to the fixed effects, and reports the amount of variation used for estimation. It also acknowledges that the histogram of within-unit treatment ranges does not fully account for two-way fixed effects. Therefore, it would be inaccurate to criticize the authors for omitting or disregarding these points. However, interpreting the standard deviation of the residualized treatment as a “typical change” is proposed as a useful practical guideline; its validity across different treatment distributions and research contexts is not established. The paper also does not explain how to apply this procedure to nonlinear fixed-effects models, so the checklist should not be generalized to all fixed-effects models.

## 6. Test cases

**SHOULD trigger:** Bartels, Brandon L., and Eric Kramon. 2020. “Does Public Support for Judicial Power Depend on Who Is in Political Power? Testing a Theory of Partisan Alignment in Africa.” American Political Science Review 114(1): 144–163. The authors estimate the effect of supporting the president’s party using OLS, with partisan-group and survey-year fixed effects and their interaction. They also state that they use a linear probability model for binary outcomes. The linear fixed-effects specifications therefore fall within the checklist’s scope. A reviewer can assess whether the authors’ interpretation reflects the amount of treatment variation that remains after accounting for the fixed effects.

**Should NOT trigger:** Sambanis, Nicholas, Stergios Skaperdas, and William Wohlforth. 2020. “External Intervention, Identity, and Civil War.” Comparative Political Studies 53(14): 2155–2182. The article develops a theoretical model of external intervention and identity and illustrates it with evidence from Ukraine; it does not estimate a treatment effect using a linear fixed-effects regression. The checklist item on residualized treatment variation and the substantive interpretation of linear fixed-effects coefficients therefore does not apply.
