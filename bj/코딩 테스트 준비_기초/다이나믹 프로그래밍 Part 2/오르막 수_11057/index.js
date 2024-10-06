// 2024

let N = Number(require("fs").readFileSync("example.txt").toString().trim());

const MOD = 10007;

let dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

// 초기 조건 설정: 길이가 1인 오르막 수
for (let j = 0; j <= 9; j++) {
  dp[1][j] = 1;
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = 0; k <= j; k++) {
      // console.log("-", i, j, k, dp[i][j], dp[i - 1][k]);
      dp[i][j] = (dp[i][j] + dp[i - 1][k]) % MOD;
    }
  }
}
// console.log(dp);
let result = 0;
for (let j = 0; j <= 9; j++) {
  result = (result + dp[N][j]) % MOD;
}

console.log(result);
