// 2025


const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const adj = Array.from({ length: N + 1 }, () => []);
const indeg = Array(N + 1).fill(0);

// 간선 입력
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  adj[a].push(b);
  indeg[b]++;
}

// 위상 정렬
const queue = [];
for (let i = 1; i <= N; i++) {
  if (indeg[i] === 0) queue.push(i);
}

const result = [];
while (queue.length) {
  const cur = queue.shift();
  result.push(cur);

  for (let nxt of adj[cur]) {
    indeg[nxt]--;
    if (indeg[nxt] === 0) queue.push(nxt);
  }
}

console.log(result.join(" "));
