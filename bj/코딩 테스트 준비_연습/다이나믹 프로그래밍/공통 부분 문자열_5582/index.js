// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [A, B] = [...input];

const n = A.length;
const m = B.length;

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

let maxLength = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (A[i - 1] === B[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
      maxLength = Math.max(maxLength, dp[i][j]);
    }
  }
}

console.log(maxLength);
