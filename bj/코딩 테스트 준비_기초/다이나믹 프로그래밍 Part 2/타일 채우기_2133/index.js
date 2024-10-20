// 2024

let n = require("fs").readFileSync("example.txt").toString().trim();
let dp = Array(n + 1).fill(0);
dp[0] = 1;

if (n >= 2) {
  dp[2] = 3;
}

for (let i = 4; i <= n; i += 2) {
  dp[i] = dp[i - 2] * 3;
  for (let j = i - 4; j >= 0; j -= 2) {
    dp[i] += dp[j] * 2;
  }
}

console.log(dp[n]);
