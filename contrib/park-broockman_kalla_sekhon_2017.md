# The Design of Field Experiments With Survey Outcomes

**Contributor:** Yejin Park

**Full citation:** Broockman, David E., Joshua L. Kalla, and Jasjeet S. Sekhon. 2017. "The Design of Field Experiments With Survey Outcomes: A Framework for Selecting More Efficient, Robust, and Ethical Designs." Political Analysis 25 (4): 435–64. doi:10.1017/pan.2017.27.

## 1. What the paper establishes

The paper argues that field experiments with survey outcomes can be made far cheaper and more robust by combining four practices that are uncommon in this literature: online surveys recruited from a defined sampling frame, a baseline wave, an index of multiple outcome items, and, when possible, a placebo control (pp. 436, 460). The problem is that these experiments (a real-world mechanism delivers the treatment, and a survey measures the outcome) are costly and fragile because few assigned subjects end up both treated and surveyed (pp. 441–442). The practices interact in a non-additive way, so using at least two together can sharply cut costs (p. 436). In the paper's door-to-door example, variable costs fall by about 98 percent, from over \$1,000,000 to about \$20,000 (pp. 436–437). The paper also gives the cost of each combination (Table 4, p. 451) and shows that using all four is not always optimal (p. 453).

## 2. Checks for a reviewer

**(a) Check whether a field experiment with survey outcomes reports how many assigned subjects were actually treated, and whether its sample size or power calculation accounts for that rate.** If the contact rate is observable but missing, ask for it. Then check whether the main estimate is the intent-to-treat effect or the effect among those treated, and which of the two the power calculation targets.

**(b) Check whether the paper tests for differential attrition, that is, whether the treatment changed who answered the follow-up survey.** Look for a pre-treatment outcome measure or covariates used to compare responders between the treatment and control groups. If the paper has no pre-treatment data, it cannot persuasively evaluate this assumption, so the reviewer should treat the conclusions as conditional on it.

**(c) If the paper uses a placebo contact to identify compliers, check whether compliance was recorded before subjects learned which conversation they would receive, and whether baseline outcomes are compared between compliers in the treatment and placebo groups.** A failed placebo makes the comparison between compliers invalid, and the baseline comparison is the available way to detect that.

**(d) Check whether the paper interprets its estimate as an effect on the whole target population when the estimate covers only subjects who were both treated and surveyed.** Look for the estimand being named and for some evidence on how the complier-reporters differ from the target population.

**(e) If the paper uses a baseline and repeated follow-up surveys on the same topic, check whether it addresses the effects of being surveyed (for example, heightened attention or remembered answers), and whether it treats a single null result as proof that these effects are absent.** A second-best option is a refreshment sample or randomly staggered interview times.

## 3. Evidence

**For (a).** "The budgetary implications of failure to treat are especially unfavorable in field experiments with survey outcomes because it increases both the number of subjects one must treat and the number of subjects one must survey" (p. 441). The paper's worked example: "A 5 percentage point effect among those contacted would manifest as an overall difference of 5 × 0.20 = 1 percentage point between the entire treatment and control groups" (p. 441), which requires about 80,000 survey responses. The variance formula carries the contact rate in the denominator, "where N is the number of subjects randomly assigned, and A is the application or contact rate" (p. 444, Equation 4), so a low contact rate inflates the required sample size.

**For (b).** "Differential attrition arises when the treatment influences survey response rates, leading the surveyed treatment and control groups to differ in expectation even if the treatment has no effect" (p. 442, citing Gerber and Green 2012, chap. 7). Without prognostic covariates, "lacking prognostic covariates makes differential attrition difficult to detect" (p. 442). The baseline survey is the paper's remedy: "A baseline survey can also help researchers detect or attempt to adjust for differential survey attrition or improper implementation of a placebo" (p. 449).

**For (c).** In its own application, the paper records compliance before the content is revealed: "Regardless of condition, they first identified subjects and marked them as compliers. Canvassers then delivered the treatment corresponding to the subject's random assignment" (p. 458). It also says why the baseline matters here: "if a placebo is used, the baseline survey also makes the placebo design less risky to implement because it helps one detect if compliers in each condition differ on baseline outcomes" (p. 449, n. 7).

**For (d).** "As with all field experiments with survey outcomes and non-compliance, both estimates are local to compliers who complete surveys" (p. 443). The conclusion states the limit directly: "all experiments with survey outcomes only estimate effects for individuals who both receive the treatment (compliers) and agree to be surveyed (reporters)" (p. 460), and "the empirical representativeness of compliers under this design is a clear question for future research" (p. 460).

**For (e).** "baseline surveys may have unintended effects that produce bias or reduce external validity" (p. 460). For repeated waves: "Answering multiple follow-up surveys after a treatment may also produce biased estimates of treatment effects' persistence over time if subjects remember how they answered particular questions in a previous survey wave" (p. 460), and "Refreshment samples or randomly staggered interview times could help address this possibility" (p. 460). The paper's only evidence on demand effects is one study: it used a baseline and two follow-up surveys on the same topic and still found a precise null, which the authors call "encouraging for the validity of studies using these practices that find non-null results" (p. 459). Yet they list the effects of baseline surveys as an open question (p. 460), so one null does not settle the issue.

## 4. Scope

**Applies to:** experiments "where outcomes are measured by surveys but randomized treatments are delivered by a separate mechanism in the real world" (p. 459), such as door-to-door canvasses, mailers, phone calls, or online ads. Within this setting:

- Check (a) applies when some assigned subjects are not treated.
- Check (b) applies when outcomes come from a survey with nonresponse.
- Check (c) applies only when a placebo contact is used.
- Check (d) applies when the estimate is interpreted for a wider population.
- Check (e) applies only when the design has a baseline or several follow-up waves.

**Does not apply to:** experiments whose treatment is delivered inside the survey itself, because they fall outside the paper's definition of the setting (p. 459). Check (c) stays silent when compliance cannot be observed. The paper's mail example says "one cannot easily observe whether a person opens a piece of physical mail, so a placebo could not be used" (p. 451), and it gives separate formulas for that case (Table 4b, p. 451).

**Does not apply to:** a manuscript that uses fewer than four practices. The paper says "using all four practices we study would not be the most efficient option" in some settings (p. 453) and "all four of the practices we study will not be optimal in all these settings" (p. 442). A reviewer should flag the specific weakness above, not the absence of the practices. Its cost figures are also illustrative: "these parameters are examples only and could vary dramatically in different settings" (p. 444), and they count variable costs only (p. 444).

**Stays silent when:** the paper already names its estimand as the effect among compliers who answered (check (d)), as the paper itself does (the CACE and its limit to compliers who complete surveys, both on p. 443).

**Partial application:** online panels recruited from a defined frame. The paper compares respondents with the frame only on observable characteristics, in one national U.S. sample, and finds online respondents "somewhat more educated, active, and informed" (p. 457). It adds that representativeness "is likely to vary across settings" (p. 457). A reviewer should raise the representativeness concern but not claim that the U.S. comparison carries over. The framework's formulas also assume 50 percent allocation, a constant treatment effect, and no treated subjects in the control group (pp. 443–444), so outside those assumptions the cost calculations are approximations.

## 5. What failure looks like

A manuscript reports a door-to-door canvassing experiment whose outcome is a single phone survey fielded some weeks later. It randomizes households and reports the difference in survey answers between all households assigned to treatment and all assigned to control, then describes the result as "the effect of canvassing on voters." The text never says what share of assigned households opened the door. The survey response rate is under 10 percent and appears as one number, with no breakdown by group, and no pre-treatment survey exists. The authors state that attrition was "balanced" without any test. If the design includes a placebo, the manuscript does not say when compliance was recorded. If the design includes a baseline and several follow-ups, the authors point to one null result as proof that being surveyed did not change answers.

## 6. Test cases

**SHOULD trigger:** Cardy, Emily Arthur. 2005. "An Experimental Field Study of the GOTV and Persuasion Effects of Partisan Direct Mail and Phone Calls." *The ANNALS of the American Academy of Political and Social Science* 601 (1): 28–40. The study randomly assigned 9,980 registered Democrats to mail, phone, both, or no contact (p. 32) and measures persuasion with one postelection survey of about 300 people per group, 1,483 in all (pp. 33, 35). Contact rates were unavailable and "thought to be approximately 50 percent" (p. 35), with no power calculation, so check (a) applies. The paper reports no response rate and no comparison of responders across groups, and it has no baseline measure of vote choice (its pre-campaign identification calls, p. 31, were used to target and stratify, not to check who answered), so check (b) applies. It concludes that mail and phone have "neither significant GOTV effects nor persuasion effects" (p. 29) from one primary among a selected sample of pro-choice voters (p. 31), so check (d) applies. With no placebo and no baseline or repeated outcome surveys, checks (c) and (e) should stay silent.

**Should NOT trigger:** Gerber, Alan S., and Donald P. Green. 2000. "The Effects of Canvassing, Telephone Calls, and Direct Mail on Voter Turnout: A Field Experiment." *American Political Science Review* 94 (3): 653–63. This is a near-miss: it is a voter-contact field experiment of the same family as Cardy (2005), and it handles failed contact with an instrumental-variables estimate (p. 659), so an agent that reacts to the word "canvassing" would flag it. But the outcome is not a survey. The sample was "29,380 individuals (22,077 households), whose participation in the 1998 election could be determined from public records" (p. 655), and "Since the study used public documents to measure voter turnout, none of the experiment relied on self-reports" (p. 661). The setting in which the checks apply is one where "outcomes are measured by surveys" (Broockman, Kalla, and Sekhon, p. 459), so none of checks (a) through (e) applies.
