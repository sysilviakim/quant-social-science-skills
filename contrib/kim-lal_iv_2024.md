# How Much Should We Trust Instrumental Variable Estimates in Political Science? Practical Advice Based on 67 Replicated Studies

**Full citation:** Lal, Apoorva, Mackenzie Lockhart, Yiqing Xu, and Ziwen Zu. 2024. “How Much Should We Trust Instrumental Variable Estimates in Political Science? Practical Advice Based on 67 Replicated Studies.” *Political Analysis* 32: 521–540. https://doi.org/10.1017/pan.2024.2.

**Contributor:** 김준석

---

## 1. What the paper establishes

이 논문은 2010–2022년 APSR, AJPS, JOP에 게재된 선형 IV 연구를 재현한다. 검색 조건을 충족한 논문은 114편이었다. 이 가운데 71편은 온라인 재현자료가 완전했고, 최종적으로 67편의 논문과 70개의 IV 설계가 분석에 포함되었다. 논문의 가장 큰 기여는 개별 연구의 오류를 찾아내는 데 있기보다, 정치학의 IV 연구를 동일한 기준으로 다시 살펴봤다는 데 있다.

재현 결과를 보면, 이분산성과 군집구조를 반영하지 않은 1단계 F 통계량은 도구의 강도를 실제보다 크게 보이도록 만들 수 있다. effective F로 계산하면 70개 설계 중 8개(11%)가 10 미만이었고, bootstrap을 이용한 경우에는 12개(17%)가 10 미만이었다. 아울러 일반적인 2SLS t 검정은 불확실성을 충분히 보여주지 못할 수 있다. 원 논문의 방법으로 귀무가설을 기각하지 못한 비율은 10%였지만, 다른 방법으로 재검정하면 17–35%로 높아졌다. 그리고 70개 설계 중 68개(97%)에서 2SLS 추정치의 절댓값이 OLS보다 크게 나타났다. 관찰연구에서는 도구가 약할수록 두 추정치의 차이가 커지는 경향도 보였다.

IV를 사용했다는 사실만으로 내생성 문제가 해결되었다고 보기는 어렵다. 단순히 “1단계 F > 10”인지만 보기보다는, 왜 해당 도구를 외생적이라고 볼 수 있는지와 OLS–2SLS 결과가 왜 다른지를 함께 살펴보는 편이 낫지 않을까 생각한다.

## 2. Checks for a reviewer

**(a) 도구와 처치가 관련되어 있다는 사실과 도구가 타당하다는 판단을 구분했는지 살펴본다.** 도구 Z가 처치 D를 잘 예측한다는 사실만으로는 충분하지 않다. Z가 교란요인과 무관하다고 볼 이유, 그리고 Z가 D 이외의 경로로 결과 Y에 영향을 주지 않는다고 볼 이유가 따로 제시되어야 한다. 날씨, 지리, 역사적 변수라는 이유만으로 외생성이 보장된다고 보기는 어렵다.

**(b) 1단계 F 통계량이 자료의 구조를 반영했는지 살펴본다.** 소프트웨어의 기본값만 제시하면 군집으로 묶여 있는 자료의 특성이 빠질 수 있다. 이 경우 도구의 강도가 실제보다 커 보일 수 있다. 따라서 effective F를 함께 보는 것이 좋다. 그러나 effective F가 10보다 작다는 이유만으로 연구 전체를 버리는 것도 과도하지 않을까 생각한다.

**(c) 통계적 유의성이 계산방법에 따라 달라지는지 확인한다.** 도구가 약하면 일반적인 2SLS t 검정만으로는 불확실성을 충분히 보여주지 못할 수 있다. 논문이 제안하는 AR, tF, bootstrap 등의 결과도 같이 제시되었는지 확인할 필요가 있다. 계산방법을 바꾸었을 때 결론이 달라진다면, 가장 유리한 결과만 선택하기보다는 그 차이를 함께 보고하는 것이 필요하다.

**(d) OLS와 2SLS 추정치의 차이가 충분히 설명되었는지 확인한다.** 2SLS 추정치가 크다고 해서 더 정확한 인과효과라고 볼 수는 없다. OLS, 2SLS, 1단계와 축약형 결과를 함께 보고, 저자가 예상한 편의의 방향과 실제 결과가 맞는지 살펴봐야 한다. 두 추정치의 차이는 처치효과가 사람마다 다르거나, 측정이 부정확하거나, 도구가 약한 경우에도 나타날 수 있다. 그러므로 큰 차이 자체를 결론으로 삼기보다는 왜 그런 차이가 나타났는지 묻는 편이 낫다.

**(e) 도구가 처치 이외의 경로로 결과에 영향을 주었을 가능성을 살펴봤는지 확인한다.** 도구가 처치에 영향을 주지 않을 것으로 예상되는 집단이 있다면, 그 집단에서도 도구와 결과가 연관되는지를 보는 간단한 위약검정을 할 수 있다. 연관이 나타난다면 다른 경로가 있을 가능성을 고려해야 한다. 이런 검정을 할 수 없다면, 불가능한 이유와 남아 있는 한계를 솔직하게 적는 것으로도 충분하다고 생각한다.

## 3. Evidence

**(a)의 근거.** 저자들은 “Conceptually, unconfoundedness and the exclusion restriction are two distinct assumptions and should be justified separately in a research design”라고 쓴다(p. 524). 즉, 도구가 처치를 잘 예측한다는 것과 그 도구가 인과적으로 타당하다는 것은 같은 문제가 아니다.

**(b)의 근거.** 논문은 effective F를 계산할 때 “taking into account heteroscedasticity and clustering structure”라고 직접 권고한다(p. 537). 70개 설계 중 12개(17%)는 1단계 F 통계량 자체를 보고하지 않았다. 아울러 9개는 이분산성과 군집을 반영하지 않은 표준오차를 사용했다(p. 531). 한편 저자들도 effective F가 10보다 작다는 이유만으로 설계를 버리지는 말라고 한다(p. 537).

**(c)의 근거.** 원 논문의 방법으로 귀무가설을 기각하지 못한 경우는 10%였다. 그런데 AR, tF, bootstrap 등으로 다시 계산하면 그 비율이 17–35%로 높아졌다(pp. 532–533, 536). 저자들은 이 결과를 “both weak instruments and non-i.i.d. errors have contributed to overstatements of power in IV studies in political science”라고 요약한다(p. 533). 같은 점추정치라도 불확실성을 계산하는 방식에 따라 판단이 달라질 수 있다는 뜻이다.

**(d)의 근거.** 저자들은 “the 2SLS estimates are bigger than the OLS estimates”라고 보고한다(p. 534). 실제로 70개 설계 중 68개(97%)에서 2SLS 추정치의 절댓값이 OLS보다 크고, 24개(34%)에서는 다섯 배 이상 크다(pp. 523, 534, 536). 관찰연구에서는 도구가 약할수록 두 추정치의 차이가 커지는 경향이 보였다(pp. 534–536). 이 결과만으로 큰 2SLS 추정치가 틀렸다고 판정할 수는 없지만, 적어도 왜 그렇게 커졌는지는 설명되어야 한다고 생각한다.

**(e)의 근거.** 논문은 도구가 처치에 영향을 주지 않을 것으로 예상되는 집단을 식별할 수 있다면 “conduct a placebo test by estimating the effect of the instruments on the outcome in this ZFS sample”라고 권고한다(p. 538). 구체적으로는 그 집단에서 도구가 결과에 미치는 효과를 추정해 다른 경로의 가능성을 점검하는 방식이다. 이 검사만으로 도구의 타당성이 완전히 증명되는 것은 아니지만, 우려할 만한 다른 경로가 있는지를 살펴보는 데는 도움이 된다.

## 4. Scope

**어디에 적용할 수 있는가.** 이 점검은 하나의 내생적 처치변수를 다루는 선형 IV/2SLS 연구에 가장 잘 맞는다. 특히 날씨, 지리, 역사적 변수처럼 무작위로 배정되지 않은 도구를 사용하는 관찰연구에서 더 유용하다. 이런 연구에서는 통계량뿐 아니라 도구가 외생적이라는 설명을 같이 봐야 한다.

**어디까지 말할 수 있는가.** 114편 중 재현에 성공한 논문은 67편(59%)이었다. 재현에 실패한 가장 큰 이유는 불완전한 데이터였고, 이에 해당하는 논문은 38편이었다(p. 528). 그러므로 11%, 35%, 97%와 같은 수치는 자료와 코드를 확보할 수 있었던 연구에서 나온 결과이다. 재현할 수 없었던 논문들이 어떠했는지는 알 수 없기 때문에, 이 비율을 정치학의 모든 IV 연구에 그대로 적용하는 것은 조심스럽다.

**실험과 관찰연구의 비교.** 70개 설계 가운데 실험 IV는 12개이고 관찰 IV는 58개이다(p. 529, Table 2). 실험에서는 도구의 강도와 OLS–2SLS 차이 사이에 뚜렷한 관계가 보이지 않았다. 그러나 실험 설계가 12개뿐이라는 점을 생각하면, 실험에서는 이런 문제가 없다고 일반화하기는 어렵지 않을까 생각한다. 현재 표본에서는 같은 패턴이 확인되지 않았다고 정리하는 정도가 적절해 보인다.

**적용하기 어려운 연구.** 논문은 내생변수가 여러 개인 IV, 비선형 IV, 동적 패널 GMM을 직접 재현하지 않았다(p. 527). 아울러 도구변수를 사용하지 않는 무작위 실험이나 일반적인 매칭, DID, conjoint 연구에는 이 점검표를 그대로 적용하면 안 된다.

## 5. What failure looks like

문제가 있는 원고는 도구가 처치를 유의하게 예측한다는 결과만 보여준다. 반면에 왜 그 도구가 교란요인과 무관하다고 볼 수 있는지, 그리고 다른 경로로 결과에 영향을 주지 않는지에 대한 설명은 부족하다. 자료가 지역이나 시점별로 묶여 있는데도 그 구조를 반영한 effective F가 없고, “F > 10이므로 문제가 없다”고 간단히 결론내린다.

결과표에는 2SLS 계수와 일반적인 표준오차만 있고, OLS나 1단계 결과는 빠져 있다. OLS에서 작았던 효과가 2SLS에서 몇 배로 커졌는데도, 내생성을 교정했기 때문에 진실한 효과가 드러났다고만 설명한다. 더하여 다른 인과경로를 확인하는 위약검정이 없고, 자료와 코드도 제3자가 핵심 결과를 다시 계산하기 어렵게 제공된다. 이런 원고를 보면 도구가 강한지와 타당한지, 추정치가 큰지와 믿을 만한지를 구분하기 어렵다.

## 6. Test cases

**SHOULD trigger:** Rueda, Miguel R. 2017. “Small Aggregates, Big Manipulation: Vote Buying Enforcement and Collective Monitoring.” *American Journal of Political Science* 61(1): 163–177. 이 연구는 투표소 규모를 내생적 처치로 두고, 유권자 수 제한규칙이 예측한 투표소 규모를 도구로 사용한다. 그러므로 도구의 외생성과 1단계 강도, OLS–2SLS 차이를 살펴볼 필요가 있다. Lal et al.의 재현에서 1단계 F 통계량은 8,598.3으로 매우 크고, 2SLS와 OLS의 차이도 크지 않았다(p. 537, Figure 6). 이 사례를 보면 이 점검표의 목적이 모든 IV 연구를 문제 있다고 판정하는 데 있는 것은 아니라고 생각한다.

**Should NOT trigger:** DeMora, Stephanie L., Jennifer L. Merolla, Brian Newman, and Elizabeth J. Zechmeister. 2024. “Jesus Was a Refugee: Religious Values Framing Can Increase Support for Refugees Among White Evangelical Republicans.” *Political Behavior* 46: 2145–2168. 이 연구는 세 메시지 조건을 응답자에게 직접 무작위 배정하고 조건별 ITT 평균차를 추정한다. 도구변수나 2SLS를 사용하지 않으므로 effective F, AR 검정, OLS–2SLS 비교를 요구하면 안 된다. 무작위화, 처치 정의, SUTVA, 측정과 외적 타당성은 따로 점검할 수 있지만, 그것은 이 논문의 IV 점검표와는 다른 문제이다.
