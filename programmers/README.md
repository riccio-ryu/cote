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

## dfs & bfs
const visited = new Array(n).fill(0)  
를 활용하자  
BFS 사용 예  
- 최단거리, 최소 횟수, 미로, 탐색 등

DFS 사용 예  
- 경우의 수, 이동 과정에 제약 있음 등
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

### DP
따로 임시 저장 공간을 할당하여, 전에 계산했던, 값을 다시 재사용하여 중복되는 계산을 줄이기 위해 사용됩니다.  

보통 DP는 재귀적인 호출로 구현하는 Top-Down방식과, 낮은 문제의 답을 쉽게 구할 수 있을 때, 순차적으로 for문으로 구현하는 Bottom-Up 방식으로 갈리게 됩니다.

- Top-Down은 상위 개념에서 한 번에 점화식을 찾아낼 수 있고, 이 점화식이 한 또다른 점화식을 도출해낼 수 있을 때 구현하면, 사용하기 좋습니다.

- Bottom-Up은 낮은 문제부터 빌드업해 나가는 방식으로, 낮은 문제의 정답을 확실히 구할 수 있는 경우에 사용하면 좋은 방식입니다.


### 알아두면 좋은 정규표현식
```javascript
const expression = "100-200*300-500+20"
const es = expression.split(/(\D)/)    // D는 숫자 제외
console.log(es)    //	['100', '-', '200', '*', '300', '-', '500', '+', '20']
```

### 정해진 숫자의 배열의 중복 안되는 조합 구하기
```javascript
function getCombination(arr,selectNum){
    const result = [];                                               // 결과값을 담은 배열선언 
    if(selectNum === 1) {                                            // selectNum 이 1 일 때 (재귀함수의 종료조건, 탈출구!)
        return arr.map(a=>[a])                                       // ex) [[2], [3]] 이런식으로 값이 리턴된다 
    }
    arr.forEach((fix,i,origin)=>{
        const rest=origin.slice(i+1);                                // 처음 하나(fixedNum)를 제외한 나머지를 배열로 만들기 ex) 1을 제외하면 [2, 3, 4]
        const combi=getCombination(rest,selectNum-1);                // selectNum === 1 이 되서 배열을 리턴하며 종료할 때까지 재귀된다
        const attach=combi.map((c)=>[fix,...c]);                     // 앞에서 따로 뺴놓은 첫번째 수(fixedNum)를 각각 배열 값에 추가해주자
        result.push(...attach)                                       // reuslt 배열에 push 해준다    // (spread를 사용하는 이유는 반환된 배열들을 한 배열 안으로 넣기 위해서이다)
    }) 
    return result;
}

getCombination([1,2,3,4], 3);
```

### Array
```javascript
//Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

Array.from({length:3}, () => 0)
// expected output: Array [0, 0, 0]

//nums is array ex
Array.from(new Set(...[nums]))

// if n = 3
const arr = new Array(n).fill(1)
// Array [1,1,1]
```

### 진수변환
```javascript
let num = 67
let n2 = num.toString(2)    // 1000011
parseInt(n2, 2);            // 67
```
