# 외울것 정리

### 유클리드 호제법 정리
```
function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);  // 최대공약수(Greatest Common Divisor, GCD)
    const lcm = (a, b) => a * b / gcd(a, b);                // 최소공배수(Lowest Common Multiple, LCM)
    return [gcd(num1, num2), lcm(num1, num2)];
}
```

### 소수
```javascript
function isPrime(x){
    for(let i=2; i<= Math.sqrt(x); i++){
        if(x%i === 0) return false;
    }
    return x>=2
}
```

### ceil, floor, round
```javascript
Math.ceil()     // 올림
Math.floor()    // 내림
Math.round()    // 반올림
```

### dfs
```javascript
function dfs (n, arr, i) {
    // 다음 스텝 준비, 아래 예시
    const m = n - arr[i]
    const copy = [...arr]
    copy[i] = 0
    dfs(m, copy, i+1)
}
```

### bfs
```javascript
function bfs (i, arr, visited) {
    // 다음 스텝 준비, 아래 예시
    let cnt = 0;
    const dx = [-1, 1, 0, 0];     // 상하좌우 행열 좌표
    const dy = [0, 0, -1, 1];

    while(조건){
        //dx dy 이용해서 arr값 확인 , visited 방문처리
        for(let k = 0; k < 4; k++){
            // 4방향, '조건' push, v[현재] = true
        }
    }
```
