// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

  // console.log(input);

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map(line => line.split(""));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// console.log(N,M, map)
let start = null;
const customers = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "S") start = [i, j];
    if (map[i][j] === "C") customers.push([i, j]);
  }
}
// console.log(start, customers);
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () =>
    Array.from({ length: 4 }, () =>
      Array.from({ length: 2 }, () => Array(2).fill(false))
    )
  )
);
// console.log('v : ', visited)
const q = [];
let head = 0;

// 시작점 (방향 없음 = -1)
q.push([start[0], start[1], -1, 0, 0, 0]); // x, y, dir, a, b, dist

while (head < q.length) {
  const [x, y, dir, a, b, dist] = q[head++];

  if (a && b) {
    console.log(dist);
    process.exit(0);
  }

  for (let nd = 0; nd < 4; nd++) {
    if (nd === dir) continue; // 같은 방향은 불가능
    const nx = x + dx[nd];
    const ny = y + dy[nd];

    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if (map[nx][ny] === "#") continue;

    let na = a;
    let nb = b;

    if (nx === customers[0][0] && ny === customers[0][1]) na = 1;
    if (nx === customers[1][0] && ny === customers[1][1]) nb = 1;

    if (!visited[nx][ny][nd][na][nb]) {
      visited[nx][ny][nd][na][nb] = true;
      q.push([nx, ny, nd, na, nb, dist + 1]);
    }
  }
}

console.log(-1);
