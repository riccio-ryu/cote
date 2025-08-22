// 2025
// 파이프 옮기기 1_17070과 동일;;;


const input = require("fs").readFileSync("example.txt").toString().trim().split("\n").map(line => line.split(" ").map(Number)); // 1번줄 유지
const [n] = input[0];
const arr = input.slice(1, n + 1);

const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => [0, 0, 0]));
// console.log(dp)

dp[0][1][0] = arr[0][0] === 0 && arr[0][1] === 0 ? 1 : 0;
// console.log(dp)
for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        // console.log(`y: ${y}, x: ${x}, arr[y][x]: ${arr[y][x]} dp: `, dp);
        if (arr[y][x] === 1) continue;
        // 가로
        if (x - 1 >= 0) {
            dp[y][x][0] += dp[y][x - 1][0] + dp[y][x - 1][2];
        }
        // 세로
        if (y - 1 >= 0) {
            dp[y][x][1] += dp[y - 1][x][1] + dp[y - 1][x][2];
        }
        // 대각선
        if (y - 1 >= 0 && x - 1 >= 0) {
            if (arr[y - 1][x] === 0 && arr[y][x - 1] === 0) {
                dp[y][x][2] += dp[y - 1][x - 1][0] + dp[y - 1][x - 1][1] + dp[y - 1][x - 1][2];
            }
        }
        // console.log(`dp : `, dp)
    }
}

const answer = dp[n - 1][n - 1][0] + dp[n - 1][n - 1][1] + dp[n - 1][n - 1][2];
console.log(answer);
