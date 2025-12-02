// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split("\n")
  
let [n, data] = input;
n = Number(n);

data = data.split("");

const INF = 1e15;
const dp = Array(n).fill(INF);
dp[0] = 0;

function nextChar(c) {
  if (c === 'B') return 'O';
  if (c === 'O') return 'J';
  return 'B';
}

for (let i = 0; i < n; i++) {
  if (dp[i] === INF) continue;
// console.log(i, dp)
  for (let j = i + 1; j < n; j++) {
    if (data[j] === nextChar(data[i])) {
      const cost = (j - i) * (j - i);
      dp[j] = Math.min(dp[j], dp[i] + cost);
    }
  }
}

const answer = dp[n - 1];
console.log(answer === INF ? -1 : answer);
