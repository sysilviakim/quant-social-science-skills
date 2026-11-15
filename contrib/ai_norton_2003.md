# Interaction Terms in Logit and Probit Models

**Contributor:** Hanul Kim

**Full citation:** Ai, Chunrong, and Edward C. Norton. 2003. "Interaction Terms in Logit and Probit Models." *Economics Letters* 80(1): 123–129. [doi:10.1016/S0165-1765(03)00032-6](doi:10.1016/S0165-1765(03)00032-6){.uri}.

------------------------------------------------------------------------

## 1. What the paper establishes

In a nonlinear model like a logit and probit, the coefficient on an interaction term does not equal the interaction effect on the outcome scale, unlike in a linear model. The interaction effect is calculated on the outcome scale. For two continuous predictors, it is the cross-partial derivative of the expected outcome. For two binary predictors, it is the double difference in predicted outcomes. Mixed cases require the corresponding combination of derivatives and differences.

$$\eta=\beta_1x_1+\beta_2x_2+\beta_{12}x_1x_2+X\beta$$

$$
\frac{\partial^2 F(\eta)}{\partial x_1\partial x_2} = F'(\eta)\beta_{12} + F''(\eta)(\beta_1+\beta_{12}x_2)(\beta_2+\beta_{12}x_1)
$$

This paper establishes four important implications for non linear models from the equation above. First, the interaction effect could be nonzero. Second, the statistical significance of the interaction effect is not calculated by a simple *t*-test on the coefficient of the interaction term. Third, the interaction effect is conditional on the independent variable. Fourth, the interaction effect can have opposite signs for different values of covariates. The interaction effect needs its own standard error, which can be calculated using the delta method. A standard t-test on the product-term coefficient does not test the interaction effect on the outcome scale. The interaction effect of $x_1$ and $x_2$ on $y$ is estimated as below.

$$
\hat{\mu}_{12} = \frac{\Delta^2 F(\mathbf{x}, \hat{\boldsymbol{\beta}})}{\Delta x_1 \Delta x_2}
$$

In addition, the authors reviewed 13 economics journals and found 72 articles from 1980–1999 with interaction terms in nonlinear models, none of which interpreted the coefficient correctly (p. 123). They also show, from their application to their own logit of HMO enrollment, a negative and significant interaction term coefficient coexists with positive interaction effects for many observations (p. 126).

## 2. Checks for a reviewer

All checks below presuppose a nonlinear model with an interaction term for a conditional claim.

**(a) Check whether the model is nonlinear and how the interaction effect is reported.** When the manuscript concludes that one variable's effect depends on another, check whether the support is the product-term coefficient or a "marginal effect" reported for the product term as if it were a variable of its own. Neither is the interaction effect. The manuscript should report the appropriate probability-scale interaction, that a cross-partial derivative for continuous predictors, a double difference for binary predictors, or the corresponding combination for mixed predictors.

**(b) Check how the significance test is conducted.** The significance test should be conducted on the calculated interaction effect itself, with a standard error computed for that quantity. Stars on the interaction term do not necessarily test that quantity.

**(c) Check every null result drawn from a product term.** An insignificant product-term coefficient does not signify that an effect is identical. Check whether the manuscript concludes no moderation or drops the term. The interaction can be significant for most of the sample despite the coefficient is not significant.

**(d) Check how the interaction is summarized across the sample.** A cross-difference at the covariate means or for one hypothetical case supports a claim about that profile, not automatically a claim about the target population. If the manuscript makes a conditional claim, check that it identifies the profiles where the effect is positive, negative, or estimated imprecisely. A two-by-two table of predicted probabilities lets a reviewer recompute the cross-difference, but not its standard error.

## 3. Evidence

**For (a).** "The key point of this paper is that the interaction effect is found by computing cross derivatives (or differences), not by just looking at the coefficient on the interaction term" (p. 125). The authors point out the wrong practice, saying "most applied economists instead compute the marginal effect of the interaction term" (p.124).

**For (b).** "The statistical significance of the interaction effect cannot be tested with a simple t-test on the coefficient of the interaction term" (p. 124). The correct standard error of the estimated interaction effect is calculated by using the delta-method variance. There's an instruction to "use the t statistic to test the hypothesis that the interaction effect equals zero, for given x" (p. 125). The test should be conducted on the calculated interaction effect itself, at the stated covariate values.

**For (c).** "Even though the interaction term is itself not statistically significant, the interaction effect is significant for most observations" (p. 127). It can be generally stated that "the interaction effect could be nonzero, even if β12 = 0" (p. 124).

**For (d).** "The interaction effect is conditional on the independent variables, unlike the interaction effect in linear models" (p. 124), and "it can have different signs for different observations, making simple summary measures of the interaction effect difficult" (p. 129). The authors show every observation's interaction effect and t-statistic against its predicted probability in Figs. 1–2 (pp. 127–128). They conclude that the shortcut "would lead to wrong inference in a substantial percentage of the sample" (p. 129).

## 4. Scope

**Applies to:** This check applies when a paper uses logit, probit, or another nonlinear model and uses an interaction term to claim that one variable changes another's effect on predicted probability. It still applies when the coefficient of interaction term is statistically insignificant. Checks (a) and (b) then always apply. Check (c) applies only when null conclusion is drawn from the interaction term. Check (d) applies only when the claim goes beyond the single profile that is reported.

**Does not apply to:** The checks do not apply to linear models or to nonlinear models that make no interaction claim. In linear models, the coefficient is the interaction effect and it can be tested with a single t-test.

## 5. What failure looks like

A paper estimates logit or probit, reports the interaction term coefficient as the size and direction of the interaction in predicted probabilities for the outcome, and treats the coefficient's p-value as the test of the probability-scale effect. It reports neither the appropriate cross-partial derivative or cross-difference nor its uncertainty, and it does not show how the effect varies across covariate values. This can make the sign and result about statistical significance wrong.

A reviewer should write that the evidence shown does not establish the conditional claim, not that the claim is false. The cross-difference often agrees with the coefficient in part of the sample from the population.

## 6. Test cases

**SHOULD trigger:** Mansfield, Edward D., and Jon C. Pevehouse. 2000. "Trade Blocs, Trade Flows, and International Conflict." *International Organization* 54(4): 775–808.

This case triggers checks (a), (b), and (d) since the authors use a significant logit product-term coefficient to show a moderation claim, but do not report or test the probability scale cross difference and summarize predicted probabilities at a selected covariate profile rather than across the target sample.

The authors argue that members in the same PTA are less likely to dispute each other than other states and that hostilities between PTA members are less prone to occur as trade is facilitated between them. The outcome is whether a militarized interstate dispute begins, and the authors estimate logit models. The hypothesis is tested by adding TRADE × PTA to a logit of dispute onset (pp. 786–787). The evidence is offered with the coefficient, saying "the estimates of PTAij and TRADEij × PTAij are negative, and the estimate of the latter variable is statistically significant" (p. 788). This is a direct trigger because trade is continuous and PTA membership is binary, so the reviewer should check whether the probability-scale effect compares the change in trade's predicted probability effect between PTA and non-PTA dyads. Table 2 (p. 790) lists predicted probabilities for one profile, a contiguous, non-allied dyad with the other covariates at their means. A double difference can be computed from it, but none is reported or tested.

**Should NOT trigger:** Rudolph (2021), “Populist Anger, Donald Trump, and the 2016 Election.” *Journal of Elections, Public Opinion and Parties* 31(1): 33–58.

The paper estimates ordered probit models for candidate favorability (Tables 3-4, pp. 43-44) and perceived presidential quality (Table 5, p. 47). It then estimates separate multinomial logit models for Republican and Democratic nomination preferences (Tables 6-7, pp. 49-50). In these reported specifications, predictors enter separately and the tables contain no interaction terms, and the paper doesn't claim that one predictor's effect depends on another. The paper reports predicted probabilities but they are not interaction effects. Therefore, none of the checks (a)-(d) is triggered in this paper. A careless reviewer may flag this paper solely because it uses logit/probit or reports predicted probabilities, but it would generate a false positive.
