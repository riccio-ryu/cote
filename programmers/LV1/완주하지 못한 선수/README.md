### sort
---

메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

array1.sort(function(a,b) {return a-b}) //내림차순  => [1, 4, 21, 30, 100000]       === array1.sort((a,b) => ( a-b))
array1.sort(function(a,b) {return b-a}) //오름차순  => [100000, 30, 21, 4, 1]
```


### for in
---

for...in문은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복합니다. (Symbol로 키가 지정된 속성은 무시합니다.)

```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


const arr = [2,4,6,8]
for (const x in arr) {
  console.log(`${x}: ${arr[x]}`);
}

// expected output:
// "0: 2"
// "1: 4"
// "2: 6"
// "3: 8"
```
