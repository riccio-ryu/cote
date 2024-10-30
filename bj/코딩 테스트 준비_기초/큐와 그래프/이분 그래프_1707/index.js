// 2024

let [k, ...num] = require("fs")
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

k = k[0];
const result = [];
let idx = 0;

for (let t = 0; t < k; t++) {
  const [V, E] = num[idx++];
  const graph = Array.from({ length: V + 1 }, () => []);
  const color = Array(V + 1).fill(-1);

  for (let i = 0; i < E; i++) {
    const [u, v] = num[idx++];
    graph[u].push(v);
    graph[v].push(u);
  }

  let isBipartite = true;

  function dfs(node, c) {
    color[node] = c;

    for (let next of graph[node]) {
      if (color[next] === -1) {
        if (!dfs(next, 1 - c)) return false;
      } else if (color[next] === color[node]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 1; i <= V; i++) {
    if (color[i] === -1) {
      if (!dfs(i, 0)) {
        isBipartite = false;
        break;
      }
    }
  }

  result.push(isBipartite ? "YES" : "NO");
}

console.log(result.join("\n"));
