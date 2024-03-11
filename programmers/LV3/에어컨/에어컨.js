/*
-10 ~ 40  -> 0 ~ 50
... 개어렵다.
반드시 생각해야하는 문제가 
1. 온도 올리기 (에어컨 가동 -> 비용 a)
2. 온도 유지 (에어컨 가동 -> 비용 b) + (목표온도 = 외부온도 -> 비용 0)
3. 온도 하강 (에어컨 끄기 -> 비용 0)
특히, (목표온도 = 외부온도 -> 비용 0) 부분을 생각해야한다.
*/

function solution(temperature, t1, t2, a, b, onboard) {
    // 에어컨 키는 것은 무조건 온도 증가 행위임을 나타내기 위해 temp 재설정
    let temp = temperature > t2 ? t1 - (temperature - t2) : temperature;
    const INF = 987654321;
    // 외부온도를 0으로 맞춰줌
    t1 -= temp;
    t2 -= temp;
    temp = 0;
// console.log(t1, t2, temp)
    // dp[x][y] : x분에 y온도를 맞추기 위한 최소 비용
    // 최대온도는 t2를 초과할 필요가 없음
    let dp = Array.from(Array(onboard.length), () => Array(t2 + 2).fill(INF));
    dp[0][0] = 0;
    for (let i = 1; i < onboard.length; i++) {  // 0번 인덱스는 x
        // 다음 3가지 케이스 중 하나
        // 1. 온도 올리기 (에어컨 가동 -> 비용 a)
        // 2. 온도 유지 (에어컨 가동 -> 비용 b) + (목표온도 = 외부온도 -> 비용 0)
        // 3. 온도 하강 (에어컨 끄기 -> 비용 0)
        for (let j = 0; j <= t2 + 1; j++) {
            // console.log('j : ', j)
            // 탑승중일때 온도 범위 벗어나면 구하지 않음
            if (onboard[i] === 1 && (j < t1 || j > t2)) continue;
            let min = INF;
            // 1. 외부온도 == 목표온도
            if (j === 0) {
                // 온도 올리기
                // x
                // 온도 유지하기
                // console.log('0 same ', min, dp[i-1][j])
                min = Math.min(min, dp[i-1][j]);
                // 온도 내리기
                if (j + 1 <= t2 + 1) {
                    // console.log('0 down ', min, dp[i-1][j+1])
                    min = Math.min(min, dp[i-1][j+1]);
                }
            }
            // 2. 외부온도 != 목표온도
            else {
                // 온도 올리기
                if (j - 1 >= 0) {
                    // console.log('1 up ', min, dp[i-1][j-1])
                    min = Math.min(min, dp[i-1][j-1] + a);
                }
                // 온도 유지하기
                // console.log('1 same ', min, dp[i-1][j])
                min = Math.min(min, dp[i-1][j] + b);
                // 온도 내리기
                if (j + 1 <= t2 + 1) {
                    // console.log('1 down ', min, dp[i-1][j+1])
                    min = Math.min(min, dp[i-1][j+1]);
                }
            }
            dp[i][j] = min;
            // console.log('i j ', i, j, min, dp)
        }
    }
// console.log(dp)
    let result = Infinity;
    for (let j = 0; j <= t2 + 1; j++){
        // console.log(result, dp[onboard.length-1][j])
        result = Math.min(result, dp[onboard.length-1][j]);
    }
    return result;
}
