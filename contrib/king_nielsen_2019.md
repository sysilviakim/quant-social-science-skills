# Propensity Score Matching and the PSM Paradox

**Full citation:** King, Gary, and Richard Nielsen. 2019. "Why Propensity Scores Should Not Be Used for Matching." *Political Analysis* 27(4): 435–454. doi:10.1017/pan.2019.11.

**Contributor:** Seok

---

## 1. What the paper establishes

Matching is meant to reduce imbalance in pretreatment covariates between treated and control groups. Lower imbalance lowers model dependence, and with it the room for researcher discretion and bias. Propensity score matching (PSM) collapses the k covariates into one scalar, the estimated probability of treatment, and matches on that scalar. The paper shows that this sets PSM's target at a completely randomized experiment. Methods that match on the covariates themselves, such as MDM and CEM, can instead approximate a fully blocked experiment, which has lower imbalance and lower model dependence.

The consequence is more than losing efficiency. Once PSM has pruned enough to approximate complete randomization, the remaining differences in X given the propensity score are invisible to it. Further pruning is then effectively random with respect to X given the propensity score, and random pruning increases imbalance. The authors call this the PSM paradox. Tighter calipers and stricter adherence to PSM make imbalance, model dependence, and potential bias worse. They show the pattern in simulations and in data from two published studies. The critique is about matching on the propensity score. The authors state that it does not extend to other uses of propensity scores, such as weighting, regression adjustment, or stratification.

## 2. Checks for a reviewer

**(a) Check whether the paper uses the propensity score to prune or pair observations.**

Weighting and regression adjustment using the propensity score are outside the paper's claim.

**(b) Check whether balance is reported in the space of the covariates and compared with the unmatched data.**

Overlapping propensity score distributions are not evidence of covariate balance, because equal propensity scores do not imply equal covariate values. A balance table for the matched sample alone does not show whether matching improved anything.

**(c) Check whether the paper tightens the caliper, or prunes further, on the assumption that this must improve balance.**

A stricter caliper can raise imbalance. The reviewer should ask for imbalance traced against the number of pruned observations. This should be like King and Nielsen's Figure 3, not a single post-matching balance table. A "stricter caliper" robustness check not being accompanied by such a trace does not show what the authors think it shows.

**(d) Check whether the matched estimate is robust across plausible outcome models, and whether the matching specification was chosen without consulting the outcome.**

Matching earns its value by reducing model dependence. If the matched estimate still moves across reasonable specifications and the paper reports one of them, the choice is a source of bias.

**(e) Check whether the paper considered a method that matches on X directly and scales variables by prior knowledge of their importance.**

The paper's recommended solution is switching methods, not refining PSM. Exact matching on a few covariates followed by PSM, or iterative respecification of the propensity model, does not escape the problem. In fact, the former can even make the paradox arrive sooner.

## 3. Evidence

**For (a).** The authors count over 141,000 scholarly articles that use or reference PSM (p. 435). The authors locate the problem in matching itself: "We trace the PSM paradox to the particular way propensity scores interact with matching" (p. 436). They limit their own claim, saying that their results do not necessarily implicate the many other productive uses (p. 436). The Rosenbaum–Rubin theorems are described as correct, but not relevant to the practice of matching (p. 436). Their content analysis drew 1,000 random JSTOR articles from 1983–2015 that mentioned PSM. Of the 230 that applied PSM to real data, 94% used the simplest version (p. 441). Therefore, the simple version is what a reviewer will usually meet.

**For (b).** MDM and CEM have tuning parameters that reach exact matching at $\delta = 0$, but PSM does not. PSM approximates only complete randomization and can have higher imbalance (p. 442). The theorem used to justify PSM requires exact matches and conditions on a single model, which is not how researchers work (p. 442–443). The reverse implication that would make PSM useful is false. As the authors write, "balancing only on $\pi$ does not balance X" (p. 443), and equal estimated scores do not imply equal covariate vectors.

**For (c).** The paradox mechanism is stated on p. 444. After PSM approximates complete randomization, further pruning is random with respect to X given $\pi$. Random pruning increases imbalance (p. 445). In the simulation of p. 445–447, model dependence is measured as the variance of the estimate across 512 linear specifications. It falls and then rises sharply under PSM, while it declines monotonically under MDM. In the re-analysis of Finkel, Horowitz, and Rojo-Mendoza (2012) and Nielsen et al. (2011), caliper pruning from the one-to-one PSM solution raises imbalance immediately and keeps raising it. As the authors put it, "the more strict we are in applying PSM, the worse imbalance gets" (p. 448). The authors report similar patterns in more than 20 datasets from work in progress (p. 447). Their recommendation is the routine reporting of diagnostic plots like Figure 3 (p.449).

**For (d).** Model dependence is defined as different causal estimates from models that fit the data about equally well (p. 438). A researcher who chooses among estimates partly on the basis of their values is using a biased estimator, even if each candidate is unbiased conditional on its model. In the authors' words, "a human making an unconstrained qualitative choice from among a set of different unbiased estimates is a biased estimator" (p. 439). Equations 2–3 show that imbalance bounds model dependence. Therefore, matching reduces model dependence only to the extent that it reduces imbalance in X (p. 440).

**For (e).** Any matching method requires scaling variables by their importance. PSM does not solve this, only making the scaling less transparent (p. 449). PSM helps most in so imbalanced data that causal inference is least credible, and can do the most damage in well-balanced data (p. 449). Preceding PSM with exact matching on a few covariates "makes applying PSM more dangerous," because the paradox arrives sooner the closer the first step comes to balancing X (p. 450). The most important consideration in choosing a method is "ensuring one can match on all of X, so that it is at least possible to approximate a fully blocked randomized experiment" (p. 450). The authors advise choosing a method that matches on all of X and encodes prior knowledge, such as Euclidean distance for continuous data or CEM for mixed data (p. 450).

## 4. Scope

**Applies to:** observational studies that use estimated propensity scores to select a matched subsample. The authors state that their argument holds across many variants (p. 441). Severity depends on starting balance. When the original data are badly imbalanced, PSM can reduce imbalance in early pruning before turning (p. 448). The question is whether the paper pruned past that point, not whether it used PSM at all.

**Partial application:** PSM preceded by exact or coarsened matching on a few covariates. The concern still applies and may be severe (p. 450). If PSM is applied to data from a completely randomized experiment, authors consider this potentially very problematic (p.451).

**Does not apply to:**

1. inverse probability weighting, regression adjustment for the propensity score, subclassification on the propensity score, or propensity scores used inside other methods such as genetic matching or covariate balancing propensity scores (p. 436).

2. MDM, CEM, or Euclidean matching.

## 5. What failure looks like

A paper estimates propensity scores with a main-effects logit, performs one-to-one nearest-neighbor matching. It supports balance by showing that the propensity score distributions overlap after matching, or by reporting covariate balance for the matched sample without the unmatched baseline. It presents a tighter caliper as a robustness check that confirms the result, without showing that imbalance in X fell. It reports one outcome model and does not compare PSM with a method that matches on X directly. A reviewer should ask for an imbalance-versus-pruning plot for PSM against CEM or MDM.

## 6. Test cases

**SHOULD trigger:** Nielsen, Richard A., Findley, Davis, Candland, and Daniel L. Nielson. 2011. "Foreign Aid Shocks as a Cause of Violent Armed Conflict." American Journal of Political Science 55(2): 219–232.

King and Nielsen report that its published analysis used one-to-one PSM with a main-effects logit on 18 pretreatment covariates across 2,627 developing-country-years, 393 of them aid shocks (p. 447–448). In their reanalysis, the PSM solution improved balance over the unmatched data, as the original authors had reported, but caliper pruning on the propensity score increased imbalance from the first step (p. 448). The case is instructive, because the initial improvement was real. The reviewer should ask whether any further pruning or caliper-based robustness check moved balance in the wrong direction, and inspect the original article and its supporting materials for other balance diagnostics before concluding.

**Should NOT trigger:** Robins, Hernan, and Brumback. 2000. "Marginal Structural Models and Causal Inference in Epidemiology." Epidemiology 11(5): 550–560.

The authors model the probability of treatment given covariates and use those probabilities to construct weights, but no observations are pruned or paired. King and Nielsen treat this kind of weighting as a use of propensity scores that their critique does not cover (p. 436).
