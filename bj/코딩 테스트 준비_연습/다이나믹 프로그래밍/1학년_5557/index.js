// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const nums = input[1].split(" ").map(Number);

const dp = Array.from({ length: N - 1 }, () => Array(21).fill(0));
dp[0][nums[0]] = 1;

for (let i = 1; i < N - 1; i++) {
  const cur = nums[i];
  for (let sum = 0; sum <= 20; sum++) {
    if (dp[i - 1][sum] > 0) {
      if (sum + cur <= 20) {
        dp[i][sum + cur] += dp[i - 1][sum];
      }
      if (sum - cur >= 0) {
        dp[i][sum - cur] += dp[i - 1][sum];
      }
    }
  }
}

console.log(dp[N - 2][nums[N - 1]]);
