// 2025


const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let idx = 0;

while (true) {
  const [w, h] = input[idx++].split(" ").map(Number);
  if (w === 0 && h === 0) break;

  const map = [];
  const points = [];
  for (let i = 0; i < h; i++) {
    const row = input[idx++].split("");
    map.push(row);
    for (let j = 0; j < w; j++) {
      if (row[j] === "o") points.unshift([i, j]); // 시작 위치는 맨 앞에
      if (row[j] === "*") points.push([i, j]);
    }
  }

  const n = points.length;
  const dist = Array.from({ length: n }, () => Array(n).fill(-1));

  // BFS 거리 계산
  const bfs = (sx, sy) => {
    const visited = Array.from({ length: h }, () => Array(w).fill(false));
    const queue = [[sx, sy, 0]];
    visited[sx][sy] = true;
    const result = Array.from({ length: h }, () => Array(w).fill(-1));

    while (queue.length) {
      const [x, y, d] = queue.shift();
      result[x][y] = d;

      for (const [dx, dy] of directions) {
        const nx = x + dx,
          ny = y + dy;
        if (
          nx >= 0 &&
          nx < h &&
          ny >= 0 &&
          ny < w &&
          !visited[nx][ny] &&
          map[nx][ny] !== "x"
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, d + 1]);
        }
      }
    }

    return result;
  };

  let reachable = true;
  const allDist = [];

  for (let i = 0; i < n; i++) {
    const [x, y] = points[i];
    const dmap = bfs(x, y);
    allDist.push(dmap);

    for (let j = 0; j < n; j++) {
      const [tx, ty] = points[j];
      dist[i][j] = dmap[tx][ty];
      if (dist[i][j] === -1) reachable = false;
    }
  }

  if (!reachable) {
    console.log(-1);
    continue;
  }

  // 순열 탐색
  const permute = (arr, l, r, result) => {
    if (l === r) {
      result.push(arr.slice());
      return;
    }
    for (let i = l; i <= r; i++) {
      [arr[l], arr[i]] = [arr[i], arr[l]];
      permute(arr, l + 1, r, result);
      [arr[l], arr[i]] = [arr[i], arr[l]];
    }
  };

  const orders = [];
  const targets = Array.from({ length: n - 1 }, (_, i) => i + 1);
  permute(targets, 0, targets.length - 1, orders);

  let minDist = Infinity;
  for (const order of orders) {
    let sum = 0;
    let prev = 0;
    for (const next of order) {
      sum += dist[prev][next];
      prev = next;
    }
    minDist = Math.min(minDist, sum);
  }

  console.log(minDist);
}
