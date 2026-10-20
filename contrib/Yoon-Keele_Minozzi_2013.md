# Assumptions and Counterfactuals in Causal Inference with Observational Data

**Contributor:** Gyujin Yoon

**Full citation:** <Keele, L., & Minozzi, W. (2013). How much is Minnesota like Wisconsin? Assumptions and counterfactuals in causal inference with observational data. Political Analysis, 21(2), 193-216.>

## 1. What the paper establishes
관찰자료를 활용한 인과추론에서는 항상 효과를 추정해 내기 위한 몇 가지의 가정들이 필요하고, 이는 어떤 방법론을 사용하는지에 따라 다르다. 저자들은 이와 같은 방법론으로 효과를 추정해냈다고 주장하기 위해서 반드시 필요한 가정들의 목록을 밝힌 후, 가정들의 강도에 따라 인과 효과의 크기가 달라질 수 있음을 하나의 사례로서 제시한다. 

## 2. Checks for a reviewer
(a) 이중차분법(DID)이 활용되었을 경우, 저자가 평행 추세 가정을 명시적으로 언급하는지, 그리고 그 이전의 집단 간 차이를 명시하는지 확인한다. 

(b) 저자가 집단 간 관찰할 수 없는 교란변수들의 영향력을 확인하기 위하여 다음과 같은 설계를 구상했었거나 실제로 착수했는지를 본다: 비교적 크기는 작지만 동질적인 표본들을 사용한 검정, 서로 이질적인 변수를 가진 통제집단들을 활용한 검정, 민감도 분석. 

(c) 관찰자료를 도구변수를 관찰가능한 자연실험으로서 사용한다면, 저자가 진작(encouragement)과 처치의 차이를 인지하고 있는지 본다. 

(d) 회귀단절 모형을 드러내는 자연실험을 언급한다면, 저자가 효과의 국소성에 대하여 명시적으로 언급하였는지 본다.

(e) 위와 같은 인과추론을 목표로 하는 방법론이 아닌, 회귀분석 혹은 매칭 등을 사용하면서 처치 집단과 통제 집단의 (처치 이외의) 동질성을 정초하려는 시도들에서, 저자가 위 방법이 양측 집단의 동질성을 보장하지 않음을 명시적으로 확인하는지 본다. 

## 3. Evidence
(a) 먼저 저자들은 이중차분법이 사용되었을 때의 기초적 요건을 다음과 같이 설명하였다. “Under this approach, we must assume that the observed and the unobserved differences between the treated and the control groups are constant with respect to time(p.195)”. 

(b) 저자들은 표본 크기가 작아지기 때문에 발생하는 통계적 불확실성보다 확실히 추정하지 못하는 인과효과의 왜곡을 더 경계하라고 다음과 같이 언급한다.  “As Rosenbaum (2010, 102) notes, increasing the sample size with heterogeneous units may increase precision around a biased point estimate, potentially excluding the true effect from the confidence interval(p. 196)”. 그리고 서로 다른 (복수의) 통제집단들을 활용하라는 지침에 대해서는 다음과 같이 언급하였다. "For example, comparing the treatment group to different control groups can illuminate the role of unobserved covariates, if the unobservables are thought to differ across the control groups(p.196)." 마지막으로 민감도 분석에 관해서는 “Finally, one can evaluate the robustness of our inferences by conducting a sensitivity analysis(p. 196)” 라고 언급하였다.

(c) 도구변수를 사용한 자연실험에 관해서는 저자들이 예시로서 설명하고 있다. “In the context of natural experiments, one hopes to find some intervention that randomly encourages units to take the treatment(p. 198).” 하지만 도구변수가 주어지는 것은 보통 처치 그 자체라기보다 처치를 가능케 하는 진작(encouragement) 조건인 경우가 많다. 따라서 연구자의 모델상 이 진작과 처치의 구분은 명시적으로 작동하여야 한다. 

(d) 저자들은 회귀단절모형의 문제를 다음과 같이 언급한다. “The RD estimate is necessarily local: it only applies to some limited range of units above and below the threshold, but not to all units.”(p. 199) 회귀단절모형을 사용하는 경우 표본의 동질성은 처치와 비처치가 갈리는 특정 변수의 특정 지점의 근방의 수치를 보이는 국소적 수준에서만 보장될 수 있다. 처치집단과 통제집단이 서로 너무 이질적인 경우 회귀단절모형을 사용한 인과효과는 타당하게 추정되지 못할 수 있다. 

(e) 저자들은 가용한 통제변수를 전부 투입하여 처치 이전에 서로 동질적인 처치집단과 통제집단을 구성할 수 있다는 아이디어는 반증 불가능한 가정에 불과하다고 주장한다. "The control group under this strategy is a good counterfactual since we observe and adjust for all the covariates that make these units different from the treated group. Critically, this assumption is nonrefutable, insofar as it cannot be verified
with observed data (Manski 2007)(p. 195)" 

## 4. Scope
적용 가능: 본 논문의 적용 범위는 관찰자료를 사용하면서 인과효과를 추정하려 시도하는 논문들 전체에 걸쳐서 작동된다. 즉 명시적 횡단면 가정, DID, IV와 RD를 포함한 자연실험, 통제 불가능한 교란변수들이 이론적으로 예측될 수 있는 상황에서는 사용 가능하다. 

적용 불가능: RCT와 같은 실제 실험 연구들. 실험실에서 무작위로 표본을 배치한 경우 거의 대부분의 경우 표본의 동질성이 보장되므로, 처치의 효과가 일반적인 인과효과로 추정될 수 있다. 

## 5. What failure looks like
본 논문에서 실제 진행한 투표율 분석 가운데 회귀단절모형 사례를 생각해 볼 수 있을 것이다. 저자들은 앞서 199페이지를 인용하면서 언급한 대로 회귀단절모형에서 추정하는 효과는 항상 국소적일 수밖에 없다고 주장한다. 그러나 저자들이 EDR의 문제를 다룰 때 기본적으로 상정한 틀이 주 단위인데 반해("Below, we focus on EDR in Minnesota and Wisconsin for two reasons(p. 199)."), 지방자치단체의 인구 수준에서 국소적으로 검증한 결과는 주 수준으로 일반화하기 어렵다. 물론 저자들도 이 주장을 인식한 것으로 보인다("Second, within the states of Wisconsin and Minnesota, the inference is confined to municipalities that are actually comparable. (...) but does it make sense to compare Milwaukee or the twin cities to towns where the population is less than 500?"(p.209)). 그러나 그렇다면 연구 설계 단계에서 미네소타와 위스콘신의 비교가 아니라 더 하위 수준에서의 주 내(within-state) 비교를 설계하는 식으로 작동했어야 한다.

## 6. Test cases
적용가능한 논문: HOMOLA, J., PEREIRA, M. M., & TAVITS, M. (2020). Legacies of the Third Reich: Concentration Camps and Out-group Intolerance. American Political Science Review, 114(2), 573–590. doi:10.1017/S0003055419000832

본 논문은 독일에서의 외집단 배척 경향성의 근원을 나치 독일 시기 설치된 수용소(concentration camp)와의 지리적 근접성을 통하여 추정한다. 논문의 이론적 주장은 수용소가 설치되면서 인근 지역에 외집단 배척성의 문화가 사람들에게 체화되었고, 그것이 현재까지 영향을 주면서 AfD 등의 득표율에 영향을 준다는 것이다. 하지만 이와 같이 역사적 사건들의 영향력이 잔존한다고 주장한다면 동서독 분할점령에 따른 효과도 더 정밀하게 추정해야 할 것이다. 논문에서는 동독 대 서독 더미 변수를 추가한 모형을 활용하였지만, 소련 점령기 혹은 동독 당시 (수용소 효과와 마찬가지로) 사회주의 통치 장치들의 인접성에 의거한 효과를 분리해 낼 수 있어야 수용소의 효과를 추정해냈다고 주장할 수 있을 것이다. 본 논문에서는 명시적으로 (e) 항목을 검사받을 수 있을 것이고, 만약 인과추론의 관점을 도구변수로 바꿨을 때에도 해당 수용소 지역에 주로 작용한 사후적 요소들이 있기 때문에 그 요소들을 이론적으로 정당화해야 할 것으로 보인다.

적용 불가능한 논문: Kramer, A. D., Guillory, J. E., & Hancock, J. T. (2014). Experimental evidence of massive-scale emotional contagion through social networks. Proceedings of the National Academy of Sciences, 111(24), 8788-8790.

본 논문에서는 감정이 전염되는지를 확인하기 위하여 68만 여명의 페이스북 계정에 접근하여 무작위로 그들의 페이스북 친구들의 감정 상태(긍정적 혹은 부정적)의 노출도를 낮추는 식으로 조절하였다. 여기에서 친구들의 감정 상태는 긍정적이거나 부정적인 단어가 피드에 사용되었는지 여부로 진행되었다. 실험 결과 실제로 부정적인 글에 덜 노출된 집단은 긍정적인 단어를 사용한 글을 더 많이 게시하고 부정적인 단어를 사용한 글은 덜 게시했으며, 긍정적인 글에 덜 노출된 집단은 그 반대의 효과가 드러났다. 연구진은 이를 '감정 전염'의 결과로 해석하였다. 여기에서는 통제된 상황에서의 RCT가 진행되었으므로 위의 요소들이 대체로 적용될 수 없다. 다만 실제로 그와 같은 글을 게시한 것을 '감정 전염'으로 해석할 수 있을지는 여전히 이론적으로 정당화가 필요하다고 할 수 있다. 
