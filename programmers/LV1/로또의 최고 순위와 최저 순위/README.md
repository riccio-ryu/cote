### filter
---
메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다. (이때 map과 달리 산술이 아닌 논리이다.(t or f))

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

filter와 map의 차이
var testArray = [0,1,2,3,4,5];
testArray.filter(function(c){ return c * 2; }); // [1, 2, 3, 4, 5]
testArray.map(function(c){ return c * 2 }); // [0, 2, 4, 6, 8, 10]
```


### includes
---
메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.

```javascript
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// expected output: true
console.log(pets.includes('at'));
// expected output: false
```


### 괄호 이슈
---
화살표 함수의 경우 괄호()로 감싸진 부분이 return 된다(return문을 작성하지 않아도 return 됨).
반면에 중괄호{}로 감싸진 다음과 같은 함수는 return문이 없다면 return 값을 반환하지 않는다.

쉽게
```javascript
const Button = () => {
    <button>Hello world</button>
}
console.log(Button); // undefined //이럴경우 {}를 ()로 바꿔주는것과 return을 써주는것 둘 중 하나로 해결 가능
```
