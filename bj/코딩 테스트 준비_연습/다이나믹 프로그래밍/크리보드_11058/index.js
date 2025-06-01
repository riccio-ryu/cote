// 2025

const input = require("fs").readFileSync("example.txt").toString().trim();
// .split("\n");

const dp = Array(input + 1).fill(0);

for (let i = 1; i <= input; i++) {
  // A
  dp[i] = dp[i - 1] + 1;

  // 복붙
  for (let j = 1; j <= i - 3; j++) {
    dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
  }
}

console.log(dp[input]);
