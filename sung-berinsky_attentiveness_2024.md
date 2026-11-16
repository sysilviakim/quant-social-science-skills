# Measuring Attentiveness in Self-Administered Surveys

**Contributor:** Jihyun Sung

**Full citation:** Berinsky, Adam J., Alejandro Frydman, Michele F. Margolis, Michael W. Sances, and Diana Camilla Valerio. 2024. "Measuring Attentiveness in Self-Administered Surveys." *Public Opinion Quarterly* 88(1): 214–241. doi:10.1093/poq/nfae004.

## 1. What the paper establishes

Respondents to online self-administered surveys often answer without reading, and the detection literature is large, fragmented across disciplines, and inconsistent in terminology. This paper is a review rather than an empirical study: it catalogues direct measures (instructional manipulation checks, bogus items, instructed response items, factual and mock vignette checks) and indirect measures (response times, response-pattern indices, person-fit statistics), and argues that no single remedy exists. Its claims relevant to a reviewer are procedural — which instrument is used, where it sits, and what cutoff flags a respondent all determine who is classified as inattentive, and the handling decision that follows carries consequences for bias, power, and the estimand that must be reported rather than assumed.

## 2. Checks for a reviewer

**(a)** In a survey experiment that conditions on an attention measure, check whether the measure was administered before or after the treatment.

**(b)** If a paper excludes flagged respondents, check whether it also reports full-sample results and the demographic composition of both samples.

**(c)** For indirect measures with a researcher-chosen threshold, check whether the cutoff is justified and whether conclusions survive alternatives.

**(d)** When a paper drops inattentive respondents and its treatment mimics a stimulus people encounter inattentively in the world, check the direction of the resulting bias against the paper's claim. Dropping inflates the effect, so a large estimate warrants scrutiny while a null is comparatively robust to this mechanism.

**(e)** If respondents are flagged on response time, check whether the rule is one-sided.

## 3. Evidence

**For (a).** The review advises that in a survey experiment it may matter that the direct measure "comes before the treatment is administered to avoid the risk of posttreatment bias" (p. 223, citing Montgomery, Nyhan, and Torres 2018). It weighs this against the competing view that attention fluctuates, which would argue for placing the check near the treatment, and reports that Berinsky, Margolis, and Sances (2014) tested for such fluctuation and found none (p. 223). The main objection having itself been tested and rejected, the check is actionable rather than cautionary.

**For (b).** If researchers drop inattentive respondents they should "report results among both the full sample and the attentive sample" with their demographic compositions (p. 232); the same passage explains why, since inattention correlated with theoretically relevant demographics introduces sample bias. The review gives that correlation a direction — attentive respondents skew whiter, older, and more educated, differences it calls substantively small but relevant to external validity (p. 231) — so a reviewer can name the expected skew rather than gesture at one. The conclusion repeats the requirement and ties it to p-hacking risk (p. 235).

**For (c).** The review states the error in both directions: "If the cutoff is too restrictive, researchers inflate the number of inattentive respondents" by falsely flagging attentive ones, while a relaxed cutoff flags only extreme cases and artificially deflates measured inattention (p. 226). The cutoff is a researcher degree of freedom that determines the analysis sample, so an unjustified and untested threshold is a defect a reviewer can name specifically.

**For (d).** Working through a campaign-advertisement example, the review concludes that because many people exposed to political messaging do not attend to it, "removing inattentive respondents may result in inflated treatment effect estimates" (p. 233). The same passage supplies the boundary: where the treatment merely induces variation in something else, such as emotion, inattentive respondents contribute nothing and adjustment may be justified (p. 233). The direction of the bias is conditional on what the treatment is for, which is what keeps the check narrow.

**For (e).** The review states that "inattentive respondents may either complete the survey too fast or too slow" (p. 226, citing Read, Wolters, and Berinsky 2022), distinguishing speeding through without comprehending the questions from taking an extended time while attending to something other than the survey. Inattention therefore occupies both tails of the response-time distribution, and a one-sided rule is misspecified by construction rather than merely imprecise — which is why the same page says researchers must decide whether they are concerned about rushing respondents, distracted ones, or both (p. 226).

## 4. Scope

**(a) applies** only to survey experiments where the measure is used analytically — to subset, weight, control, or define subgroups. What matters is what the analysis conditions on, not what the questionnaire contains. It is silent for observational surveys, where there is nothing to be posttreatment to; silent when the check precedes randomization; and silent when a posttreatment check is reported only as a sample-quality descriptive and never enters estimation. It must stay silent for mock vignette checks, a design-based technique that attaches factual questions to an unrelated pre-treatment vignette precisely to escape posttreatment bias (Table 2, p. 221). Factual manipulation checks are the near-miss in the other direction: by construction they ask about the treatment's content, so they are posttreatment and the check should fire.

**(b) applies** whenever respondents are removed on attention grounds, in experiments and observational work alike. Not when nothing is dropped, and not when attention enters only as a covariate or declared moderator with the full sample analyzed, since the full-sample result is then already present. It stays silent when both samples are reported and the comparison is uneventful — the check is about the missing counterpart, not about whether dropping occurred.

**(c) applies** only to indirect measures requiring a chosen threshold: response-time cutoffs, LongString and other pattern indices, person-fit statistics, Mahalanobis outlier rules. It does **not** apply to direct measures with ex-ante correct answers, where no threshold exists. Two qualifications prevent overreach in either direction. It reappears for direct measures once several are aggregated into an index, because the passing score is then a researcher choice (p. 222, n. 3). And it must stay silent for model-based methods built to avoid researcher-defined cutoffs, which the review names on p. 226 — firing on a paper that adopted one precisely to escape an arbitrary cutoff is this check's worst failure mode.

**(d) applies** narrowly: the paper must drop inattentive respondents, the treatment must resemble a stimulus encountered inattentively outside the lab (advertisements, news, campaign messaging), and the estimand must be presented as generalizing to that exposure. It stays silent where the treatment induces an internal state rather than simulating real exposure, which the review carves out explicitly (p. 233), and where inattentive respondents are retained. A reviewer invoking it is arguing about the target estimand, not alleging a coding error.

**(e) applies** only where response time is the flagging instrument and the rule has a lower bound alone — the common "dropped respondents faster than X" formulation. It stays silent where both tails are trimmed, for response-pattern and direct measures, where the fast/slow asymmetry does not arise, and for the clustering and mixture approaches named on p. 226, which classify endogenously rather than by a one-sided rule and were developed partly for this reason.

The asymmetry with (c) keeps the two from collapsing into one: (c) asks whether a threshold was justified and tested, (e) whether the rule has the right shape. A paper can satisfy (c) with a sensitivity analysis across several speed cutoffs and still fail (e), because every cutoff it varied was one-sided.

**A general boundary** applies to all five. The review reports that most direct measures have little effect on respondent behavior and do not bias responses, threaten scale validity, or cause drop-off, and that Hauser and Schwarz (2016) confined the systematic-thinking concern to certain complex reasoning tasks (p. 233). An agent built from this paper should not object to attention checks as such; these checks concern what is done with the classification.

## 5. What failure looks like

The characteristic failure is one sentence in a data section or footnote: respondents who failed an attention check were excluded, with a resulting N, and nothing more. No full-sample results anywhere in the paper or appendix, no demographic comparison of retained and excluded groups, and for an indirect measure a threshold given as a bare number with no justification and no alternative tried. In a survey experiment the added tell is a questionnaire appendix showing the attention item after the vignette alongside a main table restricted to attentive respondents — the exclusion and the ordering sit in different parts of the manuscript, so neither looks remarkable alone. A further signature is a robustness appendix that varies specification in every column while holding the attention screen fixed.

## 6. Test cases

**SHOULD trigger (check a).** Kane, John V., and Jason Barabas. 2019. "No Harm in Checking: Using Factual Manipulation Checks to Assess Attentiveness in Experiments." *American Journal of Political Science* 63(1): 234–249. Factual manipulation checks are posttreatment by construction — the paper defines them as checks that "appear posttreatment of the survey" while carrying correct answers (p. 236) — and the authors re-run every study among manipulation-check passers only (n. 17, p. 247; Appendix F). The check fires on that analysis, and should then report that the paper satisfies it: footnote 4 (p. 237) names the posttreatment-bias concern, citing Montgomery, Nyhan, and Torres, and the passer-only results are a secondary robustness check, not the headline estimates. A check firing and the manuscript answering it is the agent working correctly, not a defect found.

**Should NOT trigger (check a).** Kane, John V., Yamil R. Velez, and Jason Barabas. 2023. "Analyze the Attentive and Bypass Bias: Mock Vignette Checks in Survey Experiments." *Political Science Research and Methods* 11(2): 293–310. The sharpest available near-miss: these studies do contain a posttreatment FMC, placed after the outcome measure (Figure 1, p. 298), so an agent matching on the mere presence of a posttreatment attention measure will fire. But the analysis conditions on the mock vignette check, which precedes randomization — the authors explain that appearing prior to randomization is what "bypasses the problem of post-treatment bias" (p. 294). The check asks what the analysis conditions on, not what the questionnaire contains. Firing here flags the solution as the problem.
