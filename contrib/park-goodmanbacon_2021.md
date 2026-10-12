# Difference-in-Differences with Variation in Treatment Timing

**Contributor:** Yejin Park

**Full citation:** Goodman-Bacon, Andrew. 2021. "Difference-in-Differences with Variation in Treatment Timing." Journal of Econometrics 225 (2): 254–77.

## 1. What the paper establishes

This paper cautions against using the two-way fixed effects (TWFE) DD estimator when treatment timing varies across units, for two reasons: (1) the TWFE DD coefficient is an average of 2x2 DD comparisons that weights them unequally by treatment timing; and (2) some of those comparisons use units that were already treated as the control group, so the treated/untreated difference can partly reflect the control group's own changing treatment effect rather than the effect of interest. The paper shows both problems through what it calls the DD decomposition, which breaks the TWFE coefficient into each 2x2 comparison and its weight.

The paper's solution is diagnostic: plot each 2x2 comparison against its weight to see which comparisons drive the estimate and which are biased. In its replication of Stevenson and Wolfers (2006), this shows that the TWFE estimate is only about 60 percent of the average event-study effect (p. 266).

## 2. Checks for a reviewer

**(a) If a paper uses TWFE DD with staggered adoption (units are treated at different times and stay treated), check whether it shows which comparisons its estimate comes from.** If the DD decomposition is missing, ask the authors to report it. Then check (1) how much weight each type of comparison gets (treated versus never-treated, earlier- versus not-yet-treated, and later- versus already-treated units), and (2) whether a few comparisons account for most of the estimate.

**(b) Check whether units treated *during* the sample period serve as the control group while their treatment effects are still changing.** If the event study shows that treatment effects grow after treatment, the coefficient is pulled toward zero and can even flip sign, so a small or null estimate may hide a real, growing effect. This is not a flaw in the research design; ask for an estimator that does not use already-treated units as the control group. If the authors do not re-estimate, a second-best option is to drop these comparisons from the decomposition; this removes their bias but not the problems in checks (c) and (d).

**(c) Check whether units treated *before* the sample period serve as the control group while their treatment effects are still changing.** Unlike the units in check (b), these units serve as the control group in every period, so they receive large weight. Check whether the paper argues that their treatment effects had already stabilized before the sample period; if not, ask for results without these units.

**(d) Check whether the paper interprets the TWFE coefficient as the average treatment effect when treatment effects differ *across groups*, even if they do not change over time.** The coefficient leans toward the effects of groups treated near the middle of the sample period. To judge the direction, check (1) whether the units treated first are likely to have larger effects, and (2) whether treatment happens mostly early or late in the sample period.

**(e) Check whether the paper reads a change in the estimate *across specifications* as evidence of bias.** The estimate can change because the specification changes which comparisons are used and how they are weighted. Dropping units whose treatment status never changes leaves only comparisons between units treated at different times, so the estimate can flip sign. Adding controls that change over time creates new comparisons between units treated at the same time. Ask the authors to separate the part due to the 2x2 comparisons from the part due to their weights.

## 3. Evidence

**For (a).** Half of the 93 DD papers the author surveyed in five journals from 2014–2015 had variation in treatment timing (p. 255, n. 4), yet "we know relatively little about the two-way fixed effects DD when treatment timing varies" (p. 255). Theorem 1 shows that the TWFE estimate "is a weighted average of all possible two-by-two DD estimators" (pp. 257–258). Without the decomposition, readers cannot see which comparisons produce the estimate.

**For (b).** Units treated earlier in the sample period "can serve as controls even though they are treated because treatment status does not change" (p. 257). When their treatment effects are still changing, TWFE "yields estimates that are too small or even wrong-signed, and should not be used to judge the meaning or plausibility of effect sizes" (p. 262). This "does not mean that the research design is invalid," and other estimators "may be more appropriate" (p. 261). As a second-best check, dropping these comparisons "yields an effect of −5.44" (p. 266), close to the event-study average.

**For (c).** Units treated before the sample period "can only ever act as controls" (p. 261). Because their comparisons "use all time periods," "they get higher weight," and their changing effects "may dominate ∆ATT" (p. 261). Whether their effects had settled is an assumption the authors must defend: "If the effects for pre-1964 reform states had stabilized by 1969 they would not cause bias, but this is a particular version of the assumption that ∆ATT = 0" (p. 266, n. 25).

**For (d).** "The timing group treated closest to the middle of the panel gets more weight" (p. 260), so "VWATT does not equal the sample ATT" (p. 262). In the paper's example, where each group's effect is constant over time, the estimate is 11.75 instead of the simple average of 12.5 "because TWFEDD puts more weight on the early group which in this example has a smaller effect (10 versus 15)" (p. 259). If units with the largest effects are treated first, "regression DD underestimates the sample-weighted ATT if treatment rolls out in the first half of the sample and overestimates it if treatment rolls out in the second half" (p. 262).

**For (e).** "Much of the sensitivity across specifications comes from changes in weights, or a small number of 2x2 DD's, and need not indicate bias" (p. 256). Dropping the never-treated and pre-1964 reform states makes the estimate positive (2.42), and "The sign flip occurs because half of the timing terms are biased by time-varying treatment effects" (p. 267, n. 28). Adding controls that change over time "introduces a new source of identifying variation" (p. 270). The decomposition "shows the proportional contribution of changes in the 2x2 DD's, changes in the weights, and the interaction of the two" (p. 267).

## 4. Scope

**Applies to:** studies that estimate a single TWFE coefficient when treatment timing varies across units and units stay treated once treated (often called staggered adoption), the setting the decomposition assumes (p. 256). Within this setting:

- Check (a) applies to every such study.
- Check (b) applies when units treated *during* the sample period serve as the control group and the event study shows treatment effects that grow or fade.
- Check (c) applies only when some units were treated *before* the sample period.
- Check (d) applies when treatment effects may differ *across groups* and the paper reads the coefficient as the average treatment effect.
- Check (e) applies when the paper uses results *across specifications* to argue that its estimate is or is not biased. The part about controls applies only to controls that change over time, since controls that stay the same for each unit are absorbed by the unit fixed effects.

**Does not apply to:** studies where all treated units are treated at the same time (the standard 2x2 DD). Here, "under a common trends assumption, a two-group/two-period (2x2) DD identifies the average treatment effect on the treated" (p. 254): no already-treated units enter the control group and no weights depend on treatment timing. Raising these checks here is the most common false alarm.

**Does not apply to:** studies that already use an estimator that does not use already-treated units as the control group, such as Callaway and Sant'Anna (2020), Sun and Abraham (2020), or stacked DD (p. 261). Because the bias "is specific to a single-coefficient specification" (p. 263), check (b) should also stay silent when a study reports event-study coefficients without combining them into one number.

**Stays silent when:** the event study shows that treatment effects stay the same after treatment. Then "∆ATT equals zero" (p. 261), so check (b) stays silent, but check (d) can still apply if treatment effects differ across groups.

**Partial application:** studies where treatment turns off after units are treated, or where treatment is not binary. The paper only "briefly discusses treatment variables that turn off" (p. 272, n. 36), and its decomposition assumes a binary treatment (p. 256). A reviewer should flag the concern but should not claim that the paper's results apply unchanged.

## 5. What failure looks like

A study uses a state-year panel in which treatment timing varies across states and estimates a single TWFE coefficient on a treatment dummy with state and year fixed effects. It reports this coefficient as "the effect of the policy" while its event-study figure shows coefficients that keep growing after treatment. It reports no decomposition, and its sample includes states treated before the sample period. In a robustness table, dropping never-treated states flips the sign of the coefficient, and the authors read this as evidence that the estimate is fragile. No estimator that avoids using already-treated units as the control group appears.

## 6. Test cases

**SHOULD trigger:** Stevenson, Betsey, and Justin Wolfers. 2006. "Bargaining in the Shadow of the Law: Divorce Laws and Family Distress." *Quarterly Journal of Economics* 121(1): 267–288. Treatment timing varies across states, every regression includes state and year fixed effects, and the control group includes states treated before the 1964–1996 sample period (p. 273; Table I, p. 277; Goodman-Bacon, p. 265), so checks (a) and (c) apply. The suicide effects grow over time, yet the paper summarizes them as one number, an average effect of −9.7 percent (Table I, p. 277), which a single TWFE coefficient understates (Goodman-Bacon, p. 266), so check (b) applies. The homicide results use a single dummy read as a decline of around 10 percent (pp. 283–284), so check (d) applies. The authors also drop states that never changed their laws and read the result as support (p. 278), which check (e) addresses.

**Should NOT trigger:** Card, David, and Alan B. Krueger. 1994. "Minimum Wages and Employment: A Case Study of the Fast-Food Industry in New Jersey and Pennsylvania." *American Economic Review* 84(4): 772–793. This is a near-miss: it is one of the best-known DD studies, so an agent that reacts to the word "DD" alone would flag it. However, only New Jersey was treated, on a single date (April 1, 1992), and the authors survey restaurants in New Jersey and Pennsylvania once before and once after the treatment (pp. 772–773), regressing each store's change in employment on a New Jersey dummy (p. 779). With one treatment date, no already-treated units enter the control group and no weights depend on treatment timing, so none of the checks apply.
