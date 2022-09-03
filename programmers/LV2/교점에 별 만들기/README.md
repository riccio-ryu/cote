### 숫자가 정수인지, 실수인지 체크
---

###### Number.isInteger() 함수

```javascript
document.writeln(Number.isInteger(10)); // true
document.writeln(Number.isInteger(0)); // true
document.writeln(Number.isInteger(-10)); // true
document.writeln(Number.isInteger(123.1)); // false
```

###### 나머지 연산자(%) 활용

```javascript
function isInteger(number)  {
  return number % 1 === 0;
}

document.writeln(isInteger(10)); // true
document.writeln(isInteger(0)); // true
document.writeln(isInteger(-10)); // true
document.writeln(isInteger(123.1)); // false
```



### 안전한 상수
---

최대값  Number.MAX_SAFE_INTEGER

Number.MAX_SAFE_INTEGER 상수는 JavaScript에서 안전한 최대 정수값을 나타냅니다. (2^53 - 1)  //9007199254740991


최소값

Number.MIN_SAFE_INTEGER 상수는 JavaScript에서 안전한 최소 정수값을 나타냅니다. (-(2^53 - 1)) //-9007199254740991
