// 2024

let [X, ...Y] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" ").map((q) => Number(q.replace(/\n|\r*/g, ""))));
// console.log(X, Y);
const [N, M] = X;
const g = Array.from({ length: N }, () => []);

for (let i = 0; i < M; i++) {
  const [a, b] = Y[i];
  g[a].push(b);
  g[b].push(a);
}

let visited = Array(N).fill(false);
let found = false;

function dfs(node, depth) {
  if (depth === 4) {
    found = true;
    return;
  }

  visited[node] = true;

  for (let next of g[node]) {
    if (!visited[next]) {
      dfs(next, depth + 1);
    }
    if (found) return;
  }

  visited[node] = false;
}

for (let i = 0; i < N; i++) {
  if (!found) {
    dfs(i, 0);
  }
}

console.log(found ? 1 : 0);
