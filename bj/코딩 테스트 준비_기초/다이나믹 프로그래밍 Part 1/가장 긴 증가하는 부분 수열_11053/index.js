// 2024

const input = require("fs").readFileSync("example.txt").toString().split("\n");
const N = parseInt(input[0]);
const A = input[1].split(" ").map(Number);
// console.log(N, A);
dp = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    // console.log(i, j, A[j] < A[i], A[j], A[i]);
    if (A[j] < A[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
      // console.log(i, j, dp[i], dp[j], dp);
    }
  }
}
console.log(Math.max(...dp));
