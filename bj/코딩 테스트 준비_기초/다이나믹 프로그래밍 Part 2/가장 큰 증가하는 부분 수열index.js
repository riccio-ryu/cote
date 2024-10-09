// 2024

let [N, A] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r/g, ""));
N = parseInt(N);
A = A.split(" ").map(Number);

let dp = [...A];

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      dp[i] = Math.max(dp[i], dp[j] + A[i]);
    }
  }
}

console.log(Math.max(...dp));
