### parseInt
---

나누기에서 몫은 아래와 같이 한 후 정수로 구할 경우 parseInt 로 정수형으로 변환합니다.

var result = parseInt(13 / 5); // 값은 2



### Math.abs()
---

음수, 양수를 절대값으로 반환

```javascript
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs("string"); // NaN
Math.abs();         // NaN
```



### switch
---

```javascript
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```
