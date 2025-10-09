// 2025

// index.js  (example.txt로 실행)
const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split(/\r?\n/);

const [N, M] = input[0].split(/\s+/).map(Number);
const map = input.slice(1).map((line) => line.split(" ").map(Number));
// console.log(N, M, map);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

// 1. 섬 라벨링
let islandId = 0;
const islandMap = Array.from({ length: N }, () => Array(M).fill(0));

function bfs(sx, sy, id) {
  const q = [[sx, sy]];
  islandMap[sx][sy] = id;
  while (q.length) {
    const [x, y] = q.shift();
    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (map[nx][ny] === 1 && islandMap[nx][ny] === 0) {
        islandMap[nx][ny] = id;
        q.push([nx, ny]);
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1 && islandMap[i][j] === 0) {
      islandId++;
      bfs(i, j, islandId);
    }
  }
}

const edges = [];
function findBridge(x, y, id) {
  for (let d = 0; d < 4; d++) {
    let nx = x + dx[d];
    let ny = y + dy[d];
    let length = 0;
    while (nx >= 0 && ny >= 0 && nx < N && ny < M) {
      if (islandMap[nx][ny] === id) break; // 같은 섬
      if (islandMap[nx][ny] > 0 && islandMap[nx][ny] !== id) {
        if (length >= 2) {
          edges.push([length, id, islandMap[nx][ny]]);
        }
        break;
      }
      if (islandMap[nx][ny] === 0) {
        length++;
        nx += dx[d];
        ny += dy[d];
      } else break;
    }
  }
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (islandMap[i][j] > 0) {
      findBridge(i, j, islandMap[i][j]);
    }
  }
}

edges.sort((a, b) => a[0] - b[0]);
const parent = Array(islandId + 1)
  .fill(0)
  .map((_, i) => i);

function find(x) {
  if (parent[x] !== x) parent[x] = find(parent[x]);
  return parent[x];
}
function union(a, b) {
  a = find(a);
  b = find(b);
  if (a !== b) parent[b] = a;
}

let result = 0,
  cnt = 0;
for (const [cost, a, b] of edges) {
  if (find(a) !== find(b)) {
    union(a, b);
    result += cost;
    cnt++;
  }
}

let root = find(1);
for (let i = 2; i <= islandId; i++) {
  if (find(i) !== root) {
    console.log(-1);
    process.exit(0);
  }
}
console.log(result);
