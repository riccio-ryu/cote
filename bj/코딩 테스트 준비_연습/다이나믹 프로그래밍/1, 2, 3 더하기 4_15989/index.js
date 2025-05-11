// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input[0];
const nums = input.slice(1).map(Number);

const MAX = 10000;
const dp = Array.from({ length: MAX + 1 }, () => Array(4).fill(0));
// console.log(T, nums, dp);

for (let i = 1; i <= MAX; i++) {
  if (i - 1 >= 0) dp[i][1] = dp[i - 1][1];
  if (i === 1) dp[i][1] = 1;
}
// console.log("1", dp);
for (let i = 1; i <= MAX; i++) {
  if (i - 2 >= 0) dp[i][2] = dp[i - 2][2];
  if (i === 2) dp[i][2] = 1;
  dp[i][2] += dp[i][1];
}
// console.log("2", dp);
for (let i = 1; i <= MAX; i++) {
  if (i - 3 >= 0) dp[i][3] = dp[i - 3][3];
  if (i === 3) dp[i][3] = 1;
  dp[i][3] += dp[i][2];
}
// console.log("3", dp);
let result = "";
for (let n of nums) {
  result += dp[n][3] + "\n";
}
// console.log(dp);
console.log(result);
