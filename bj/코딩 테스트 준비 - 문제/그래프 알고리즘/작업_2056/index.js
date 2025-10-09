// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input[0]);
const indeg = Array(N + 1).fill(0);
const time = Array(N + 1).fill(0);
const adj = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= N; i++) {
  const parts = input[i].split(" ").map(Number);
  time[i] = parts[0];
  const k = parts[1];
  if (k > 0) {
    for (let j = 0; j < k; j++) {
      adj[parts[2 + j]].push(i);
      indeg[i]++;
    }
  }
}
// console.log(adj);
// 위상 정렬 + DP
const dp = Array(N + 1).fill(0);
const queue = [];

for (let i = 1; i <= N; i++) {
  if (indeg[i] === 0) queue.push(i);
}

while (queue.length) {
  const cur = queue.shift();
  for (let nxt of adj[cur]) {
    dp[nxt] = Math.max(dp[nxt], dp[cur] + time[cur]);
    indeg[nxt]--;
    if (indeg[nxt] === 0) queue.push(nxt);
  }
}

// 모든 작업 완료 시간 = dp[i] + time[i]
let result = 0;
for (let i = 1; i <= N; i++) {
  result = Math.max(result, dp[i] + time[i]);
}

console.log(result);
