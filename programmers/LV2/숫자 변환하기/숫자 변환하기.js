//2023

// 다른사람 풀이를 보니, set이나 map으로 하는 편이 조금더 쉬워 보임

// 2차
function solution(x, y, n) {
    const dp = new Array(y+1).fill(-1);  // false 보다는 숫자를 더하자
    dp[x] = 0;   // 0~y, x에 true
    // console.log(dp)
    for(let i = x;i<=y;i++){
        // console.log('---- ', i)
        if(dp[i] === -1){
            continue;
        }
        // 조건문 안에 조건if는 미래(+n or *2 or *3)에서 dp배열에 -1로 표기 되있는지
        // 방문 안되어 있다면 dp의 연산후는 현재dp인덱스+1만큼(0보다 크게 만든다 => 최초의 dp[x]=0이기 때문)
        // else, dp 연산후는 '연산후 와 현재인덱스 +1'의 비교, 연산된 도착지가 현재 +1보다 크면 현재+1 작으면 연산 후(적은쪽)
        // 입출력 예의 10 / 40 / 5 를 보면 +5도 20에 방문 가능 *2도 20에 방문 가능 하지만 2번 방문이 아니라, 이렇게되면 최소 연산이 되야하니 +5는 두번만에 와야하고 *2는 한번만에 온다. 즉, *2로 한번에 와야 최소 연산
        if(i+n <= y){
            // console.log('+', dp[i], dp[i+n])
            if(dp[i+n] === -1) dp[i+n] = dp[i]+1
            else dp[i+n] = dp[i+n] > dp[i]+1 ? dp[i]+1 : dp[i+n]
            // console.log('++', i+n, dp[i+n])
        }
        if(i*2 <= y){
            // console.log('2', dp[i], dp[i*2])
            if(dp[i*2] === -1) dp[i*2] = dp[i]+1
            else dp[i*2] = dp[i*2] > dp[i]+1 ? dp[i]+1 : dp[i*2]
            // console.log('22', i*2, dp[i*2])
        }
        if(i*3 <= y){
            // console.log('3', dp[i], dp[i*3])
            if(dp[i*3] === -1) dp[i*3] = dp[i]+1
            else dp[i*3] = dp[i*3] > dp[i]+1 ? dp[i]+1 : dp[i*3]
            // console.log('33', i*3, dp[i*3])
        }
    }
    // console.log('~~~~ ', dp)
    return dp[y]
}

// 예상 실패 사유 : DFS나 BFS로 풀다가 시간 초과가 나오면 DP를 도전해보라고 한다. (dp? Dynamic Programming), 큰 문제를 작은 하위 문제로 나누어 해결하는 알고리즘
// 참고 : https://velog.io/@gusdh2/DP-vs-DFS

//1차 50.0/100 : 런타임 에러, 시간초과 등
function solution(x, y, n) {
    const times = []
    function dfs(time, num) {
        if(num === y) {
            times.push(time)
            return
        } else if (num > y) {
            return
        }
        dfs(time+1, num+n)
        dfs(time+1, num*2)
        dfs(time+1, num*3)
        
        return
    }
    
    dfs(0, x)
    
    if(!times.length) return -1
    return Math.min(...times)
}
