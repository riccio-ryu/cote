// 2024

const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim(), 10);

let dp = Array(input + 1).fill(0);
dp[0] = 1;

if (input >= 2) {
  dp[2] = 3;
}

for (let i = 4; i <= input; i += 2) {
  dp[i] = dp[i - 2] * 3;
  for (let j = i - 4; j >= 0; j -= 2) {
    dp[i] += dp[j] * 2;
  }
}

console.log(dp[input]);
