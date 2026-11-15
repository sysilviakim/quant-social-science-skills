# Elements of External Validity: Framework, Design, and Analysis

**Full citation:** Egami, Naoki, and Erin Hartman. 2023. "Elements of External Validity: Framework, Design, and Analysis." *American Political Science Review* 117 (3): 1070–1088. doi:10.1017/S0003055422000880. Page numbers refer to the published journal version.

**Contributor:** Hoik Jung

## 1. What the paper establishes

The paper breaks external validity into four questions. They concern populations (X), treatments (T), outcomes (Y), and contexts (C). Each has its own explicit causal assumption. The paper also separates two goals. Generalizing the magnitude of an effect requires strong assumptions. It uses weighting, outcome-model, or doubly robust estimators of a target-population effect, the T-PATE. Generalizing the sign requires only a weaker "range" assumption. It uses a partial conjunction test over deliberately varied outcomes, treatments, samples, or sites.

## 2. Checks for a reviewer

**(a) Check whether the manuscript specifies the target population, treatment, outcome, and context.** Look at the sentence where it generalizes beyond its data.

**(b) Check whether the manuscript reports a target-population estimate next to the in-sample estimate, with its own standard error.** Check also whether it argues that the adjustment covariates account for both selection and effect heterogeneity. Do this when an effect size from a non-probability or self-selected sample is used to speak about a larger population, as in cost-effectiveness or scaling-up claims.

**(c) Check whether the manuscript names the context-level moderators it relies on.** Check whether it argues that context operates only through them, and whether it shows that treatment does not affect them. Do this when an effect is carried to a context or period with no data.

**(d) Check whether the manuscript treats the estimated magnitude as the magnitude for the target.**Do this when the measured outcome or delivered treatment differs from the one the conclusions are about. Examples are stated intention versus behavior and short-run versus long-run. No statistical fix exists after fieldwork, so the right request is a narrower claim. A second-best exists for completed studies. The manuscript can limit its claim to direction and run the sign-generalization test on existing outcome or treatment variation. That supports a sign claim under the range assumption. It does not recover the target effect size.

**(e) Check whether the manuscript explains why the target effect should lie between the smallest and largest effects measured.** Check whether it reports partial conjunction p-values for all thresholds instead of counting significant coefficients. Do this when an effect is claimed to be "consistent across" outcomes, treatment versions, subgroups, or sites. The check is directional. If every measured outcome is easier to move than the target, the target effect may lie below the whole range. Uniform significance then overstates the support.

## 3. Evidence

**For (a).** "[B]oth analysts and evaluators should clarify the targets against which they evaluate experiments" (p. 1073). The preceding sentence gives the reason: "no experiment is universally externally valid" (p. 1073).

**For (b).** "[W]e recommend estimating the T-PATE formally and comparing it against the SATE estimate" (p. 1083). The covariate requirement comes from the underlying assumption. "The required assumption is violated when unobserved variables affect both sampling and treatment effect heterogeneity" (p. 1073). The standard-error requirement comes from the authors' reanalysis. There the point estimates are similar, but the cost–benefit analysis for the target population is more uncertain (p. 1083).

**For (c).** "[T]here is no general randomization design that makes Assumption 4 true" (p. 1075). Assumption 4 says that context affects outcomes only through the measured moderators. No design guarantees it, so the reviewer must look for a substantive argument, as with an exclusion restriction. The same page says the moderators cannot be affected by treatment.

**For (d).** "[T]here is no general approach to conducting effect-generalization for T- and Y-validity without making stringent assumptions" (p. 1080). A validated measure is not a defense, because "construct validity does not imply Y-validity" (p. 1074). The second-best follows the authors' own framing. They call sign-generalization a "practical compromise" when effect-generalization is not feasible (p. 1080).

**For (e).** "[W]ithout additional assumptions, the purposive variations are inherently local" (p. 1080). Consistency within the experiment says nothing about the target unless the range assumption is argued. The direction comes from the authors' example of a violation. Suppose the target is a real-world high-risk dissent behavior. If the effect on it is much smaller than the effects on the outcomes studied, the range assumption fails (p. 1081). On reporting, researchers "do not need to specify the threshold r" (p. 1082). They should report every threshold.

## 4. Scope

**Applies to:** manuscripts that estimate a causal effect and then speak about units, interventions, outcomes, or settings outside the data. Check (a) applies to any such manuscript. Check (b) needs three conditions. The claim is about magnitude. The sample is not a probability sample of the target. Sample and target differ on plausible effect moderators. Check (c) applies only when the variable separating study setting from target setting does not vary within the data. Check (d) applies only when the target outcome or treatment was not measured or delivered and the manuscript interprets magnitudes. Check (e) applies only when multiple estimates are presented as versions of one target quantity.

**Does not apply to:** a study whose units are the target. An example is an experiment on one full legislature that draws conclusions about that legislature. The checks also do not apply to a manuscript that states scope conditions and stays within them. Check (a) should not ask a theory-testing paper for a concrete population. The authors allow targets there to be "abstract theoretical concepts" (p. 1073).

**(b) does not apply to:** an experiment on a probability sample of the stated population, where no weights are needed (p. 1073). It also stays silent when the manuscript shows little effect heterogeneity. With homogeneous effects, "no adjustment is required" (p. 1073). It stays silent as well when the manuscript claims only a direction. That case belongs to (e).

**(c) does not apply to:** differences that vary within the data. This is the sharpest boundary in the paper: "if the variable has some variation, it is an X-validity problem, and it is a C-validity problem otherwise" (p. 1075). A statewide experiment with safe and competitive districts, generalized to a state with a different mix, is a reweighting problem under (b).

**(d) does not apply to:** studies that measure the target outcome directly. Turnout experiments using administrative records are the authors' example (p. 1074). It also stays silent when hypotheses are stated only as signs.

**(e) does not apply to:** a manuscript with one pre-specified primary outcome that is itself the target. It also stays silent when multiple outcomes test different hypotheses instead of standing in for one unobserved target. That second boundary is my reading of the setup on p. 1081. The check should not penalize a manuscript whose estimates are all individually significant. The authors call that a valid test "without additional multiple testing corrections" (p. 1081).

**Limits the authors state:** if the target effect is outside the measured range, "no external validity analysis is possible without using extrapolation" (p. 1081). Check (e) should then ask for an acknowledgement, not the test. They also write that "it is not always possible to empirically address all relevant dimensions" (p. 1086). They ask only that a manuscript say which dimension it cannot address and why. An agent that demands all four analyses of every manuscript is overreaching.

## 5. What failure looks like

The manuscript presents an in-sample effect. It then speaks about somewhere or someone else without specifying the target. One version is a cost-per-outcome figure built on a coefficient from an opt-in panel. It has no weighted estimate and uses one confidence interval for both sample and population. Another is a single-country estimate applied to other countries because individual demographics look similar. A third is an abstract saying the intervention changes behavior by X points when the outcome table holds only stated intentions. A fourth is a coefficient plot with the sentence "positive and significant in 8 of 12." It gives no reasoning about where the target sits and no partial conjunction p-values.

## 6. Test cases

**SHOULD trigger:** Margalit, Yotam, and Moses Shayo. 2021. "How Markets Shape Values and Political Preferences: A Field Experiment." *American Journal of Political Science* 65 (2): 473–492. The study randomly exposes a national sample in England to six weeks of financial market participation. Its broader interpretation concerns the political consequences of market participation in general (pp. 473–475). The treatment is one specific, short-term form of exposure. The experiment also ran during unusually high Brexit-related volatility, and the authors note that replication in other settings is needed (p. 475). Checks (a), (c), and (d) should run.

**Should NOT trigger (d):** Butler, Daniel M., and David W. Nickerson. 2011. "Can Learning Constituency Opinion Affect How Legislators Vote? Results from a Field Experiment." *Quarterly Journal of Political Science* 6 (1): 55–83. This is a near-miss. A careless agent may flag any field experiment for treatment and outcome realism. Here New Mexico legislators were randomly given actual district-level opinion data. The outcome is their recorded vote. Treatment and outcome are therefore the substantive ones. Checks (b) and (c) become relevant only if a reader generalizes beyond the New Mexico legislature.
