// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const [W, H] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(""));

// console.log(W, H, map);
// 상하좌우 이동
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let start, end;
const INF = Infinity;

const positions = [];
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] === "C") {
      positions.push([i, j]);
    }
  }
}

[start, end] = positions;

const bfs = () => {
  const queue = [];
  const visited = Array.from({ length: H }, () =>
    Array.from({ length: W }, () => Array(4).fill(INF))
  );

  // 시작점에서 4방향 탐색
  for (let d = 0; d < 4; d++) {
    const [dy, dx] = directions[d];
    const ny = start[0] + dy;
    const nx = start[1] + dx;

    if (ny >= 0 && ny < H && nx >= 0 && nx < W && map[ny][nx] !== "*") {
      queue.push([ny, nx, d, 0]); // (y, x, 방향, 거울 개수)
      visited[ny][nx][d] = 0;
    }
  }

  while (queue.length) {
    queue.sort((a, b) => a[3] - b[3]); // 최소 거울 개수 우선
    const [y, x, dir, mirrors] = queue.shift();

    // 도착하면 종료
    if (y === end[0] && x === end[1]) return mirrors;

    for (let d = 0; d < 4; d++) {
      const [dy, dx] = directions[d];
      const ny = y + dy;
      const nx = x + dx;
      const newMirrors = dir === d ? mirrors : mirrors + 1;

      if (
        ny >= 0 &&
        ny < H &&
        nx >= 0 &&
        nx < W &&
        map[ny][nx] !== "*" &&
        visited[ny][nx][d] > newMirrors
      ) {
        visited[ny][nx][d] = newMirrors;
        queue.push([ny, nx, d, newMirrors]);
      }
    }
  }
};

console.log(bfs());
