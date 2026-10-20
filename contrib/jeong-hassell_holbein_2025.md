# Navigating Potential Pitfalls in Difference-in-Differences Designs: Reconciling Conflicting Findings on Mass Shootings’ Effect on Electoral Outcomes

**Full citation:** Hassell, Hans J. G., and John B. Holbein. 2025. "Navigating Potential Pitfalls in Difference-in-Differences Designs: Reconciling Conflicting Findings on Mass Shootings’ Effect on Electoral Outcomes." *American Political Science Review* 119(1): 240–260. doi:10.1017/S0003055424000108.

**Contributor:** 정재완

---

## 1. What the paper establishes

논문에서 소개된 연구 세 편은 같은 지역의 선거 결과 자료를 쓰지만, 총기난사가 민주당 득표율을 높이는지를 두고 각자 다른 결론을 내린다. Hassell과 Holbein은 이원 고정효과(TWFE) 모형이 예상한 과대하게 큰 추정치의 원인이 평행추세(parallel trends)위반이라고 말한다. 총기난사 발생 지역은 이전부터 이미 민주당 쪽으로 기울고 있었고, 미발생 지역은 공화당 쪽으로 움직이고 있었다. 이 추세를 모형에 반영하면 추정치는 0 근처에 모이며, TWFE모형이 예측한 큰 효과는 배제된다. 다만, 어떤 방향이든(+-) 작은 효과의 가능성은 존재하고, 가끔 발생하는 통계적으로 유의한 추정치는 사양(specification)을 조금만 바꿔도 사라지며, 처치 시점이 엇갈리는 데서 오는 효과 이질성은 고려되어야 하나, 해당 연구에서 평행추세 위반 문제만큼 주요하진 않았다.

## 2. Checks for a reviewer

**(a)** DiD 논문이 추세 그림만 제시하지 않고, 처치 전 효과를 검정하는지 확인한다. 위약 회귀(placebo regression)나 사건연구(event study)를 통해 가능하다고 본 논문은 소개한다. 선행 계수가 평평하다면, 동등성 검정(equivalence test) 등으로 사전차이가 특정 범위를 벗어날 가능성이 없음을 밝히고, 특정 %를 넘는 사전추세는 배제됨을 밝혀야 한다. 선행 계수가 처치 후 추정치와 같은 방향이라면, 추정치의 일부는 이전부터 있었던 추세에 의해 과장되었을 가능성이 있고, 효과가 부풀려진다.

**(b)** 사전 추세가 의심되는 경우, TWFE답을 믿을 수 없어 보정 결과가 여러 방식에서 유지되는지 확인한다. 여러 형태의 추세선을 긋는 단위별 추세(unit-specific trends), 그리고 Liu, Wang, and Xu(2024)의 반사실 추정량과 Rambachan and Roth(2021)의 breakdown 값을 포함한 민감도 분석이 사용될 수 있다. 평행추세가 성립할 때만 유의미한 결과는 효과가 존재한다고 단정할 수 없다.

**(c)** 보정 후 효과가 사라졌다면, 보정된 추정치가 어떤 크기의 효과를 배제하는지 확인한다. P-Value등 유의성 검정 만으로는 작은 효과와 부정확하게 추정된 효과를 가려낼 수 없다. 신뢰구간이나 동등성 검정의 경계를 논쟁 중인 효과 크기와 놓고 비교해야 한다.

**(d)** 처치 시작 시점이 단위마다 다르다면, 이미 처치된 단위를 다시 통제집단으로 쓰지 않는 Sun and Abraham(2021)의 방식을 사용해야 하며, 사건연구의 장기 효과가 크게 나왔다면 특히 이 점검이 필요하다.

**(e)** Figure 11. 처럼, 결론이 선호하는 모형 하나 혹은 소수의 유의한 추정치가 아니라, 여러 사양에 걸친 추정치의 분포에 기대는지 확인한다. 중요한 선택은 처치 코딩(한 번 일어난 사건 뒤에도 계속 처치 상태로 둘지), 추세 형태, 기준 시점 등이 있다. 위 선택은 이론에 따라 정해야 하며, 이론이 답을 주지 않을 때 두 방식을 모두 보고해야 한다. 한 조합에서는 유의하지만 다른 사양에서 유의하지 않은 결과는 신뢰도가 높지 않다.

## 3. Evidence

(a)의 근거. 저자들은 추세 그림을 "적절한 첫 단계"("an appropriate first step", 245쪽)라고 부르지만, "그것만으로 충분한 경우는 드물다"("[v]isual inspection is important but seldom sufficient", 245쪽, 각주 17)고 한계를 밝힌다. García-Montoya, Arjona, and Lacombe(2022; 이하 GMAL)는 사전 추세 그림을 그렸으나 2000년 이후 총기난사에서 드러난 평행 가정 위반을 놓쳤다(245쪽, 각주 17). 저자들이 "표준 관행이 되어야 한다"("should be standard practice")고 주장한 부분은 "모형이 처치 이전의 효과를 시사하는지"("whether this model suggests impacts prior to treatment", 247쪽)이다. "평행추세 검정은 검정력이 부족할 수 있기"("parallel-trends tests can be underpowered", 241쪽, 각주 4) 때문에, 저자들은 "동등성 검정으로 불균형을 어느 정도의 정밀도로 따져야 하는지 고려해야 한다"("scholars should consider the necessary precision of an imbalance using equivalence testing", 247쪽, 각주 21)고 말한다. 방향은 사건연구에서 드러난다. 총기난사 이후의 선거는 이전부터 시작된 민주당 선호 추세의 연장선이다("[e]lections after a shooting are just a continuation", 248쪽).

(b)의 근거. 추세 형태는 "연구자 손에 달린 결정"("a potentially influential decision in the hands of a researcher")이므로, 저자들은 "추세를 여러 형태로 바꿔 가며 강건성 점검을 하라”고 권한다("recommend scholars run robustness checks across several parameterizations of the unit-specific trends", 248쪽). 새로운 추정량들은 "아직 서로 비교 검증된 적이 없기"("have not yet been benchmarked to one another", 251쪽) 때문에, 저자들은 "최소한 Liu, Wang, and Xu(2024)와 Rambachan and Roth(2021)가 제안한 점검"("at minimum, checks suggested by Liu, Wang, and Xu (2024) and Rambachan and Roth (2021)", 252쪽)을 요구한다. 본 논문의 GMAL 자료에서 민감도 분석은 처치 전 추세가 그대로 이어진다고 가정하면(M = 0) 유의성을 잃는다. Breakdown 값이 0임을 의미하고, 저자들은 “such a low breakdown”, (253쪽)이라고 부른다.

(c)의 근거. 저자들은 "어떤 효과를 배제할 수 있는지 보기 위해 동등성 검정을 쓴다"("use equivalence testing to see what effects we are able to rule out", 242쪽). 또 "시간추세를 넣으면 표준오차가 인위적으로 커질 수 있다"("adding time trends might artificially inflate standard errors to unpalatable levels", 248쪽, 각주 30)고 인정하고, 1.67%p를 넘는 사건연구 효과를 배제한다. 이 값은 "기존 GMAL의 5%p 추정치보다 매우 낮다"("nowhere near the size of GMAL's 5 percentage point estimate", 249쪽). 이 null 결과가 의미를 갖는 것은 경계가 추정치보다 훨씬 아래에 있기 때문이다.

(d)의 근거. "처치효과가 시간에 따라 변하면 편향된 추정치가 나올 수 있다"("If there are time-varying treatment effects, they can produce biased estimates", 253쪽). 따라서 "연구자는 이 분해를 살펴 효과가 특정 비교에서 나오는지 밝혀야 한다"("scholars should examine this decomposition to illuminate whether effects are driven by specific comparisons", 254쪽). 그래서 저자들은 단위별 추세를 넣을 수 있는 Sun and Abraham의 추정량도 사용한다(254쪽). GMAL 자료에서 10–13%p에 이르던 사건연구의 후기 효과는 "크게 줄고 심지어 음수가 되기도 한다"("heavily attenuate and even become negative", 255쪽).

(e)의 근거. 저자들은 "처치 코딩, 시간추세의 사용 여부와 사용할 경우 그 함수 형태"("treatment coding, the use of time trends and, if so, their functional form", 241쪽)를 DiD 추정치에 중대한 영향을 미치는 결정들에 포함한다. 처치 코딩에 대해서는 "두 방식 중 무엇을 고를지는 연구자의 결정"("[t]he choice between the two approaches is a researcher decision that should be motivated by theory")이라고 하며, 뚜렷한 예상이 없을 경우, 두 방식을 모두 돌린다(243쪽). 또 연구자에게 "사양을 바꿨을 때 결과가 어떻게 달라지는지 투명히 보여 주고"("be transparent about the effect of simple changes to model specification"), "'단일 모형'이 아니라 '증거의 우세'에 기대는 접근"("'preponderance of evidence' rather than a 'singular model' approach", 257쪽)을 취하라고 요구하며, "유의하지 않은 결과들의 홍수 속에 튀어나온 소수의 유의한 효과"("isolated significant effects in a deluge of otherwise insignificant results", 257쪽, 각주 52)에 대해 경고한다. 저자들의 사건연구 효과 0.8%p는 선형 추세에서 "겨우 통계적으로 유의하다"("barely statistically significant", p = 0.048). 이차 추세에서는 10% 수준에서만 유의하고(249쪽), 사양을 조금 바꾸면 음수가 되기도 한다(250쪽).

## 4. Scope

이 점검들은 저자들의 기여가 잘 적용되는 상황이다. 즉 처치가 "완전히 외생적이지 않거나 단위마다 시점이 다를 수 있고"("may not be fully exogenous or may vary in timing across units"), 표본이 "시점보다 단면이 더 많은"("more cross sections than time points", 258쪽) 경우다. 두 조건은 서로 다른 점검을 불러낸다.

(a)는 처치 전 시점이 여러 개 있고 처치 시기가 무작위로 정해지지 않은 연구에 적용된다. 처치가 이미 변화중인 단위에 가해질 때 가장 시급하다. 연구자는 "처치 이전의 인구·정치적 변화가 단기적인 처치 노출과 맞물릴 때 주의해야 한다"("should take care when demographic/political changes predating treatment aligns with short-term treatment exposure", 245쪽). 엄청나게 큰 추정치도 이 점검을 부르는 또 다른 신호다(244쪽). 처치 전 시점이 하나뿐이면 검정할 것이 없으므로, 리뷰어는 대신 평행추세에 대한 실질적 논거를 요구해야 한다. 같은 단위가 반복해서 처치되는 경우에는 신중해야 한다. "연구 설계에 오류가 없어도 처치 전 효과가 나타날 수 있기"("pretreatment effects could emerge even without errors in the research design", 247쪽) 때문이다. 미리 예고된 처치도 마찬가지로 신중해야 한다. 위약 검정은 사건이 "예상치 못하게 일어나는"("unexpected where they occur", 247쪽) 것이라고 전제하기 때문이다. 물론 검정을 통과했다고 해서 증명되는 것은 거의 없다. 이런 검정이 줄 수 있는 것은 "식별 전략의 타당성에 반하는 증거"("evidence against the validity of an identification strategy", 241쪽, 각주 4)뿐이다.

(b)는 사전 추세가 보이거나 그럴 가능성이 클 때 적용되나, 저자들은 "모든 경우에 단위별 추세를 써야 한다고 주장하는 것이 아니다"("We are not arguing every case employ unit-specific trends", 253쪽). 다른 방식으로 위반을 다루는 논문도 통과한다. 리뷰어는 시점 수가 적은 패널에 고차 추세를 요구해서는 안 된다. 고차 추세는 "더 큰 검정력이 필요하고 표준오차를 키울 수 있기"("require more power and may inflate standard errors", 257쪽) 때문이다. 어떤 도구도 모든 문제를 해결하지 못한다. 어느 것도 “무작위 실험 기준과"("to a randomized baseline", 258쪽) 비교된 적이 없기 때문이다. 처치 시기가 무작위로 정해졌다면 (a)와 (b)의 우선순위는 낮아진다.

(c)는 보정 후 null 결과가 나왔거나 추정치가 줄어든 경우에 적용된다. 보정 후에도 효과가 유의하게 남아 있다면 적용되지 않는다. 표준오차가 커지면 결과는 유의하지 않은 쪽이 되므로, 살아남은 효과는 더 어려운 검정을 통과한 것이다.

(d)는 처치 도입 시점이 엇갈린 설계에 적용되며, "한 시점에 실시된 외생적인 개입"("largely exogenous interventions implemented in a single time period", 241쪽)에는 적용되지 않는다. 어떤 단위도 이미 처치된 통제집단 노릇을 할 수 없다. 처치 시기가 무작위지만 엇갈린다면 (d)는 그대로 적용된다.

(e)는 적용가능한 사양이 많고 주장이 소수의 유의한 추정치에 기대는 경우에 적용된다. 타당한 요구는 그림 11(256쪽)처럼 추정치 전체의 분포를 보여달라고 하는 것이다. 계속 효력이 유지되는 처치, 예를 들어 계속 유지되는 법이나 정책에서는 처치 코딩 문제가 사라진다. 그런 처치에서는 다시 통제 상태로 돌아가는 단위가 없다(243쪽). 그 법이 폐지되면 문제는 다시 생긴다. 유지되는 처치 아래에서 효과가 점차 약해지는 문제는 사건연구와 (d)의 몫이다.

"처치 단위가 매우 적은(예: synthetic controls)설계는 저자들이 탐구하지 않은 영역이라(258쪽), 이 점검 들은 그런 설계에서 작동해서는 안 된다.

## 5. What failure looks like

논문에서 소개된 연구는 단위·연도 고정효과를 넣고 전 표본을 묶어 추정한 TWFE 계수 하나를 보고하며, 그 값은 크고 매우 유의하다. 사전 추세의 근거는 원자료 평균을 그린 그림이다. 그림을 보면, 처치 전부터 두 선이 벌어지는데 본문은 나란하다고 쓴다(GMAL의 보충자료 A.4절; 245쪽, 각주 17). 사건연구가 없거나, 있다면 선행 계수가 처치 후 추정치 쪽으로 올라가서 처치 전부터 시작된 효과의 연장선이 된다. (그림 4, 247쪽). 강건성 주장은 본문에도 부록에도 재현 자료에도 없는 추세 사양을 근거로 든다(241쪽, 각주 2). 추세를 넣어 효과가 사라지면, 논문은 신뢰구간 없이 별표가 사라졌다고 보고한다. 효과가 살아남는다면 하나의 사양에서만 살아남고, 민감도 분석이 있다면 원래 추정치에서만 유의하다(그림 8a, 252쪽).

## 6. Test cases

**SHOULD trigger:** García-Montoya, Laura, Ana Arjona, and Matthew Lacombe. 2022. "Violence and Voting in the United States: How School Shootings Affect Elections." American Political Science Review 116 (3): 807–26. 1980년부터 2016년까지 난사형 학교 총기사건이 카운티마다 다른 시점에 일어났고, 강조된 약 5%p의 효과는 카운티·연도 고정효과 모형에서 나온다(Hassell and Holbein, 241–42쪽). 총기난사 이전의 추세 차이(245쪽), 카운티 추세 모형의 부재(241쪽, 각주 2), M = 0에서의 breakdown(253쪽)은 (a), (b), (e)를 작동시켜야 하고, 엇갈린 도입 시점 때문에 (d)도 더해진다. GMAL은  null 결과가 아니라 효과를 보고하므로 (c)는 침묵한다.

**Should NOT trigger:** Abadie, Alberto, Alexis Diamond, and Jens Hainmueller. 2015. "Comparative Politics and the Synthetic Control Method." American Journal of Political Science 59 (2): 495–510. 패널 자료, 정치적 충격, 전후 비교를 갖춰 점검이 걸릴 것처럼 보이는 경계 사례로, 여기서는 독일 통일과 서독 경제를 다룬다. 그러나 처치 단위 하나, 처치 시점 하나, 가중치를 준 합성통제는 Hassell과 Holbein이 말한대로, 자신들의 논의 범위 밖에 있다. (258쪽).
