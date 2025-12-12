// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split("\n");

// console.log(input)
const n = +input[0];
const arr = input[1].split(' ').map(Number);
// console.log(n, arr);
const dp = Array.from({ length: n }, () => Array(n).fill(0));

// 길이 1부터 N까지 확장
for (let len = 2; len <= n; len++) {
  for (let l = 0; l + len - 1 < n; l++) {
    const r = l + len - 1;

    dp[l][r] = dp[l + 1][r]; // 기본: l을 매칭하지 않음

    for (let k = l + 1; k <= r; k++) {
      if (arr[k] === arr[l]) {
        let add = 1;
        if (k > l + 1) add += dp[l + 1][k - 1];
        if (k < r) add += dp[k + 1][r];

        dp[l][r] = Math.max(dp[l][r], add);
      }
    }
  }
}
// console.log(dp)
console.log(dp[0][n - 1]);
