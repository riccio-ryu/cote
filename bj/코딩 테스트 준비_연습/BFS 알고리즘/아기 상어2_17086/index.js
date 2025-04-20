// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(" ").map(Number));

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const distance = Array.from({ length: N }, () => Array(M).fill(0));
const queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      queue.push([i, j]);
      visited[i][j] = true;
    }
  }
}

while (queue.length) {
  const [x, y] = queue.shift();

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
      visited[nx][ny] = true;
      distance[nx][ny] = distance[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

let maxDist = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    maxDist = Math.max(maxDist, distance[i][j]);
  }
}

console.log(maxDist);
