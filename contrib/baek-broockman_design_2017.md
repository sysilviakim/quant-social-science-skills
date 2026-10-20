# The Design of Field Experiments with Survey Outcomes

**Full citation:** Broockman, David E., Joshua L. Kalla, and Jasjeet S. Sekhon. 2017. "The Design of Field Experiments with Survey Outcomes: A Framework for Selecting More Efficient, Robust, and Ethical Designs." *Political Analysis* 25 (4): 435–64. [doi:10.1017/pan.2017.27](https://doi.org/10.1017/pan.2017.27)

**Contributor:** Eojin Baek

---

## 1. What the paper establishes

Field experiments with survey outcomes are often very expensive because few assigned subjects are contacted and few answer the follow-up survey. Broockman, Kalla, and Sekhon show that four practices can complement one another: a defined-frame online panel, a pretreatment baseline wave, a multi-item outcome index, and a placebo where contact is observable (pp. 435–437). Their cost formulas (Table 4, p. 451) show that the cheapest mix depends on local inputs such as contact rates and survey costs (pp. 444, 453).

## 2. Checks for a reviewer

**(a) Cost-justified omissions.** A manuscript may say it skipped a baseline wave, a multi-item index, or a defined-frame online panel because of cost. Check if it reports the inputs behind that choice. These are the contact rate, the follow-up response rate, how well baseline measures predict the outcome (ρ²), and the unit costs of treatment and surveys. Without these inputs, a reader cannot judge if the omission was worth it or not.

**(b) Placebo designs.** Some manuscripts compare compliers in a treatment group with compliers in a placebo group. For these, check four things. (i) Compliance was recorded before the treatment and placebo scripts diverged. (ii) Contact rates are reported by group. Compliers in the two groups are balanced on baseline outcomes. (iii) Follow-up response among compliers is reported by group. (iv) The placebo content is unlikely to change the outcome. If the placebo moves the outcome in the same direction as the treatment, the estimate moves closer to zero. A null should not be read as "no effect" until (iv) is addressed. Compliance may also be coded after the scripts diverge. If the treatment conversation is longer or more demanding, treatment-group compliers may differ from placebo-group compliers. This can inflate the estimate. Both directions are my inference from the paper's assumptions.

**(c) Observable contact without a placebo.** Some designs record whether contact succeeded, but never contact the control group. Check whether the manuscript reports the contact rate. Check also for a complier estimate (ITT divided by the contact rate) with its standard error. The manuscript should explain why no placebo was used. Without a placebo, the variance of the complier estimate scales with 1/A² rather than 1/A (A = contact rate). At low contact rates, a null from this design is weak evidence of no effect.

## 3. Evidence

**(a)** "In this example, using all four practices we study would not be the most efficient option, nor would the traditional design in the literature" (p. 453). In the Liberia example, cheap treatment and costly online surveys reverse the ranking of designs. So a reviewer should ask for the inputs behind any omission.

**(b)** "Subjects in each group who open the door and identify themselves before either regime begins are then used at the basis [sic] for comparison when estimating the CACE" (p. 445). This quote sets the timing of compliance for check (i).

The authors adopt Nickerson's conditions: "(1) the [treatment and placebo] have identical compliance profiles; (2) the placebo does not affect the dependent variable; and (3) the same type of person drops out of the experiment for the two groups" (p. 446). Condition (1) supports (ii). Condition (2) supports (iv), and condition (3) supports (iii).

On balance checks, a baseline "helps one detect if compliers in each condition differ on baseline outcomes" (p. 449, n. 7). This supports the balance part of (ii).

**(c)** "If failure to treat can occur and be observed, a placebo condition can increase efficiency dramatically (Nickerson 2005b)" (p. 444). A placebo works only when failed contact can be observed. The direction in (c) comes from comparing Equation 4, 4σ²/(NA²) (p. 444), with Equation 5, 4σ²/(NA) (p. 445).

## 4. Scope

All three checks apply only to field experiments with survey outcomes (p. 435). They stay silent on survey experiments. There, treatment and measurement happen in one instrument. Everyone is treated. No check should flag that the estimates apply only to compliers who answered the survey. The authors call this limitation "theoretically similar regardless of the design used" (p. 460). It belongs to an external-validity check.

**(a)** Triggers when a manuscript justifies an omitted baseline, index, or online panel by budget, survey length, or feasibility. It also triggers when a partner refused a placebo. The question then is whether the rest of the design was reconsidered (p. 453). Silent when the stated reason is not cost. One example is a concern that a baseline wave primes respondents. The authors themselves acknowledge this risk (p. 460). The reviewer should ask for evidence on priming, not for cost inputs. Silent when no justification is given. Do not flag a manuscript because its inputs differ from the paper's Table 3. The authors call those values "examples only" that "could vary dramatically" (p. 444).

**(b)** Triggers for complier-versus-complier comparisons with a placebo group under observable contact. Sub-checks differ in scope. Compliance timing and placebo content apply even when the outcome is administrative, such as validated turnout. The attrition comparison applies only to survey outcomes. The baseline balance comparison applies only when a baseline exists (p. 449, n. 7). Otherwise, balance on administrative covariates suffices. Silent when a placebo is only a content control. The groups are compared as assigned. The placebo is not used to identify compliers. In Paler (2013), for example, control households receive placebo information. Silent under full compliance. There are no compliers to identify. The placebo argument assumes that failed contact can be observed (p. 444).

**(c)** Triggers when contact is observable but no placebo was used. The authors classify these designs as "placebo possible" in Table 1a (p. 439). Silent for mail, television, and online ads. In these, receipt cannot be observed. The authors model such cases separately (Table 4b, p. 451). They also list such studies as "placebo not possible" (Table 1b, p. 440). Silent under two-sided noncompliance. Here control subjects can also obtain the treatment (for example, at an open campaign event). The framework assumes no control subject is treated (p. 443). So the variance comparison in (c) does not apply.

## 5. What failure looks like

**(a)** A manuscript says in one sentence that it skipped a baseline survey because of budget limits. The manuscript and its appendix report no contact rate, response rate, or unit costs. There is no power comparison with and without the skipped practice.

**(b)** A manuscript defines compliers as people who finished the conversation, not people who opened the door. It reports one contact rate for both groups together. The balance table covers only the full assigned sample. There is one follow-up response rate for everyone. The placebo topic is close to the outcome. The manuscript does not discuss this. Examples are a volunteering appeal in a turnout study or a recycling appeal in a study of climate attitudes. It still concludes that the canvass had no effect.

**(c)** A manuscript reports a door-to-door experiment. Canvassers record contact, but the control group gets no contact. The manuscript gives no reason for skipping a placebo, or says only that it was not feasible. Its results table reports only the ITT. The contact rate is in a footnote or missing. No complier estimate appears. The contact rate is low, around 20%, and the ITT is not significant. The manuscript still concludes that the canvass had no persuasive effect. It does not report a minimum detectable effect.

## 6. Test cases

**SHOULD trigger:** Broockman, David, and Joshua Kalla. 2016. "Durably Reducing Transphobia: A Field Experiment on Door-to-Door Canvassing." *Science* 352(6282): 220–224. [doi:10.1126/science.aad9713](https://doi.org/10.1126/science.aad9713) Baseline respondents were randomized to a canvass or a recycling placebo conversation. Only those who came to the door in either condition were resurveyed online (pp. 222–223). Check (b) applies with all four sub-checks. A reviewer would look for the supplementary balance and assumption tests the authors cite (p. 223).

**Should NOT trigger:** Paler, Laura. 2013. "Keeping the Public Purse: An Experiment in Windfalls, Taxes, and the Incentives to Restrain Government." *American Political Science Review* 107(4): 706–725. [doi:10.1017/S0003055413000415](https://doi.org/10.1017/S0003055413000415) Control households receive placebo information during the visit. But the placebo is a content control and is not used to identify compliers. So (b) stays silent.
