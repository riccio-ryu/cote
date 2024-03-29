### break
---

반복문, switch문, 레이블 문과 결합한 문장을 빠져나올  때 사용합니다.

특정 반복문 빠져 나오는 방법

```javascript
var x = 0;
var z = 0
labelCancelLoops: while (true) {
  console.log("Outer loops: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```



### array func
---

- push()
  - 배열의 끝에 아이템을 추가한다

```javascript
var fruits = ["Apple", "Banana", "Orange", "Strawberry"];
var push = fruits.push("Grape");
console.log(push);  //5
console.log(fruits);  //["Apple", "Banana", "Orange", "Strawberry", "Grape"]
```

- pop()
  - 배열의 마지막 아이템을 제거한다

```javascript
var fruits = ["Apple", "Banana", "Orange", "Strawberry"];
var pop = fruits.pop();
console.log(pop); //Strawberry
console.log(fruits);  //["Apple", "Banana", "Orange"]
```

- shift()
  - 배열의 첫 번째 아이템을 제거한다

```javascript
var fruits = ["Apple", "Banana", "Orange", "Strawberry"];
var shift = fruits.shift();
console.log(shift); //Apple
console.log(fruits);//["Banana", "Orange", "Strawberry"]
```

- unshift()
  - 배열의 앞에 아이템을 추가한다

```javascript
var fruits = ["Apple", "Banana", "Orange", "Strawberry"];
var unshift = fruits.unshift("Grape");
console.log(unshift); //5
console.log(fruits);  //["Grape", "Apple", "Banana", "Orange", "Strawberry"]
```

- splice()
  - splice(pos, length), pos 번째 부터 length 만틈 아이템을 제거한다

```javascript
var fruits = ["Apple", "Banana", "Orange", "Strawberry"];
var splice = fruits.splice(1, 2);
console.log(splice);  //["Banana", "Orange"]
console.log(fruits);  //["Apple", "Strawberry"]
```

- slice()
  -배열을 복제한다
  
```javascript
var fruits = ["Apple", "Banana", "Orange", "Strawberry"];
var slice = fruits.slice();
console.log(slice);  //["Apple", "Banana", "Orange", "Strawberry"]
console.log(fruits);  //["Apple", "Banana", "Orange", "Strawberry"]
```
