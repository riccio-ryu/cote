### 소수 외우자....
---

```javascript
function isPrime(x){
    for(let i=2; i<= Math.sqrt(x); i++){
        if(x%i === 0) return false;
    }
    return x>=2
}
```


### Math.sqrt(x)
---

함수는 숫자의 제곱근을 반환합니다.
```javascript
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN
```
