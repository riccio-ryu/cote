// 2024

const N = require("fs").readFileSync("example.txt").toString().trim();
const n = parseInt(N);

let dp = Array(n + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j * j <= i; j++) {
    // console.log(i, j, dp[i], dp[i - j * j]); // dp[i - j * j]이전에 있던거
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[n]);
