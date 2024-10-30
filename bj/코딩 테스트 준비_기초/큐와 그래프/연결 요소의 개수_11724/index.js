// 2024

let [[n, m], ...num] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((q) =>
    q
      .replace(/\n|\r*/g, "")
      .split(" ")
      .map(Number)
  );
// console.log(n, m, num);

const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(false);

// 그래프 구성 (양방향)
for (let [a, b] of num) {
  graph[a].push(b);
  graph[b].push(a);
}

// console.log(graph);

function dfs(v) {
  visited[v] = true;
  for (let next of graph[v]) {
    if (!visited[next]) dfs(next);
  }
}

let count = 0;

for (let i = 1; i <= n; i++) {
  // console.log(i, visited[i]);
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}

console.log(count);
