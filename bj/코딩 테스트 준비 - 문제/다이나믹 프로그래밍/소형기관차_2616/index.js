// 2025


const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split("\n");
  // .split(" ").map(Number);

// console.log(input);
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const m = Number(input[2]);

// console.log(n, arr, m)
// prefix sum
const prefix = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  prefix[i] = prefix[i - 1] + arr[i - 1];
}
// console.log(prefix);

const sum = (l, r) => prefix[r] - prefix[l - 1];

const dp = Array.from({ length: n + 1 }, () => Array(4).fill(0));

for (let j = 1; j <= 3; j++) {
  // j는 기관차 (총 3대)
  for (let i = j * m; i <= n; i++) {
    // console.log(j, i)
    dp[i][j] = Math.max(
      dp[i - 1][j],
      dp[i - m][j - 1] + sum(i - m + 1, i)
    );
    // console.log('dp :: ', dp)
  }
}

console.log(dp[n][3]);
