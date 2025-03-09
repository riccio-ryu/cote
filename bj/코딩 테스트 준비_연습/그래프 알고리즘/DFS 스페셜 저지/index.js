//2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const N = parseInt(input[0]);
const dfsOrder = input[N].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

for (let i = 1; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// console.log(N, dfsOrder, graph, visited);

const order = Array(N + 1).fill(0);
for (let i = 0; i < N; i++) {
  order[dfsOrder[i]] = i; // BFS 탐색 순서를 저장 (노드 → 순서)
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((x, y) => order[x] - order[y]);
}

// console.log(order, graph);
let index = 0;
function dfs(node) {
  if (node !== dfsOrder[index]) {
    console.log(0);
    process.exit(); // 순서가 다르면 즉시 종료
  }

  visited[node] = true;
  index++;

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

if (dfsOrder[0] !== 1) {
  console.log(0);
} else {
  dfs(1);
  console.log(1);
}

