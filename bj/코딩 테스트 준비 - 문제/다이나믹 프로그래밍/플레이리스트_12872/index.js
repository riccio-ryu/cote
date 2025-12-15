// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split(" ").map(Number);

const [N,M,P] = input
// console.log(N,M,P)
const MOD = 1000000007;

const dp = Array.from({ length: P + 1 }, () =>
  Array(N + 1).fill(0)
);

dp[0][0] = 1;
// console.log(dp)
for (let i = 1; i <= P; i++) {
  for (let j = 1; j <= Math.min(i, N); j++) {
    // console.log(' dp :: ', i, j, dp)
    // 새 노래 추가
    dp[i][j] = (dp[i][j] +
      dp[i - 1][j - 1] * (N - (j - 1))) % MOD;
// console.log(' dp new :: ', i, j, dp)
    // 기존 노래 재사용
    if (j > M) {
      dp[i][j] = (dp[i][j] +
        dp[i - 1][j] * (j - M)) % MOD;
        // console.log(' dp ++ :: ', i, j, dp)
    }
    // console.log('------------------------')
  }
}

console.log(dp[P][N]);
