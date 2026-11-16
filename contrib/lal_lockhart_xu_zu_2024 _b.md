# How Much Should We Trust Instrumental Variable Estimates in Political Science?

**Contributor:** Eojin Baek

**Full citation:** Lal, Apoorva, Mackenzie Lockhart, Yiqing Xu, and Ziwen Zu. 2024. "How Much Should We Trust Instrumental Variable Estimates in Political Science? Practical Advice Based on 67 Replicated Studies." _Political Analysis_ 32: 521–540. [doi:10.1017/pan.2024.2](https://doi.org/10.1017/pan.2024.2).


## 1. What the paper establishes

The authors replicate 70 IV (instrumental variable) designes. they find that researchers often overstate strenght of it. IV estimates also tend to exceed OLS estimates. A weak first stage can amplify bias from violations of exogeneity. approrpriate inference assumptions and identifying assumptions require separate consideration.


## 2. Checks for a reviewer

(a) Does the first-stage diagnostic account for the data structure?

a first stage F-statistics may overstate IV strength when heteroskedasticity or clustering is not adequate. reviewer should check whether the paper reports an effective F-statistic with an appropriuate variance estimator. furthermore, reviewer should ehck first stage and reduced form coefficient and their confidence interval. If both the instrument and treatment are continuous, first-stage plots after accounting for covariates would help identify influential observations. An F below 10 requires appropriate inference, but does not by itself rejects the design.


(b) Does the inference represent uncertainty?

2SLS t-test may understate uncertainty when IV is weak. the paper should explain whether it uses effective-F pretesting. the tF adjustment for one treatment and one instrument, or a weak instrument robust procedure such as Anderson-Rubin. When effective F is below 10, the paper should use tF, where applicable, or a weak-instrument-robust procedure such as Anderson–Rubin. outliers and group strucutres also warrant consideration of bootstrap-c or bootstrap-t. bootstrap does not solely resolve weak identification, comparing suitable confidence interval would help establish how much the conclusion is depending on the inference procedure.


(c) Does the paper explain the difference between OLS and IV estimates?

If the paper expects OLS to overstate the effect, a larger IV estimate requires explanation.
Do not accept heterogeneous treatment effects or measurement error as the explanation without support.
The authors find that neither is likely to explain the gap in their sample.
If larger effects among compliers are central to the explanation, the paper should profile who the compliers are.
The reviewer should also examine the arguments for instrument assignment and the exclusion restriction.


## 3. Evidence

(a)

Quote: "Calculate and report FEff for the first stage, taking into account heteroscedasticity and clustering structure as needed. However, do not discard a design simply because FEff < 10." (p. 537)
This is the authors' own advice. It supports reporting an effective F and not treating F < 10 as an automatic rejection.

Twelve of 70 designs did not report a first-stage F-statistic. With clustered data, original F-statistics tended to exceed effective or bootstrapped F-statistics (pp. 530–531, Figure 2). This supports checking how strength was calculated.


(b)

Quote: "both weak instruments and non-i.i.d. errors have contributed to overstatements of power in IV studies in political science" (p. 533).
The authors also advise: "If FEff < 10, choose Option 2 or 3" (p. 537), meaning the tF procedure or a weak-instrument-robust test such as AR. This supports using inference that fits weak instruments.

AR failed to reject a zero effect in 12 designs, compared with seven in the original results. Among 54 single-instrument designs, seven conventionally significant results became insignificant with tF (p. 532).


(c)

Quote: "If you expect the OLS results to be upward biased, be concerned if the 2SLS estimator yields much larger estimates than OLS." (p. 538)
This is an item in the authors' checklist. It states the check directly.

Quote: The authors say that using IV out of concern about upward OLS bias is "apparently at odds with the significantly larger magnitudes of the 2SLS estimates" (p. 534).
This supports asking the paper to explain why its IV estimate is larger than OLS.

IV estimates exceeded OLS estimates in absolute magnitude in 68 of 70 designs. The median absolute ratio was 3.4. The authors discuss instrument invalidity, publication bias, heterogeneity, and measurement error as possible explanations (pp. 534–535).

The authors find it "highly unlikely that heterogeneous treatment effects alone can explain" the gap (p. 534). They call measurement error "an unlikely explanation" (p. 535). This is why the check asks for support before accepting either reason.
If compliers are thought to have larger effects, the authors say to "explain this through profiling of these principal strata" (p. 538).


## 4. Scope

Overall:

These checks fit papers that use linear 2SLS with one endogenous treatment.
They matter the most for observational designs with non-random instruments.


(a) First-stage strength

Applies when:
The paper uses 2SLS and the data are clustered or heteroskedastic.
The original F can then look larger than the effective F (p. 531).

Stays silent when:
The paper already reports an effective F that uses cluster-robust errors.
It also stays silent for studies with no IV.


(b) Inference

Applies when:
The effective F is below 10.
Or the paper relies on a conventional t-test with a weak first stage.
The tF procedure applies only to one treatment and one instrument (pp. 526, 537).
With several instruments, ask for AR or bootstrap instead.

Stays silent when:
The paper reports an effective F of 10 or more and uses the t-test with pretesting.
This is Option 1 in the authors' checklist (p. 537).
Do not demand AR or tF in that case.
Still ask for bootstrap if outliers or group structures are present (p. 537).


(c) OLS vs. IV

Applies when:
The paper uses IV because it fears upward OLS bias.
Or the paper treats OLS as its main result.
The authors found that 40% of studies treat OLS as the main finding (p. 534).

Stays silent when:
The paper expects OLS to be biased toward zero and says so.
Only 21% of studies express this belief (p. 534).
Measurement error in the treatment is one possible reason.
Only 4 articles (6%) give it as their reason for using IV (p. 535).
A larger IV estimate is then the expected direction.


Limits of the evidence:

The numbers come from 70 designs in 67 replicable articles.
The authors started from 114 articles.
Only 67 (59%) could be replicated (Table 1, p. 528).
Do not treat the percentages as rates for all IV papers.


## 5. What failure looks like

(a)
A paper reports a conventional first-stage F above 10 and declares the instrument strong without considering relevant clustering.

(b)
A paper reports effective F below 10 but relies solely on a conventional significant t-test. Alternatively, it interprets a wide confidence set containing zero as evidence of a negligible effect.

(c)
A paper expects upward OLS bias but treats a substantially larger IV estimate as confirmation, without explaining the difference or supporting its heterogeneity argument.


## 6. Test cases

Should trigger: Duflo, Esther. 2001. "Schooling and Labor Market Consequences of School Construction in Indonesia: Evidence from an Unusual Policy Experiment." _American Economic Review_ 91 (4): 795–813. [doi:10.1257/aer.91.4.795](https://doi.org/10.1257/aer.91.4.795).

The paper uses regional school-construction intensity interacted with cohort exposure to instrument schooling when estimating its effect on wages. Checks (a) and (b) apply because the interpretation requires a sufficiently informative first stage and appropriate inference. The reviewer should assess how instrument strength and uncertainty account for the regional structure of the variation. Applying these checks does not itself establish a methodological failure.


Should not trigger: Haas, Nicholas, and Prabin B. Khadka. 2020. "If They Endorse It, I Can't Trust It: How Outgroup Leader Endorsements Undercut Public Support for Civil War Peace Settlements." _American Journal of Political Science_ 64 (4): 982–1000. [doi:10.1111/ajps.12519](https://doi.org/10.1111/ajps.12519).

The paper experimentally varies leader endorsements and compares support for peace settlements across endorsement conditions. These comparisons estimate the effects of endorsement cues directly, rather than using them to instrument another variable. The IV-specific checks therefore do not apply to these treatment comparisons.
