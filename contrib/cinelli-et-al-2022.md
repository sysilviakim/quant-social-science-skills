# <Paper short title>

**Contributor:** Nayoung Kim

**Full citation:** Cinelli, Carlos, Andrew Forney, and Judea Pearl. 2024. "A Crash Course in Good and Bad Controls" Sociological Methods & Research 53(3): 1071–1104.


## 1. What the paper establishes

Including more variables to a regression model for solving omitted variable bias is not a good choice. Researchers include control variables in their regression model as fixed (ceteris paribus) to see the regressor of interest (causality between X and Y) is more precisely determined. However, researchers should know there are apparent distinction between good and bad control variables. Good control variable means variables that “thought to be unaffected by the treatment (p.1072)” and bad control variables means variables that “thought to be affected by the treatment (p.1072)” so that it can be dependent variable. 

For this issue, authors provide guidance for bad control problem with DAG and show which variable can “produce(s) unintended discrepancy between regression coefficient and the effect that the coefficient is intended to present (p. 1071)“ when included in a model. Firstly, remember the basic concept of DAG is how to block back-door path, which means “confounding paths that start with an arrow point to X (p.1088) (X <- Z -> Y).” secondly, there are three main paths (1) chains (mediator) (2) forks (common cause) and (3) colliders (common effects) and each explanation on how these paths works in control variables will be described below. 


## 2. Checks for a reviewer

(a) Identify the causal mechanism the study aims with the treatment (X), the outcome (Y), and the effect the paper wants to estimate. Is it the total effect including mediator, a direct effect between X and Y, or just a preliminary prediction? If the prediction, reviewers do not need to consider this check lists. If the causal effect, identify control variables included in causal mechanism design. 

(b) Identify or draw a DAG with the treatment (X), the outcome (Y), and the candidate control variables (Z). Include unobserved variables (U) that are mentioned in the paper, as well as other plausible unobserved causes based on your knowledge. Trace the paths between (X) and (Y), and identify which paths are causal and which are noncausal. Then ask what each control variable blocks or opens. 

(c) Check whether controlling for a variable blocks part of the causal effect the paper wants to estimate. If the target is the total effect, ask whether the variable is a mediator or partly controls for a mediator. If the target is a direct effect, check whether the adjustment is appropriate for that different goal.

(d) Check whether adjustment or sample selection conditions on a collider or one of its descendants. Ask whether this could open a noncausal path between the treatment and the outcome.

(e) Check how the controls work together and how they affect bias and precision. A control may be neutral for bias but still make the estimate more or less precise. Also check whether a control could amplify existing bias, and whether the paper’s sample selection changes which adjustment is helpful.

(f) Tip: Use a DAG tool when the causal structure is complex. If the DAG has many variables and paths, use a DAG package to help identify possible adjustment sets. The tool can support the review, but the reviewer should still explain the causal assumptions behind the DAG.


## 3. Evidence

(a) The authors state that their examples focus on the average causal effect (ACE) of a treatment (X) on an outcome (Y), defined as the expected change in Y under an intervention on X (p. 1075). They also explain that controlling for a mediator may block part of the total effect, but may be appropriate when the goal is to estimate a controlled direct effect (pp. 1079–80). This shows why a reviewer should first identify the effect the paper aims to estimate. The article focuses on identifying causal effects through covariate adjustment (p. 1085). 

(b) The authors use DAGs to show how mediators, common causes, and colliders create different paths between variables (p. 1074). Models 1–3 show cases where controlling for (Z) blocks a back-door path, including paths involving an unobserved confounder (pp. 1075–76). Models 4–6 show that common causes of (X) and a mediator can also create a back-door path and should be considered when estimating the effect of (X) on (Y) (p. 1076).

(c) In Model 11, Z is a mediator on the causal path from X to Y. If the paper wants to estimate the total effect, controlling for Z blocks part of that effect. In Model 12, Z is not itself a mediator, but controlling for it partly controls for a mediator and can also bias the estimate (pp. 1079–80). In a variation of Model 11, an unobserved variable U affects both Z and Y. Adjusting for Z then opens the path X  Z  U  Y, which can bias the estimate of the direct effect (p. 1080).

(d) Model 7 shows that controlling for a pretreatment collider can open an otherwise blocked path between X and Y (p. 1077). Models 16 and 17 show selection bias from conditioning on a collider (p. 1081). Model 18 shows a related problem: controlling for a descendant of the outcome can cause case-control bias. The authors note an exception: if X has no causal effect on Y, this adjustment can still be valid for testing whether the effect is zero (p. 1082).

(e) Model 10 shows that controlling for a pretreatment variable can amplify existing bias (p. 1078). Models 8 and 13 are neutral for bias and may improve precision by reducing variation in the outcome (pp. 1078, 1080). Models 9, 14, and 15 are also neutral for bias, but controlling for them can reduce variation in X and hurt precision (pp. 1078, 1081). Model 15 has a special case: when the data are selected on W=w, controlling for Z can block a collider path created by that selection and help estimate the effect in that selected group; under the stated linear model, it can recover the ACE (p. 1081). The authors therefore recommend evaluating the full set of controls together, checking that it blocks noncausal paths, preserves the causal paths of interest, and does not open new spurious paths (p. 1084).

(f) The authors recommend specialized software for more complicated causal structures. They name the R packages pcalg, dagitty, and causaleffect, as well as CAUSALGRAPH for SAS (p. 1084). They also note that these tools can automate the choice of adjustment sets once a causal diagram has been specified (p. 1084).



## 4. Scope 

**Applies to** empirical studies that estimate a causal effect of a treatment on an outcome and condition on covariates through regression, stratification, matching, or sample restriction. Reviewers should assess whether each adjusted variable blocks a noncausal path, blocks part of the causal effect, or opens a collider path, given the study’s causal question and assumptions. The checklist is especially relevant when the target is the total effect of X on Y. 

**Does not apply in** Studies that only describe associations or make predictions, without estimating a causal effect. This checklist does not determine which variables should be included in a prediction model. It is also not a general guide to causal methods beyond covariate adjustment, such as instrumental-variable or front-door methods. If a study aims to estimate a direct or mediated effect rather than a total effect, reviewers should not apply the checklist’s guidance on controlling for mediators mechanically. They should assess the controls in relation to the effect the study aims to estimate.





## 5. What failure looks like

A paper claims to estimate the total causal effect of X on Y, but controls for a mediator M on the path X -> X -> Y (chains). This conditioning on Z blocks part of the effect that the paper aims to estimate. The paper then interprets the adjusted coefficient as the total effect. A reviewer should also check whether the controls open a spurious path, such as by conditioning on a collider or one of its descendants. Including a control is not automatically a problem. The problem is using a control set that blocks a causal path or opens a spurious one while still claiming to estimate the total effect.



## 6. Test cases
**SHOULD trigger** Banack, Hailey R., and Jay S. Kaufman. 2013. “The ‘Obesity Paradox’ Explained.” Epidemiology 24(3): 461–462. The paper discusses why obesity can appear to protect people with cardiovascular disease from mortality. Restricting an analysis to people with cardiovascular disease conditions on a variable that may be caused by obesity and by other causes of mortality. This can open a noncausal path between obesity and mortality, as in Model 16. This case should trigger the reviewer to check for collider stratification bias and to examine how the authors interpret the association. 

**SHOULD NOT trigger** Dasgupta, Aditya. 2018. “Technological Change and Political Turnover: The Democratizing Effects of the Green Revolution in India.” American Political Science Review 112(4): 918–938. Dasgupta uses an instrumental-variables analysis to estimate the effect of high-yielding variety (HYV) crop adoption on political turnover, using the timing of the crops’ introduction and district-level differences in suitability for the new technology. The instrument should not be considered as a bad control under Model 10 simply because controlling for a similar variable in an ordinary regression could amplify bias. The reviewer should assess the IV assumptions separately and still examine any other covariates included in the analysis.


