### Math.sqrt()

Math.sqrt() 함수는 숫자의 제곱근을 반환합니다.

```javascript
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095
```

### Number.isInteger()

Number.isInteger() 메서드는 주어진 값이 정수인지 판별합니다.

```javascript
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return 'Fits!';
  }
  return 'Does NOT fit!';
}

console.log(fits(5, 10));
// Expected output: "Fits!"

console.log(fits(5, 11));
// Expected output: "Does NOT fit!"
```
