# 다시 풀어보자....
---
---

# 조금 아쉬웠다... 제한시간 내에 풀지는 못했지만 접근방법은 얼추 비슷했다...

교집합과 합집합을 너무 미리 생각했다... 가장 우선 문자열들을 변환(?) 시키는 것, 자르는 것

set으로 겹치는 것을 제거한 배열이나 객체를 만들고 각각의 문자열에 겹치는 것이 있으면 카운팅을 해준다

나머지는 제시한 대로 교집합 / 합집합 * 65536을 한다 (소수점 내림, 0이면 65536)

---

### RegExp.test(thing)
---

test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환합니다.

<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test>

```javascript
const str = 'table football';

const regex = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex.test(str));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 0

console.log(globalRegex.test(str));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 9

console.log(globalRegex.test(str));
// expected output: false
```



### 정규표현식 갯수는 {}
---

<https://github.com/riccio-ryu/cote/tree/master/programmers/LV1/%EC%8B%A0%EA%B7%9C%20%EC%95%84%EC%9D%B4%EB%94%94%20%EC%B6%94%EC%B2%9C>

+ {n}        : n개
+ {Min,}     : 최소 Min개 이상
+ {Min, Max} : 최소 Min개 이상, 최대 Max개 이하{3,5}? == {3}와 동일
