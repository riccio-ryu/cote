### 10진수에서 n진수로 변환
---
number.toString(n진수)

```javascript
var decimal = 1023; 
var binary = decimal.toString(2);	// 2진수로
var octal = decimal.toString(8);	// 8진수로
var hex = decimal.toString(16);		// 16진수로
```



### n진수에서 10진수로 변환
---
parseInt(n진수, n)

```javascript
var binary = "1111111111";
var decimal = parseInt(binary, 2);	// 2진수에서 10진수로

var octal = "1777";
var decimal = parseInt(octal, 8);	// 8진수에서 10진수로

var hex = "3ff";
var decimal = parseInt(hex, 16);	// 16진수에서 10진수로
```



### reverse
---
reverse() 메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.

```javascript
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
```


### 전개 구문   ...
---
전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.

```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
```

<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax>
