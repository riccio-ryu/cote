// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

// console.log(input);

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(" ").map(Number));

// console.log(N, M, map);
const dp = Array.from({ length: N }, () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    let top = i > 0 ? dp[i - 1][j] : 0;
    let left = j > 0 ? dp[i][j - 1] : 0;
    let diag = i > 0 && j > 0 ? dp[i - 1][j - 1] : 0;
    // console.log(top, left, diag);
    dp[i][j] = Math.max(top, left, diag) + map[i][j];
  }
}
// console.log(dp);
console.log(dp[N - 1][M - 1]);
