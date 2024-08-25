// 2024

let [N, P] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r/g, ""));
N = parseInt(N);
P = P.split(" ").map(Number);
// console.log(N, P);

let dp = Array(N + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    // console.log("dp[i] ", i, j, dp, dp[i], dp[i - j], P[j - 1]);
    dp[i] = Math.min(dp[i], dp[i - j] + P[j - 1]);
  }
}

console.log(dp[N]);
