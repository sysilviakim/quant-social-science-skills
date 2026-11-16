**Full citation:** Ai, Chunrong, and Edward C. Norton. 2003. “Interaction terms in logit and probit models.” Economics Letters 80(1): 123–129. https://doi.org/10.1016/S0165-1765(03)00032-6

**Contributor:** Jeongeun Park

## 1. What the paper establishes

This paper explains that interaction on the probability scale should not be assessed solely on the basis of the sign and statistical significance of the interaction term coefficient in a logit or probit model. Here, interaction means that the effect of one explanatory variable on the outcome depends on the value of another explanatory variable.

In a linear regression model, the interaction term coefficient indicates how much the effect of one explanatory variable on the expected outcome changes when the other explanatory variable increases by one unit. However, this interpretation cannot be directly applied to probabilities in logit or probit models. These models transform a linear combination of explanatory variables into a probability using a nonlinear function. Because the slope of this function varies across its range, the same-sized change before transformation can produce different changes in probability.

Consequently, even when the interaction term coefficient is positive, interaction on the probability scale can be negative at some values of the explanatory variables. Even when the coefficient is zero, interaction on the probability scale can still exist at some values because of the curvature of the function. Furthermore, the statistical significance of the interaction term coefficient and that of interaction on the probability scale are separate questions. The magnitude and direction of interaction on the probability scale can also depend on the values of other explanatory variables included in the model.

The authors therefore recommend directly calculating the difference in probability effects that is of interest. Specifically, researchers should calculate how the effect of one explanatory variable on probability changes with the value of another explanatory variable and report the standard error or confidence interval for that difference itself. They should also clearly state the explanatory variable values or ranges of change used in the calculation. This allows researchers to assess the magnitude, direction, and statistical uncertainty of the claimed interaction on the probability scale.


## 2. Checks for a reviewer

**(a) Check whether effects are interpreted in terms of probabilities, log odds, or another specified quantity.**
  Determine whether the paper’s claim concerns interaction on the probability scale or, for example, interaction in log odds in a logit model. Does the paper support a probability-scale claim solely with the sign or statistical significance of the interaction term coefficient?
  
**(b) Check whether interaction on the probability scale is calculated appropriately.** 
  Check whether differences in probability effects are calculated using derivatives or discrete differences appropriate to the variable types and the changes being compared. Does the paper instead rely on the interaction term coefficient or on a marginal effect calculated by treating the interaction term as if it could vary independently of its component variables?
  
**(c) Check the explanatory variable values used to evaluate the effect.** 
  Determine whether the interaction effect is calculated with the other explanatory variables held at specified values, or whether interaction effects are calculated using each observation’s explanatory variable values and then averaged. Does the paper apply results obtained under particular conditions to all cases and settings?
  
**(d) Check the uncertainty of the interaction effect itself.**
  Check whether the paper reports a standard error or confidence interval for the difference between effects on the probability scale. Does it claim that this difference is statistically significant solely on the basis of the significance of the interaction term coefficient or of each effect considered separately?
  
## 3. Evidence
  
**For (a).** "The interaction effect, which is often the variable of interest in applied econometrics, cannot be evaluated simply by looking at the sign, magnitude, or statistical significance of the coefficient on the interaction term when the model is nonlinear" (p. 129). The authors contrast linear models, where the interaction term coefficient equals the interaction effect, with a probit model, where interaction on the probability scale involves additional terms. This distinction shows why researchers must distinguish claims about probabilities from claims about other quantities, such as log odds in a logit model, when interpreting the coefficient (p. 124, equations 1–2).

**For (b).** "The key point of this paper is that the interaction effect is found by computing cross derivatives (or differences), not by just looking at the coefficient on the interaction term" (p. 125). The paper derives the probability-scale interaction as a cross derivative and shows that it differs from the marginal effect obtained by treating the interaction term as a separate variable (p. 124, equation 2). The estimation section provides a general framework using derivatives for continuous variables and differences for discrete variables, with estimated coefficients substituted into the relevant expression (p. 125, equation 4).

**For (c).** "Like the marginal effect of a single variable, the magnitude of the interaction effect depends on all the covariates in the model" (p. 129). The authors explain that interaction effects depend on the covariate values and can have different signs across observations (p. 124). Figures 1 and 2 illustrate this variation, while the conclusion cautions that simple summary measures can be difficult to interpret (pp. 126–129). These findings support explicitly reporting the values at which effects are evaluated and any procedure used to average them.

**For (d).** "Use the t statistic to test the hypothesis that the interaction effect equals zero, for given x" (p. 125). The authors present a method for calculating the standard error of an estimated interaction effect, which measures the uncertainty of the estimate. The delta method used for this calculation accounts for uncertainty in the relevant estimated regression coefficients. Researchers can then use this standard error to test whether the interaction effect at specified covariate values is statistically distinguishable from zero (p. 125, equation 5). In the second empirical model, the interaction term coefficient is not statistically significant, but the probability-scale interaction is significant for most observations. This demonstrates that the two significance tests are not interchangeable (pp. 127–128).
  
## 4. Scope

**Applies to:** Studies using logit or probit models to assess whether the effect of one explanatory variable on the probability of an outcome depends on another explanatory variable. This includes cases where researchers conclude that no probability-scale interaction exists solely because the interaction term coefficient is not statistically significant.

**Does not directly apply to:** When the interaction term coefficient in a linear mean model already equals the interaction effect for the dependent variable as entered in that model, the calculation procedure presented for nonlinear models in this paper need not be applied. Applicability should not be determined solely by whether the outcome is binary or measured on a 0–1 scale. A binary outcome can also be analyzed using a linear probability model estimated by OLS. Reviewers should therefore check the model actually used and whether effects are being interpreted as changes in probability, log odds, or the dependent variable as modeled. Furthermore, explicitly interpreting a logit coefficient on the log-odds scale is not itself an error.

**Extension to other models:** The principle of calculating interaction and its uncertainty in terms of the expected outcome, such as an event probability or an expected count, can also be applied to other nonlinear models. However, the definition of the effect and the calculation method must match the model and the specific outcome being interpreted.

**Limits:** Interaction on the probability scale can change sign across covariate values, but sign changes do not necessarily occur in every model or sample. These checks evaluate the calculation and interpretation of model-based interaction effects. The validity of a causal interpretation must be assessed separately by examining the research design and identification assumptions.

## 5. What failure looks like

**A case requiring scrutiny (hypothetical example):** A study uses a logit model of voting and concludes that “the positive effect of income on the probability of voting is always larger at higher levels of political interest” solely because the interaction term coefficient is positive and statistically significant. If differences in probability effects have not been calculated directly, the interaction term coefficient alone provides insufficient support for this conclusion.

**Possible reviewer comment:** “The current interpretation relies primarily on the coefficient on the interaction between income and political interest. Because the claim concerns the probability of voting, please calculate the effect of an increase in income on that probability at substantively meaningful levels of political interest. Please report the differences in these effects across levels of political interest, together with their confidence intervals. Please also specify the change in income being considered and describe the values at which the other explanatory variables are held or the procedure used to average observation-specific effects.”

## 6. Test cases

**SHOULD trigger:** Berry, William D., Jacqueline H. R. DeMeritt, and Justin Esarey. 2010. “Testing for Interaction in Binary Logit and Probit Models: Is a Product Term Essential?” American Journal of Political Science 54(1): 248–266.

The empirical example in this paper uses a probit model to examine whether the effect of the voter registration deadline on the probability of voting varies by education level. Specifically, the authors calculate differences in predicted voting probabilities at each education level under a hypothetical shift in the registration deadline from 24.8 days before the election to election day. The remaining explanatory variables are held at their means or modes (p. 264, Figure 4). The authors then assess how these probability effects vary across education levels by calculating differences between effects and confidence intervals for those differences (p. 265). The example therefore falls within the scope of checks (a)–(d) and provides the calculations and reporting required by these checks.


**Should NOT trigger:** DeMora, Stephanie L., Jennifer L. Merolla, Brian Newman, and Elizabeth J. Zechmeister. 2024. “Jesus was a Refugee: Religious Values Framing can Increase Support for Refugees Among White Evangelical Republicans.” Political Behavior 46: 2145–2168.

This paper examines whether the effect of the religious-values message varies with the strength of evangelical identity using an OLS model that includes treatment indicators, evangelical identity strength, and their interaction terms (p. 2157). Although its use of interaction terms may make it appear relevant to these checks, this analysis uses a linear interaction model that does not involve a nonlinear transformation into probabilities. Therefore, the additional procedures needed to calculate probability-scale interaction effects in logit or probit models should not be required for this analysis.