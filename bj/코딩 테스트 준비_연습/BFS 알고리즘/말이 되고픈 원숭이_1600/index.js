// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const K = Number(input[0]);
const [W, H] = input[1].split(" ").map(Number);
const map = input.slice(2).map((line) => line.split(" ").map(Number));
// console.log(K, W, H, map);

const horseMoves = [
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
];
const normalMoves = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const visited = Array.from({ length: H }, () =>
  Array.from({ length: W }, () => Array(K + 1).fill(false))
);

const bfs = () => {
  const queue = [[0, 0, 0, 0]]; // y, x, moveCount, horseUsed
  visited[0][0][0] = true;

  while (queue.length) {
    const [y, x, count, horse] = queue.shift();

    // 도착
    if (y === H - 1 && x === W - 1) return count;

    // 말처럼 이동
    if (horse < K) {
      for (const [dy, dx] of horseMoves) {
        const ny = y + dy;
        const nx = x + dx;
        const nh = horse + 1;

        if (
          ny >= 0 &&
          ny < H &&
          nx >= 0 &&
          nx < W &&
          map[ny][nx] === 0 &&
          !visited[ny][nx][nh]
        ) {
          visited[ny][nx][nh] = true;
          queue.push([ny, nx, count + 1, nh]);
        }
      }
    }

    // 일반 이동
    for (const [dy, dx] of normalMoves) {
      const ny = y + dy;
      const nx = x + dx;

      if (
        ny >= 0 &&
        ny < H &&
        nx >= 0 &&
        nx < W &&
        map[ny][nx] === 0 &&
        !visited[ny][nx][horse]
      ) {
        visited[ny][nx][horse] = true;
        queue.push([ny, nx, count + 1, horse]);
      }
    }
  }

  return -1;
};

console.log(bfs());
