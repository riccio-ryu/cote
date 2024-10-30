// 2024

let [[n, m, v], ...num] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((m) =>
    m
      .replace(/\n|\r*/g, "")
      .split(" ")
      .map(Number)
  );

const graph = Array.from({ length: n + 1 }, () => []);
for (let [a, b] of num) {
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

// console.log(graph);

const dfsResult = [];
const visitedDFS = Array(n + 1).fill(false);

function dfs(v) {
  visitedDFS[v] = true;
  dfsResult.push(v);
  for (let next of graph[v]) {
    // console.log(v, next, visitedDFS[next]);
    if (!visitedDFS[next]) dfs(next);
  }
}

const bfsResult = [];
const visitedBFS = Array(n + 1).fill(false);

function bfs(v) {
  const queue = [v];
  visitedBFS[v] = true;

  while (queue.length > 0) {
    const current = queue.shift();
    bfsResult.push(current);
    for (let next of graph[current]) {
      // console.log(current, next, queue);
      if (!visitedBFS[next]) {
        visitedBFS[next] = true;
        queue.push(next);
      }
    }
  }
}

dfs(v);
bfs(v);

// console.log(dfsResult);
// console.log(bfsResult);
console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
