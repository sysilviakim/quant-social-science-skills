# DiD Treatment Timing

**Full citation:** Goodman-Bacon, Andrew. 2021. "Difference-in-Differences with Variation in Treatment Timing." _Journal of Econometrics_ 225 (2): 254–77.

**Contributor:** Caitlin Manchester

---

## 1. What the paper establishes

The paper shows that with variation in treatment timing, the TWFEDD estimator is a weighted average of all 2x2 DDs within the data set. This encompasses both earlier and later treatment time periods, as well as ‘treatment’ and ‘control’ groups. The paper establishes that when units receive treatment at different times, some already-treated units are taken as controls and as such, which may yield biased estimates. The DD decomposition helps researchers assess whether TWFE is applicable, and when alternative estimators should be applied.

## 2. Checks for a reviewer

**(a) Check whether the paper exploits variation across groups of units that receive treatment at different times.**

**(b) If the paper uses TWFE with time-varied treatment, check whether already-treated units act as controls for later treated groups.**

**(c) If the paper uses TWFE with time-varied treatment, check whether the author assumes treatment effects do not change over time within timing groups (Δ ATT = 0) when already-treated units serve as control.** When this assumption is violated, TWFE regressions may result in negative weighting and bias the outcome away from VWATT.

**(d) If the paper uses TWFE with time-varied treatment, check whether the author defines the target estimand, and whether the TWFE coefficient is noted as ATT or VWATT.** Under Goodman-Bacon’s conditions, TWFE identifies VWATT, which only equals standard ATT under constant treatment effects over time assumption.

**(e) If the paper uses TWFE with time-varied treatment, check for time-varying covariates.** Adding covariates is thought to make a “common trends” assumption more plausible but can introduce a new source of identifying variation. Controlling for them may also absorb some of the treatment effect.

## 3. Evidence

For (a). From the authors literature review, “Half of the 93 DD papers published in 2014/2015 in 5 general interest or field journals had variation in timing“(255), showing that variation in treatment timing is a feature of many DiD papers. As “The TWFEDD estimator can fail to identify interpretable treatment effect parameters” the author suggests caution “in designs with treatment timing variation” (256). For mathematical proof of DD decomposition theorem, look to Theorem 1 (p257).

For (b). In treatments with variation in timing,“[a]ll timing groups are controls in some terms, but the earliest and/or latest units necessarily get more weights as controls than treatments” (p264). Goodman-Bacon further explains that “when already-treated units act as controls, changes in their outcomes are subtracted and these changes may include time-varying treatment effects“ (p255). Thus in time-varied treatment TWFE designs, already-treated units can be controls for later-treated units, thus comparison is skewed by potential continuing treatment effect. The author cautions this can “account for the bias in the overall DD estimate”(p266), thus “practitioners should be careful when relying on it in designs with treatment timing variation”(p256). Important to note is this ”does not imply a failure of the design” regarding non-parallel trends in counter-factual outcomes but it suggests caution when using TWFE to summarize treatment effects(p255).

For (c). Goodman-Bacon notes “[e]vent-study estimates show that the treatment effects grow over time [...] which biases many of the timing comparisons”(p256). This matters as the ”assumption of constant treatment effects is necessary because already-treated units act as the control group in some 2x2 DD terms”(p272). When treatment effects vary over time it can “substantially bias TWFEDD away from VWATT”(p261), because “Δ ATT ≠ 0“(p262). Thus the paper should assess whether DiD over time can be reasonably assumed if already-treated units are taken as control.

For (d). Goodman-Bacon emphasises that the causal estimand the TWFEDD can identify is a “variance-weighted average treatment effect on the treated”(p272), rather than automatically being the sample ATT. As “VWATT does not equal the sample ATT”(p262), and weights are no proportional to the amount of time units spend under treatment, “VWATT also does not equal the effect in the average treated period”(p262). The consequence of this is shown in his analysis of the Stevenson and Wolfers paper, where the “TWFEDD estimate(−3.08) is therefore a misleading summary of the average post-treatment effect(about −5)”(p256). Only by distinguishing the parameter identified by TWFE can one accurately find the intended estimate.

For (e). It is noted that “[m]ost applications, however, include time-varying controls” - reerence equation 21 (p268). As covariates “change the way TWFEDD weights subsample estimators [and] adjust the 2x2 estimates themselves”(270) it does not only adjust the TWFE comparison but also “introduces a new source of identifying variation […] that was not there in the unadjusted version”(p270). Furthermore, as the author quotes Rosenbaum(1984), to be useful for identification covariates “must be unaffected by the treatment to avoid bias from ‘conditioning on a post-treatment variable’”(p268). This inclusion of time-varying covariates can thus change both it identifying variation and weighting structure of TWFE rather than just aiding the common trends assumption as many intend. This effect on TWFEDD weights subsample estimators is shown in EQ.20 (p267). Moreover, as controls can “absorb part of the treatment effect”(p271) when treatment effects are correlated with time variation, conditioning on them can not only absorb treatment affect but also introduce bias.

## 4. Scope

**Applies to:** causal DiD studies where TWFEDD with time-varied treatment is used. Check (a) is triggered as a screening check when treatment timing variation is the condition under which TWFE combines numerous 2x2 DD comparisons. Following checks only apply if TWFE is used. Checks (b), (c), (d) apply when conventional TWFE is used. Check (e) apples when time-varying covariates are introduced. If common trends assumption applies, TWFE differs from VWATT by -Δ ATT, pulling up the estimate relative to VWATT. This may balance out, leaving a near-zero TWFE estimate however, and does not mean the research design is invalid (p261). Second-best-sensitivy analysis (supplementary comparison) is the alternative estimators as noted in the conclusion that can deliver causal estimates when TWFEDD cannot (p272).

**Does not apply to:** 2x2 DD where all treated units’ treatment occurs in same period. Papers where already-treated units are excluded from control. Check (a) is not triggered, thus following checks also not triggered.

**Does not directly apply to:** DiD studies with variation in treatment timing that use alternative estimator as suggested by Goodman-Bacon, that addresses bias from time-varying treatment effects or allow control over target parameter. Check (a) applies but checks (b)-(e) need assessment of alternative estimator to check for TWFE-like comparisons. For check (b) the presence of already-treated units as controls is not necessarily a failure, as it is a feature of TWFE. Does not necessitate that parallel trends fails(p255).

## 5. What failure looks like

A paper includes already-treated units but treats the design as 2x2 DD without acknowledging variation in treatment timing. It uses already-treated units with time-varying effects as control against later-treated units without acknowledging effects or balancing for them, potentially producing a misleading summary of the average post treatment effect or bias due to changes in weights. The paper includes such treatment timing variation and does not use simple flexible estimators (Callaway and Sant’Anna) or evaluative tools such as provided by Goodman-Bacon. The paper uses TWFE to summarise treatment effects that vary overtime, despite Δ ATT ≠ 0. The paper seeks to estimate the sample ATT but interprets the TWFE coefficient an ATT despite it identifying VWATT. The paper does not address bias or contamination. The paper includes time-varying covariates that introduce a new source of identifying variation, without justification.

## 6. Test cases

**SHOULD trigger:** Beck, Levine, Levkov. 2010. “Big Bad Banks? The Winners and Losers from Bank Deregulation in the United States.” _J. Finance_ 65(5): 1637-1667. Paper uses DiD variation in treatment timing with TWFE by studying cross-state, cross-time variation in timing of branch deregulation, flagging check (a). It takes earlier-treated states (states which deregulated earlier) as controls against later-treated states, which is highly likely to affect the estimates weights, flagging check (b). The authors also acknowledge the effect on inequality grows for roughly eight years here deregulation, which is evidence or dynamic treatment effects, flagging check (c). The authors do not define the target estimand, and only label the coefficient as the effect of deregulation on inequality, not ATT or VWATT. Note, this does not mean their coefficient is necessarily incorrect, but it should flag check (d). The authors use time-varying covariates such as unemployment, but do not establish that they are unaffected by treatment, thus it should flag check (e) though requires further checking by the reviewer. Additionally, the causal finding is not robust under alternative estimators.

**Should NOT trigger:** Ariana, Pradiptyo, Afifah. 2026. ”Assessing the impact of public–private partnership adoption on regional economic growth in Asia.“ _International Economic Policy_ 23(49): 1-26. Flags for DiD with variation in treatment timing, but employs secondary-sensitivity approach, using estimators developed by Callaway and Sant’Anna to account for differences in adoption cohorts and avoiding biases associated with conventional TWFE. Reviewer should still inspect effectiveness of estimator, use of Goodman-Bacon’s R tool is suggested.
