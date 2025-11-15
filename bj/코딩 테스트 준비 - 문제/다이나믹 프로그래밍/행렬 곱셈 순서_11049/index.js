// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0]);
const r = [];
const c = [];

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  r[i] = a;
  c[i] = b;
}

const dp = Array.from({ length: n + 1 }, () =>
  Array(n + 1).fill(0)
);

// len = 행렬 개수 구간 길이
for (let len = 2; len <= n; len++) {
  for (let i = 1; i + len - 1 <= n; i++) {
    const j = i + len - 1;
    dp[i][j] = Infinity;

    for (let k = i; k < j; k++) {
      const cost = dp[i][k] + dp[k + 1][j] + r[i] * c[k] * c[j];
      dp[i][j] = Math.min(dp[i][j], cost);
    }
  }
}

console.log(dp[1][n]);
