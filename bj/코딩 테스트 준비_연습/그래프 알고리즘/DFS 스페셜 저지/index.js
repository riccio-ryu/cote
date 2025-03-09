//2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const N = parseInt(input[0]);
const bfsOrder = input[N].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

for (let i = 1; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// console.log(N, bfsOrder, graph, visited);

const order = Array(N + 1).fill(0);
for (let i = 0; i < N; i++) {
  order[bfsOrder[i]] = i; // BFS 탐색 순서를 저장 (노드 → 순서)
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((x, y) => order[x] - order[y]);
}

// console.log(order, graph);

function isValidBFS() {
  let stack = [1];
  visited[1] = true;
  let index = 0;

  while (stack.length > 0) {
    const node = stack.pop();

    if (node !== bfsOrder[index]) return 0;
    index++;

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        stack.push(next);
      }
    }
  }
  return 1;
}

console.log(isValidBFS());
