### Array.from()
---

Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.

```javascript
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```


### continue
---

continue 문은 현재 또는 레이블이 지정된 루프의 현재 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행합니다.

```javascript
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// expected output: "012456789"
```


### Set
---

Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있습니다.  :: 중복 안됨

```javascript
// Set 객체를 배열 객체로 변환 (Array.from으로)
var myArr = Array.from(mySet);
```
