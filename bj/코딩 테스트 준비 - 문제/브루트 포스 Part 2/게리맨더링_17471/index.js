// 2025


const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const population = input[1].split(" ").map(Number);
const graph = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  const arr = input[2 + i].split(" ").map(Number);
  const cnt = arr[0];
  for (let j = 1; j <= cnt; j++) {
    graph[i].push(arr[j] - 1); // 0-based
  }
}

let ans = Infinity;

// console.log(N, population, graph);
function isConnected(group) {
  const visited = Array(N).fill(false);
  const q = [];
  q.push(group[0]);
  visited[group[0]] = true;
  let count = 1;

  while (q.length) {
    const u = q.shift();
    for (const v of graph[u]) {
      if (group.includes(v) && !visited[v]) {
        visited[v] = true;
        q.push(v);
        count++;
      }
    }
  }

  return count === group.length;
}

// DFS로 부분 집합 생성
function dfs(idx, groupA) {
  if (idx === N) {
    if (groupA.length === 0 || groupA.length === N) return;

    const groupB = [];
    for (let i = 0; i < N; i++) {
      if (!groupA.includes(i)) groupB.push(i);
    }

    if (isConnected(groupA) && isConnected(groupB)) {
      const sumA = groupA.reduce((acc, cur) => acc + population[cur], 0);
      const sumB = groupB.reduce((acc, cur) => acc + population[cur], 0);
      ans = Math.min(ans, Math.abs(sumA - sumB));
    }

    return;
  }

  groupA.push(idx);
  dfs(idx + 1, groupA);
  groupA.pop();
  dfs(idx + 1, groupA);
}

dfs(0, []);

console.log(ans === Infinity ? -1 : ans);
