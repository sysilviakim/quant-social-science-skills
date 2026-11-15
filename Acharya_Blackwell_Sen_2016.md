# Causal Findings Without Bias

**Contributor:** Caitlin Manchester

**Full citation:** Acharya, Avidit, Matthew Blackwell, and Maya Sen. 2016. "Explaining Causal Findings Without Bias: Detecting and Assessing Direct Effects." American Political Science Review 110 (3): 512–29.

## 1. What the paper establishes

The authors assert that conditioning on posttreatment variables can introduce bias. They show how under certain conditions, the CDE can help rule out alternative causal pathways and identify whether a treatment still has effect outside of a mediator, as well as how intermediate confounders can bias estimates of direct effects.
To help rule out competing explanations whilst avoiding serious bias, this paper recommends estimating the CDE using sequential g-estimation. 

## 2. Checks for a reviewer

(a) **Check if the research simply conditions on post-treatment variables**: does the paper condition on a variable that may be affected by treatment? If included, does the paper identify it and justify how it handles them?

(b) **Check for intermediate confounders**: does the paper identify variables affected by treatment that also have an effect on the mediator and outcome? If the paper identifies plausible intermediate cofounders, does it use a method that addresses them?
 
(c) **Check the estimand**: does the estimand match the papers causal claim? If intermediate confounders are present, do the authors identify ANDE or ANIE? If so, do they acknowledging and justify the additional assumptions required, such as individual-level homogeneity? Do the authors note ATE - ACDE as an aggregation of effects? 

(d) **Check for use of sequential g-estimation**: if the authors estimate ACDE with intermediate confounders present, do they apply sequential g-estimation. 



## 3. Evidence

**For (a).** The authors estimate that “as many as two thirds of empirical papers” make causal claims while conditioning on post-treatment variables, with 40% doing so and 27% conditioning on a variable that could “plausibly be posttreatment” (p512). They note researchers tend to include such controls to isolate a “causal effect estimate washed of an alternative explanation”, or to adjudicate between competing mechanisms (p512). However, fixing post-treatment variables can lead to “seriously biased estimates“ of direct effects” (p512). Citing Rosenbaum (1984), the authors note conditioning on endogenous post-treatment variables can open noncausal pathways and induce “spurious relationships between the treatment and […] the outcome” via intermediate confounders (p514, 518). Also of note, selection bias strips causal interpretation from the main coefficient; more generally, inclusion of post treatment variables into a statistical analysis can bias the estimator away from zero and lead to overstatement of the “size of a causal effect in either direction” (p514).


**For (b).** The authors criticise prior causal mediation approaches for “assuming no intermediate confounders exist”, noting that it may be an “unrealistic assumption” that lacks credibility in applied research (p518). In the presence of intermediate confounders, “the ANDE and the ANIE are unidentified”, and intermediate confounders can ”raise the possibility of intermediate variable bias” (p518). In standard regression models, this is noted as a no-win where both omission and conditioning of intermediate confounders can lead to a “biased estimate of the ACDE” (p518). Also to note: depending on the definition of intermediate confounders, variables treated as pre-treatment controls may have been “miscategorised[…] and thus would be an intermediate confounder” if they are affected by treatment, thus requiring robustness checks (p523). 

**For (c).** Comparing the ATE and ACDE provides aggregation of indirect and interaction effects, yet “all direct effect quantities of interest raise the possibility of intermediate confounders” (p518). In the presence of intermediate confounders without a “strong individual level homogeneity assumption”, ANDE and ANIE are rendered unidentifiable thus making ACDE the estimand reliably identifiable under sequential unconfoundedness (p518). Thus, choice of “empirical application will determine the utility” of a papers approach, as “in some cases indirect effects are of particular interest while in others the combination of indirect effects and interaction is sufficient” (p518). Depending on the causal questions and research design, different estimands are more appropriate. ACDE is more suitable for design with “multiple treatments that are jointly randomised to each unit”, whereas ANDE “combines the direct effect […] with an interaction”, providing more information about the decomposition of the total effect (p527). 

**For (d).** While use of sequential g-estimation can help ”avoid[] potential problems associated with posttreatment bias”, its validity depends on sequential unconfoundedness (p522). The “ACDE is non-parametrically identified” under sequential unconfoundedness, but this may be unrealistic in observational studies and may be violated if relevant determinants are omitted (p520). The approach also depends on the ”validity of the modeling assumptions” (p521). Particularly with limited dependent variables, the conditional expectation function may not be linear, potentially biasing the coefficient estimates and estimation of the demediation function (p521). 
Note: if a paper uses a binary outcomes or logistic models,
“sequential g-estimation is valid for differences in means[…] but not for logistic models” as it can lead to bias from “model misspecification” (p523). 


## 4. Scope

**Applies to**: research making causal claims about mechanisms or direct effects by conditioning on post-treatment confounders. Research estimating CDE/ACDE or ANDE/ANIE, particularly if intermediate confounders are included. 
**Applies to**: studies where variables affected by treatment are controlled for using standard regression or matching, whether to test causal mechanisms or as accidental over-control.  
**Does not directly apply to**: pre-treatment confounds or variables occurring after the mediator (thus not having a causal effect upon it). Note, post-mediator variables may still cause bias by blocking the pathway or acting as a collider. 

**Applies to**: research employing sequential g-estimation methods. Though recommended by authors, the method does not make checks irrelevant. Check (d) should still be carried out to assess whether models and assumptions are appropriate. 
Note: sequential g-estimation is valid for linear models (differences in means), ‘but not for logistic models’ (p523). Or papers only estimating ATE with zero intermediate confounders, thus allowing for standard regression. 


## 5. What failure looks like

A paper seeking to establish causal relationships that controls for post-treatment variables without applying sequential g-estimation, or application of said sensitivity test to logistic models. Papers that claim to identify ANDE or ANIE despite post-treatment confounding variables, or mislabel ATE-ACDE as a pure indirect effect when it aggregates effects. 

## 6. Test cases

**SHOULD trigger**: Alesina, Alberto, Paola Giuliano and Nathan Nunn (2013). “On the Origins of Gender Roles: Women and the Plough.” _Quarterly Journal of Economics_ 128 (2): 469-530. In an OLS regression, the authors assume no intermediate confounders, Zi, for the effect of income on women’s political participation, conditioning on the post-treatment mediator of modern-day per capita income whilst interpreting the remaining coefficient as a direct effect (p25,27). This thus introduces post-treatment bias.
Further issue is found with the causal ordering of outcome and mediator, having been measured in the same year 2000 (p16). Checks (a)-(d) should apply. Check (a) should flag the conditioning on post-treatment covariates, (b) should flag the modern variables acting as intermediate confounders as well as the omission of additional factors such as modern education, (c) should flag the targeting of ACDE by holding modern income fixed to show a negative cultural effect remains (without defining the estimand or testing for further interaction), (d) should flag the lack of usage of sequential g-estimation while using intermediate confounders. 
Fearon, James D., and David D Laitin (2003). “Ethnicity, Insurgency and Civil War.” _American Political Science_ 9 (1): 75-90. In showing that the impact of ethnic fractionalisation on the onset of civil wars fades when controlling for several post-treatment factors, the authors include post-treatment variables such as political instability and per capita income (p81-84). It is also noted in Acharya et Al (2016) that ‘good practice would be to combine different specifications of pretreatment/intermediate confounders and sensitivity analyses’ as there is the possibility of miscategorisation of confounders (p523). Checks (a)-(d) should apply. Check (a) should flag direct conditioning on post-treatment variables such as political instability, (b) should flag how controls such as regime type act as intermediate confounders thus blocking causal pathways, (c) should flag the implicit targeting of ACDE in trying to show ethnic fractionalisation has no effect when other variables are held fixed, and (d) should flag the use of single regression rather than sequential g-estimation, and the use of logistic regression. 

**SHOULD NOT trigger**: Acharyacoup, Blackwell, Sen (2016): “The Political Legacy of American Slavery.” _The Journal of Politics_ 78 (3): 621-641. No checks should apply. Authors define ACDE, separate pre-treatment covariates and post-treatment confounders, and apply sequential g-estimation. Though checks apply, the paper addresses them.
