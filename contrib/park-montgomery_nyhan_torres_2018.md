# Posttreatment Bias

**Full citation:** Montgomery, Jacob M., Brendan Nyhan, and Michelle Torres. 2018. "How Conditioning on Posttreatment Variables Can Ruin Your Experiment and What to Do about It." American Journal of Political Science 62 (3): 760–75. doi: https://doi.org/10.7910/DVN/EZSJ1S

**Contributor:** Jumyeong Park

---

## 1. What the paper establishes

Conditioning on posttreatment variables violates the independence assumption guaranteed by randomization and introduces posttreatment bias. Demonstrating that 46.7% of experimental studies published in political science journals (2012–2014) engage in these practices, the author shows that the discipline widely misunderstands or ignores this critical threat to causal inference. Using mathematical causal models and empirical reanalyses, the paper explains how posttreatment conditioning invalidates experimental findings and offers practical design- and analysis-based recommendations to prevent it.

## 2. Checks for a reviewer

**(a) Check whether the manuscript drops, subsets, or excludes observations based on criteria measured after treatment assignment.** This includes dropping respondents who failed posttreatment manipulation checks, attention screeners, compliance measures, or post-intervention behavioral choices.

**(b) Check whether statistical models include covariates measured posttreatment as controls.** This applies to regression models that control for potential mediators, intermediate participant responses, or post-manipulation behavioral outcomes in an attempt to prevent omitted variable bias or isolate direct effects.

## 3. Evidence

**For (a).** "Selecting a portion of the data based on posttreatment criteria will not allow us to generate an unbiased estimate of the treatment effect within an interesting subset of respondents. Instead, we will obtain a biased estimate among an endogenously selected group." (p. 766) Selecting or dropping observations using posttreatment measures creates an imbalance in unobserved confounders between treatment and control groups, biasing treatment effect estimates.

**For (b).** "Regardless of the intention, including posttreatment variables as covariates for any of these reasons can bias estimates by creating imbalance with respect to the unmeasured confounder." (p. 767) Controlling for posttreatment variables unblocks a non-causal path between the treatment and unmeasured confounders, breaking the unconfoundedness guaranteed by randomization.

## 4. Scope

**Applies to:** Experimental research designs (survey, lab, field, or lab-in-the-field experiments) where researchers analyze causal effects following treatment randomization. Check (a) applies whenever posttreatment criteria like manipulation checks, attention screeners, or compliance measures are used to filter, subset, or drop observations. Check (b) applies whenever posttreatment variables like potential mediators, intermediate participant choices, or post-manipulation survey responses are included as covariates or controls in statistical models.

**Does not apply to:**
1. **Pretreatment covariates and screeners:** Controlling for, subsetting by, or interacting with variables measured prior to treatment administration. Pretreatment covariate adjustment does not induce posttreatment bias and can improve statistical precision. (pp. 770–771)
2. **Posttreatment variables analyzed strictly as dependent outcomes:** Running a separate regression where an intermediate posttreatment variable is modeled as the outcome to test whether the treatment affected that variable does not condition on a posttreatment variable and is completely valid. (p. 772)
3. **Experimental designs that directly manipulate mediators:** Designs specifically constructed to identify mechanisms by directly manipulating both treatment and mediating variables rather than conditioning on observed posttreatment values in standard regressions. (p. 772)

## 5. What failure looks like

1. **For Check (a):** A sentence in the text, footnote, or sample description stating that respondents were dropped or excluded because they failed a manipulation check, attention screener, or comprehension test (e.g., "We restrict our main analysis to respondents who passed the manipulation check" or "Inattentive subjects were excluded after exposure").

2. **For Check (b):** A regression table where a post-manipulation variable like potential mediator, secondary attitude, or intermediate behavioral measure appears as a covariate alongside the treatment indicator.

## 6. Test cases

**SHOULD trigger:** Healy, Andrew, and Gabriel S. Lenz. 2014. "Substituting the End for the Whole: Why Voters Respond Primarily to the Election-Year Economy." American Journal of Political Science 58(1): 31–47. In their survey experiments, the authors drop participants who failed a test of attention to instructions administered during the experimental tasks, excluding about 10% of the sample before analysis (p. 37). Because this filtering relies on an instruction and attention measure collected in conjunction with the experimental manipulation, Check (a) should trigger to flag potential sample imbalance and posttreatment bias.

**Should NOT trigger:** Berinsky, Adam J., Michele F. Margolis, and Michael W. Sances. 2014. "Separating the Shirkers from the Workers? Making Sure Respondents Pay Attention on Self-Administered Surveys." American Journal of Political Science 58(3): 739–753. Although this study evaluates instructional manipulation checks (screeners), it explicitly directs researchers to place screener questions prior to treatment exposure to avoid posttreatment confounders (p. 744). Furthermore, the authors explicitly advise against dropping screener failers from the sample, recommending attention-stratified reporting instead (pp. 747–748). Because its design recommendations strictly adhere to pretreatment placement and preserve the full sample, Checks (a) and (b) should not trigger.
