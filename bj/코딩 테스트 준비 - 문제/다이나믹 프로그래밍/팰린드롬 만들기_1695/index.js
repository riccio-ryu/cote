// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split("\n")


const N = +input[0]
const arr = input[1].split(" ").map(Number)
// console.log(N, arr)

const dp = Array.from({ length: N }, () => Array(N).fill(0));

for (let len = 2; len <= N; len++) {
  for (let i = 0; i + len - 1 < N; i++) {
    const j = i + len - 1;
    console.log(dp)
    if (arr[i] === arr[j]) {ㅌ
      dp[i][j] = dp[i + 1][j - 1];
    } else {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
    }
  }
}

console.log(dp[0][N - 1]);
