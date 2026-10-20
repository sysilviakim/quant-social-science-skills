# The Generalizability of Survey Experiments

**Full citation:** Mullinix, Kevin J., Thomas J. Leeper, James N. Druckman, and Jeremy Freese. 2015. "The Generalizability of Survey Experiments." *Journal of Experimental Political Science* 2(2): 109-138. https://doi.org/10.1017/XPS.2015.19.

**Contributor:** Nahyeon Lee

---

## 1. What the paper establishes

Whether an experimental result travels beyond its sample depends on whether treatment effects vary across people or settings, and whether the sample and target differ on characteristics related to that variation (pp. 123-124). In two comparisons, many treatment effects were similar across convenience and population-based samples, but the authors caution that these results do not make convenience samples substitutes for population samples or establish generalizability on their own (pp. 116-123).

## 2. Checks for a reviewer

**(a) Identify the population a paper wants to describe.** When a study uses a convenience sample, check whether its claims stay with that sample or extend to a wider population. For a wider claim, ask what evidence supports the step from sample to target; demographic resemblance or post-survey weighting alone is not enough.

**(b) For a convenience or other nonprobability sample used to make a population claim, check whether treatment effects could differ between the sample and its target.** Look for a reason to expect effect heterogeneity, and check whether the study measures the relevant moderators and covers the target’s combinations of those characteristics. If the authors adjust or reweight, ask whether those data support the adjustment; weighting on demographics cannot address an unmeasured moderator related to participation.

**(c) When a paper uses a cross-sample comparison as evidence of generalizability, compare the effects directly and check whether the studies were comparable.** Look for a treatment-by-sample contrast with uncertainty, rather than an inference from one estimate being significant and another not. Check whether treatment wording, outcome, mode, timing, and implementation differed in ways that could also explain the contrast.

## 3. Evidence

**For (a).** The authors say that the relationship between a convenience sample and the target population is **"unknown and typically unknowable"** (p. 123). They explain that matching or reweighting demographics cannot rule out unmeasured differences or mismatches in joint distributions (p. 123). A reviewer should therefore look for a defined target and a reason the sample can support claims about it.

**For (b).** The discussion identifies **"treatment effect heterogeneity"** as the key issue when subgroup composition differs across samples (p. 123). Matching marginal percentages can still leave a different **"joint distribution"** of characteristics (p. 123), while reweighting on observed moderators cannot solve bias from an unobserved moderator related to participation (p. 124). This supports checking the moderators and overlap relevant to the treatment effect, rather than treating demographic balance as proof of transportability.

**For (c).** The authors report that Study 1’s samples **"differ in more than just their composition"** because survey mode and compensation also varied (pp. 116-117). In Study 2, they directly estimate the **"difference in effect sizes between samples"** using a difference-in-differences approach (p. 121). These passages support checking both the statistical contrast and whether other design differences could account for it.

## 4. Scope

**(a) Applies to:** a paper that recruits a convenience sample and uses it to make a claim about people beyond those recruited, for example, when an MTurk experiment is described as evidence about the American public. **Does not apply to:** a paper that defines its target as the recruited participants and makes no wider claim. It should also stay quiet as a convenience-sample warning when the design uses a probability sample selected to represent the stated target. That does not settle other problems: nonresponse, coverage, or a target that has changed since the survey may still limit a population claim, but those require evidence about those specific problems (pp. 109-113, 117, 123-125).

This check concerns the treatment effect the study wants to carry to the target, not whether the sample reproduces every population percentage. A demographic mismatch matters for this paper’s argument only insofar as it signals a possible difference in treatment effects. Conversely, a close demographic match does not by itself establish that effects travel. The reviewer should identify both the estimand and target before deciding whether the claim exceeds the evidence (pp. 123-125).

**(b) Applies to:** a paper that uses a convenience or other nonprobability sample to make a population claim, especially when it relies on demographic similarity, post-stratification, or weighting as the justification. The relevant question is not whether the samples look different in general, but whether differences occur on characteristics that modify the treatment effect. If the treatment effect does not vary across the characteristics that differ, those sample differences need not change the estimate. If relevant moderators are measured and the study sample overlaps the target on their joint distribution, adjustment may help; the check should ask what the adjustment can establish, not reject weighting automatically (pp. 123-125). **Does not apply to:** papers with no transport claim to assess, or that use a probability sample drawn to represent the stated target. It should also stay quiet merely because marginal demographics differ, absent a reason those characteristics affect treatment effects.

The paper does not make a single adjustment method a requirement. A reviewer can ask whether the manuscript states which moderators motivate its adjustment, reports enough information to judge overlap, and avoids implying that weighting fixes factors it did not measure. Where the necessary moderator was not measured, a post hoc reweighting cannot recover its effect; that is a limitation to disclose, not a problem solved by balancing the observed margins (pp. 123-124). If the moderator is observed but some target profiles are absent from the study sample, the reviewer should also be cautious about extrapolation beyond the observed support (p. 124).

**(c) Applies to:** papers that use a replication, parallel survey, or comparison of samples to argue that an effect generalizes. Separate significance tests do not answer whether two effects differ; the reviewer should look for the direct contrast and its uncertainty. If treatment wording, outcomes, survey mode, timing, or implementation also change, the comparison may still be informative, but it cannot isolate sample composition as the source of a difference. **Does not apply to:** a manuscript that makes no cross-sample or generalizability claim, or that presents the studies as separate analyses rather than as evidence that one result travels to another population (pp. 116-117, 121).

The concern is clearest when the authors interpret a difference between estimates as evidence that the sample changed the effect. A direct sample contrast addresses whether the estimates differ; comparable treatment and outcome measures help explain what that difference means. Study 1 shows why both questions matter: the teams used typical procedures for each sample, so mode and compensation were part of the comparison rather than held fixed (pp. 116-117). Study 2 made the implementations more alike, but still compared newly run MTurk studies with previously fielded TESS studies (pp. 118, 121). A reviewer should not turn either comparison into a universal ranking of sample types.

These checks concern transport beyond a study sample, not whether random assignment identifies an effect within that sample. They are also not a rule that convenience samples are inherently invalid or that population samples guarantee valid conclusions. The authors find broadly similar estimates in their selected studies, but limit that evidence: Study 1 covers three framing issues and changes mode and compensation along with sample composition; Study 2 compares MTurk with previously implemented TESS experiments. The findings do not establish that all treatments, topics, platforms, or time periods will behave similarly (pp. 116-118, 123-125). The paper’s proposed response is theory about moderators and continued cross-sample replication, not a blanket verdict based on a sample label (pp. 124-125).

## 5. What failure looks like

A manuscript recruits MTurk respondents, then says its findings describe "the American public" because the sample resembles the public on age and gender. It reports weighted estimates but does not explain which characteristics could change the treatment effect, whether those characteristics were measured, or whether their combinations appear in both samples. Another visible failure is a claim that an effect generalizes because it is significant in one sample but not another, with no direct test of the difference. A comparison also overreaches if mode, wording, timing, or compensation changes alongside the sample and the authors attribute the contrast solely to sample composition (pp. 116-117, 121, 123-124).

## 6. Test cases

**SHOULD trigger:** Coppock, Alexander. 2019. "Generalizing from Survey Experiments Conducted on Mechanical Turk: A Replication Approach." *Political Science Research and Methods* 7(3): 613-628. https://doi.org/10.1017/psrm.2018.10. The article compares MTurk experiments with national-sample studies and tests treatment-effect heterogeneity, so the checks about population claims and cross-sample comparisons should run (pp. 613-615, 619-623); this does not imply that Coppock’s analysis fails them.

**Should NOT trigger:** Hainmueller, Jens, and Daniel J. Hopkins. 2015. "The Hidden American Immigration Consensus: A Conjoint Analysis of Attitudes toward Immigrants." *American Journal of Political Science* 59(3): 529-548. https://doi.org/10.1111/ajps.12138. The authors use a two-wave, nationally representative Knowledge Networks panel recruited through random-digit dialing or address-based sampling, with known selection probabilities and post-stratification weights (p. 535). The convenience-sample checks (a) and (b) should stay silent; the article makes no cross-sample comparison for check (c).
