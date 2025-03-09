// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const N = parseInt(input[0]);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= N; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

// console.log(N, graph);

let cycle = Array(N + 1).fill(false);
let visited = Array(N + 1).fill(false);

function findCycle(node, prev, path) {
  if (visited[node]) {
    let cycleStart = path.indexOf(node);
    if (cycleStart !== -1) {
      for (let i = cycleStart; i < path.length; i++) {
        cycle[path[i]] = true;
      }
      return true;
    }
    return false;
  }

  visited[node] = true;
  path.push(node);

  for (const next of graph[node]) {
    if (next !== prev) {
      if (findCycle(next, node, path)) return true;
    }
  }

  path.pop();
  return false;
}
findCycle(1, -1, []);

// console.log(cycle, visited);

function bfs() {
  let queue = [];
  let distance = Array(N + 1).fill(-1);

  for (let i = 1; i <= N; i++) {
    if (cycle[i]) {
      queue.push(i);
      distance[i] = 0;
    }
  }

  let index = 0;
  while (index < queue.length) {
    const current = queue[index++];

    for (const next of graph[current]) {
      if (distance[next] === -1) {
        distance[next] = distance[current] + 1;
        queue.push(next);
      }
    }
  }

  return distance.slice(1);
}

console.log(bfs().join(" "));

