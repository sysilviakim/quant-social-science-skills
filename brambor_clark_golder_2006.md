# Multiplicative Interaction Models

**Contributor:** Yanlin Jin

**Full citation:** Brambor, Thomas, William Roberts Clark, and Matt Golder. 2006. "Understanding Interaction Models: Improving Empirical Analyses." *Political Analysis* 14(1): 63–82. doi:10.1093/pan/mpi014.

## 1. What the paper establishes

The paper addresses three commonly encountered problem  in empirical analyses that employ multiplicative interaction models. First, analyst should use interaction models whenever the hypothesis they want to test is conditional, and they must include all constitutive terms in their models. Second, they should not interpret constitutive terms as if they are unconditional marginal effects. Finally, analysts should calculate substantively meaningful marginal effects and standard errors.

If a conditional hypothesis says the effect of X on Y depends on Z, then it requires an interaction term, and the interaction model must include all constitutive terms. The coefficient on X is the effect of X when Z is zero. It is not the average effect of X. The quantity of interest is the marginal effect of X at substantively meaningful values of Z, with its standard error.

## 2. Checks for a reviewer

**(a) If the hypothesis is conditional, check that it use multiplicative interaction model and that the model includes all constitutive terms.** Find the hypothesis. If a conditional hypothesis says the effect of X on Y depends on Z, then it requires an interaction term, and the interaction model must include all constitutive terms. If it says the effect of X holds "only when," "more when," or "depending on" Z, the model must contain X×Z. Reject these three justifications: "Z has no effect on average," "including Z causes multicollinearity," and "we centered the variables to reduce multicollinearity." Also flag a manuscript that drops the interaction term because its coefficient is in significant.

**(b) Check how the manuscript interprets the coefficients on constitutive terms.** The coefficient on X is the effect of X when Z = 0. Flag any sentence that calls it a "main," "average," "independent," or "unconditional" effect. Flag any sentence that reads its sign as "X increases Y" in general. Then check whether Z = 0 occurs in the sample and whether Z has a natural zero. If not, the coefficient is substantively meaningless and the manuscript should not interpret it at all.

**(c) Check that the manuscript reports marginal effects and standard errors at values of Z other than zero.** If Z is dichotomous, it must report four numbers: the marginal effect of X when Z = 0 and when Z = 1, each with a standard error. If Z is continuous, it must report a figure or table of the marginal effect with confidence intervals across a substantively meaningful range of Z. If the marginal effect is significant over only part of the range of Z, the manuscript should also report the percentage of the sample that falls within that part.

## 3. Evidence

**For (a).** "[A]nalysts should use interaction models whenever the hypothesis they want to test is conditional" (p. 64). The check compares the wording of the hypothesis with the estimating equation. "No matter what form the interaction term takes, all constitutive terms should be included" (p. 66). Omitting the constitutive term will result in biased and inconsistent estimates of coefficient(p.67). The "no average effect" justification is "never" valid, because the coefficient of X does not represent the average effect of Z on Y, it only indicates the effect of Z when X is zero(p. 66). Multicollinearity does not justify omission, because high multicollinearity simply means there is not enough information in the data to estimate the model parameters accurately and the standard errors rightfully reflect this(p. 70). Centering does not help, the centered model is an algebraic transformation of the uncentered one and gives the same marginal effects and uncertainty (p. 71).

**For (b).** "[I]nterpreting constitutive terms as unconditional or average effects is wrong" (p. 78). The coefficient on X captures the effect of X only when Z is zero, and the labels "unconditional," "main," "independent," and "average" are all wrong (p. 72). When Z is never zero in the data,  The coefficient on X says nothing meaningful.  When Z has no natural zero(e.g.government size), rescaling changes both the size and the significance of coefficient on X.

**For (c).** "[T]he typical results table often conveys very little information of interest" (p. 74). The traditional table gives the effect of X and its standard error only at Z = 0. The standard error at any other value of Z requires cov(b1, b3), which is rarely reported (p. 74). The reporting requirement is on p. 74: four numbers for a dichotomous Z, a figure for a continuous Z. The coefficient b3 cannot stand in for the marginal effect: when the covariance is negative, b1 + b3·Z can be significant even if every model parameter is insignificant (p. 70).

## 4. Scope

**Applies to:** Papers with a conditional hypothesis, that is, a hypothesis that the effect of X on Y depends on Z. Papers whose model includes a product term, including X×Z, quadratic terms such as X², and higher-order interaction terms such as X×Z×J (p. 66). The dependent variable can be continuous or limited. The modifying variable Z can be dichotomous or continuous (p. 66), and there can be one modifying variable or several (p. 77, n. 15). Check(a) and (b) and (c) apply to any such paper.

**Does not apply to:** Models in which a constitutive term cannot be included because including it leads to perfect multicollinearity (p. 70, n. 8; pp. 69–70). Papers that test a conditional hypothesis by running separate regressions on subsamples, for example one regression for men and one for women.

## 5. What failure looks like

A paper states a conditional hypothesis and uses an interaction term, but it omits one or more constitutive terms.  It interprets the coefficient on a constitutive term as the average effect of a change in X on Y, as it would in a linear-additive regression model. It does not calculate substantively meaningful marginal effects and standard errors. The results table reports only the model parameters, so a reader cannot know whether X has a significant effect on Y when Z is not zero.

## 6. Test cases

**SHOULD trigger:** Boix, Carles. 1999. "Setting the Rules of the Game: The Choice of Electoral Systems in Advanced Democracies." *American Political Science Review* 93(3): 609–624. The paper draws two main conclusions from models with interaction terms: ethno-religious fragmentation × country size, and strength of socialist parties × number of non-socialist parties. Neither model includes the constitutive terms (p. 79). Check (a) triggers on both. Check (c) follows, because the table gives no marginal effects with standard errors.

**Should NOT trigger:** Smith, Mark A. 2001. "The Contingent Effects of Ballot Initiatives and Candidate Races on Turnout." *American Journal of Political Science* 45(3): 700–706. A near-miss: the interaction model omits a constitutive term, so a careless agent would trigger the constitutive-terms part of check (a). But one of the variables in the interaction is observed only for a subset of the cases, which causes perfect multicollinearity, and the analyst is simply not able to include all of the constitutive terms.