// 2024

let N = Number(require("fs").readFileSync("example.txt").toString().trim());

const MOD = 9901;

// DP 배열 초기화
let dp = Array.from({ length: N + 1 }, () => [0, 0, 0]);

// 초기 조건 설정
dp[1][0] = 1; // 사자가 없는 경우
dp[1][1] = 1; // 왼쪽에 사자가 있는 경우
dp[1][2] = 1; // 오른쪽에 사자가 있는 경우

for (let i = 2; i <= N; i++) {
  // console.log(i, dp);
  dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % MOD;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
}

const result = (dp[N][0] + dp[N][1] + dp[N][2]) % MOD;
console.log(result);
