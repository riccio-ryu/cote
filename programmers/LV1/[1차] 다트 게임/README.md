### isNaN() 
---

isNaN(value)

여기에서 NaN은 'Not a Number'의 약자입니다.

리턴값

파라미터가 숫자가 아닐 경우 true를 리턴하고,

파라미터가 숫자일 경우 false를 리턴합니다.


```javascript
document.writeln(isNaN("123")); // false
document.writeln(isNaN("123.1")); // false
document.writeln(isNaN(123)); // false
document.writeln(isNaN(-123)); // false
document.writeln(isNaN(.1)); // false

document.writeln(isNaN("abc")); // true
document.writeln(isNaN("123+123")); // true
document.writeln(isNaN(undefined)); // true
document.writeln(isNaN({})); // true

document.writeln(isNaN('')); // false
document.writeln(isNaN(' ')); // false
document.writeln(isNaN(null)); // false
document.writeln(isNaN(true)); // false
document.writeln(isNaN([])); // false

document.writeln(isNaN(new Date())); // false
document.writeln(isNaN(new Date().toString())); // true
```



### Math.pow()
---

Math.pow()함수는base^exponent처럼 base 에 exponent를 제곱한 값을 반환합니다

```javascript
console.log(Math.pow(7, 3));
// expected output: 343

console.log(Math.pow(4, 0.5));
// expected output: 2

console.log(Math.pow(7, -2));
// expected output: 0.02040816326530612
//                  (1/49)

console.log(Math.pow(-7, 0.5));
// expected output: NaN
```
