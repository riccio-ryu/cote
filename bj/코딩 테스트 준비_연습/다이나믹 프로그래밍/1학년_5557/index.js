// 2025

const fs = require('fs');

const solution = (N, numbers) => {
  const dp = Array.from({ length: N - 1 }, () => new Array(21).fill(BigInt(0)));

  dp[0][numbers[0]] += BigInt(1);
  for (let i = 1; i < N - 1; i++) {
    for (let j = 0; j <= 20; j++) {
      if (dp[i - 1][j]) {
        if (j + numbers[i] <= 20) dp[i][j + numbers[i]] += dp[i - 1][j];
        if (j - numbers[i] >= 0) dp[i][j - numbers[i]] += dp[i - 1][j];
      }
    }
  }

  return dp[N - 2][numbers[N - 1]].toString();
};

input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

console.log(solution(N, numbers));

/*
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
*/
