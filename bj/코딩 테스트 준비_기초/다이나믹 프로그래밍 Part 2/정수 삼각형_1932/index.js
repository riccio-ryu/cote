// 2024

const [n, ...triangle] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" ").map((s) => Number(s.replace(/\n|\r|\s*/g, ""))));

let dp = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
dp[0][0] = triangle[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + triangle[i][j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }
}

console.log(Math.max(...dp[n - 1]));
