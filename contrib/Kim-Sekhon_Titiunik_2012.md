# Natural Experiment Suitability

**Contributor:** ksmin301

**Full citation:** Sekhon, Jasjeet S., and Rocío Titiunik. 2012. “When Natural Experiments Are Neither Natural nor Experiments.” American Political Science Review 106(1): 35–57. doi:10.1017/S0003055411000542.

---  
  
## 1. What the paper establishes

Natural experiments differ from randomized experiments in two ways: (i) the researcher does not control the assignment and (ii) the treatment and control groups are constructed post hoc, so their comparability is guaranteed only if both took part in the randomization. Assuming that the intervention is random, the authors ask (1) whether a proposed comparison is guaranteed to be valid by that randomization, (2) if not, which comparison is, and (3) whether that valid comparison estimates the causal effect of interest. Applying this to four political science designs, they show that the additional assumptions required are rarely stated, often implausible, and that dropping them in reanalysis can weaken published findings.

## 2. Checks for a reviewer

**(a) Identify the pool of units that took part in the randomization.** Check whether the treatment and control groups are chosen from the pool. If any group is not, the paper must state and defend the assumption that the groups are comparable.

**(b) Even when the comparison is within the pool, check whether the compared groups are situated in different environments after the treatment.** While valid, such a design may answer a different question from the research question. For before-after comparisons of the same units, check whether the stability assumption is stated.

**(c) Check every sample restriction against the timing of assignment.** Restrictions on variables fixed before the assignment do not threaten internal validity; restrictions on variables the assignment may have affected require additional assumptions. If a selection mechanism is plausible, check whether the paper discusses the direction of the resulting bias.

**(d) If the same units are assigned multiple times, check whether the analysis conditions on a later round’s assignment status.** If so, check whether the paper states that the assignments do not interact and reports the all-unit estimate next to the subset estimate.

**(e) When a single estimate pools several separate natural experiments, such as an RD pooling close elections across years, check whether it is interpreted as the average of the experiment-specific effects.** Check whether the paper reports the estimate or the number of treated and control units for each experiment.

## 3. Evidence

**For (a).** The paper claims that “the treatment and control groups constructed post hoc may not be comparable, even if one assumes that the natural intervention was randomly assigned” (p. 2). In the redistricting case, the original residents of the receiving district did not participate in the randomization, so it does not make their histories comparable to those of the newly joined voters (p. 3); the valid comparison is between the two groups that directly participated (p. 4). Likewise, sitting senators were not part of the randomization (p. 12).

**For (b).** Comparing moved voters with voters left behind is valid but not appropriate for estimating the effect of incumbency (p. 5), because the two groups then face different campaigns and candidates (pp. 4–5); Design 1 in the senators case has the same problem (p. 10). For Design 3, an over-time comparison of the moved House members, “[t]his stability assumption is not guaranteed by randomization” (p. 12).

**For (c).** On restricting the redistricting sample to homogeneous moves, the authors warn that “because these characteristics are likely to have been affected by redistricting itself, we run the risk of introducing bias in the results” (p. 5). In the RD tenure case, randomization does not “justify dropping open seats at t and t + 1 from the analysis”; since 20% of barely winning incumbents retire while no barely winning challengers do, the stronger incumbents remain and Butler’s estimates are larger than they should be (p. 18).

**For (d).** In the Indian quota case, the independence of the two assignment rounds “does not imply that the effects of the two treatments do not interact with each other” (p. 13). Restricting to wards open in 2002 estimates the effect of the 1997 reservations among those wards, not the effect in a world where no wards were reserved in 2002 (pp. 13–15). Whether to subset cannot be decided without an assumption about the interaction (p. 15), so check (d) does not predict a direction for the bias. The authors recommend that researchers “[u]se all of the data and explicitly state that the experimental results are conditional on having reservations in 1992 and 2002” (p. 17).

**For (e).** A pooled RD estimate “may fail to be representative of any particular election” (p. 18). It is guaranteed to equal the average of the election-specific effects if each election has the same numbers of bare winners and bare losers, which randomization does not guarantee and which vary a lot in House elections (p. 19). Because the Appendix proof (p. 22) relies only on unequal treated and control counts, the same logic extends to other pooled designs.

## 4. Scope

**Applies to:** natural-experiment studies that treat an intervention as random or as-if random when the intervention was not designed by the researcher, and that then define comparison groups after the fact.

(a) is applied to any such paper. It stays silent when both groups come from the assigned pool (p. 4).

(b) is applied to papers where assignment places the compared groups in different environments, or that compare the same units before and after they move. It stays silent when that difference is itself the estimand, such as voters’ reaction to a change in their incumbent’s race or ethnicity (p. 5, n. 2).

(c) is applied to papers that restrict samples. It stays silent on restrictions based on variables fixed before assignment, such as dropping seats already open at t (p. 18). If the restriction is based on a later assignment randomized independently of the first, the case goes to (d) instead (pp. 13–15); if the later assignment depends on the first, (c) still applies.

(d) is applied where the same units go through two or more rounds of assignment. It stays silent with a single round, or when the paper uses all units and states that its results are conditional on the other rounds (p. 17).

(e) is applied where a single estimate pools several separate natural experiments. It stays silent on a single-election RD, where the two groups are comparable under the assumed randomization (p. 19). The paper’s evidence covers pooled close-election RD; other pooled designs are an extension.

**Does not replace:** as-if randomness check. The framework assumes that the intervention is random (p. 2), so it diagnoses the problems that remain even in the best-case scenario (p. 6). Whether the intervention is really random must be checked separately, as the first step in analyzing a natural experiment (p. 6); the agent should not confuse the two.

**Does not replace:** design sensitivity analysis (Rosenbaum 2004, 2010), which the framework complements but comes before (p. 20).

**Does not apply to:** researcher-designed randomized controlled experiments, where the problem rarely arises because researchers design the randomization in advance (p. 19).

## 5. What failure looks like

The research design section explains that the intervention is as-if random, but the results table compares groups, at least one of which did not take part in the randomization, typically a group (A) that has newly joined group (B) against the original members of (B).

Other recognizable signatures:
  
- two groups from the same randomization, compared after they end up in different environments
- a sample restricted on something that happened after the assignment, with no stated assumption
- a subset estimate defined by a later round of assignment, without an all-unit estimate
- a single estimate pooled across separate experiments, without per-experiment estimates or counts
- an over-time comparison of units moved by the intervention, without the stability assumption

## 6. Test cases

**SHOULD trigger:** Eggers, Andrew C., and Jens Hainmueller. 2009. “MPs for Sale? Returns to Office in Postwar British Politics.” American Political Science Review 103(4): 513–533. doi:10.1017/S0003055409990190.

This study pools close winners and close losers from seven general elections between 1950 and 1970 into one RD estimate per party (Table 4, p. 524), with neither election-specific estimates nor the number of bare winners and bare losers in each election, so (e) does not pass. (c) is also applied but passed; winners are classified by their first winning race and losers by their best losing race (p. 523, n. 25), but the authors defend this with balance tests (Table 6, p. 527). Despite this, the reviewer should ask for the required assumption rather than assert bias.

**Should NOT trigger:** Erikson, Robert S., and Laura Stoker. 2011. “Caught in the Draft: The Effects of Vietnam Draft Lottery Status on Political Attitudes.” American Political Science Review 105(2): 221–237. doi:10.1017/S0003055411000141.

Near-miss: the paper presents itself as a natural experiment with a highly restricted sample, so an agent may apply (c). However it compares men with low and high numbers from a single lottery for men born 1944–1950 (p. 222, n. 3), so (a) and (d) is applied but passed.
Its restrictions use pre-lottery information: “college bound” was defined from 1965, and 1973 educational attainment was intentionally rejected for being endogenous (p. 225). The only post-lottery split by military service is acknowledged for self-selection and is defended with a sensitivity analysis and TSLS (pp. 228–229).
