### reduce() 
---

메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

```javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => { return acc += cur; }, 0);
console.log(result);  // 15

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => { return acc += cur; }, 10);
console.log(result2);  // 25
```
