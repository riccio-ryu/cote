// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

// console.log(input);

const N = +input[0];
const arr = [0, ...input[1].split(" ").map(Number)];
const M = +input[2];
const queries = input.slice(3).map((line) => line.split(" ").map(Number));

// DP 초기화
const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));

for (let i = 1; i <= N; i++) {
  dp[i][i] = true;
}

for (let i = 1; i < N; i++) {
  if (arr[i] === arr[i + 1]) dp[i][i + 1] = true;
}

for (let len = 3; len <= N; len++) {
  for (let s = 1; s <= N - len + 1; s++) {
    const e = s + len - 1;
    if (arr[s] === arr[e] && dp[s + 1][e - 1]) {
      dp[s][e] = true;
    }
  }
}
// console.log(dp);
let result = "";
for (const [s, e] of queries) {
  result += dp[s][e] ? "1\n" : "0\n";
}
console.log(result);
