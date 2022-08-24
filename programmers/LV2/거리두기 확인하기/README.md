생각을 너무 많이 했고, 간소화 하려고만 했다... 그러다보니 제한시간을 넘겨버렸다.. 일단 노가다로라도 풀자..

---

### some
---

some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.

```jaavascript
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```
