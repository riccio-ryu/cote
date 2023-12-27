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

### 알아두면 좋은 정규표현식
```javascript
const expression = "100-200*300-500+20"
const es = expression.split(/(\D)/)    // D는 숫자 제외
console.log(es)    //	['100', '-', '200', '*', '300', '-', '500', '+', '20']
```

### 정해진 숫자의 배열의 중복 안되는 조합 구하기
```javascript
function getCombination(arr, selectNum){
    const result = [];                                               // 결과값을 담은 배열선언 
    if(selectNum === 1) {                                            // selectNum 이 1 일 때 (재귀함수의 종료조건, 탈출구!)
        return arr.map(item => [item])                               // ex) [[2], [3]] 이런식으로 값이 리턴된다 
    }
    arr.forEach((fixedNum, index, a) => {
        const rest = a.slice(index + 1);                           // 처음 하나(fixedNum)를 제외한 나머지를 배열로 만들기 ex) 1을 제외하면 [2, 3, 4]
        const combination = getCombination(rest, selectNum - 1);     // selectNum === 1 이 되서 배열을 리턴하며 종료할 때까지 재귀된다
        const attached = combination.map(c => [fixedNum, ...c])      // 앞에서 따로 뺴놓은 첫번째 수(fixedNum)를 각각 배열 값에 추가해주자
        reuslt.push(...attached);                                    // reuslt 배열에 push 해준다    // (spread를 사용하는 이유는 반환된 배열들을 한 배열 안으로 넣기 위해서이다)
    }) 
    return result;
}

getCombination([1,2,3,4], 3);
```
