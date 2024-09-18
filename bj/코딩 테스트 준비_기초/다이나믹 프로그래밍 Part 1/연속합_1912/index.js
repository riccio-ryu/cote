// 2024

let [N, P] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r/g, ""));
N = parseInt(N);
P = P.split(" ").map(Number);

let dp = Array(N).fill(0);
dp[0] = P[0];

for (let i = 1; i < N; i++) {
  // console.log(i, dp[i - 1] + P[i], P[i], Math.max(dp[i - 1] + P[i], P[i]), dp);
  dp[i] = Math.max(dp[i - 1] + P[i], P[i]);
}

console.log(Math.max(...dp));
