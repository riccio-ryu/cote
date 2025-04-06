// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const N = parseInt(input[0]);
const board = input.slice(1).map((line) => line.split(" ").map(Number));

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function bfs(startX, startY, size) {
  const queue = [[startX, startY, 0]];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[startX][startY] = true;
  const possibleFishes = [];

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
        if (board[nx][ny] === 0 || board[nx][ny] === size) {
          queue.push([nx, ny, dist + 1]);
          visited[nx][ny] = true;
        } else if (board[nx][ny] < size) {
          possibleFishes.push([nx, ny, dist + 1]);
          visited[nx][ny] = true;
        }
      }
    }
  }

  if (possibleFishes.length === 0) return null;
  possibleFishes.sort((a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1]);
  return possibleFishes[0];
}

let sharkX,
  sharkY,
  sharkSize = 2,
  eatCount = 0,
  time = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 9) {
      sharkX = i;
      sharkY = j;
      board[i][j] = 0;
    }
  }
}

while (true) {
  const fish = bfs(sharkX, sharkY, sharkSize);
  if (!fish) break;

  const [fx, fy, dist] = fish;
  board[fx][fy] = 0;
  sharkX = fx;
  sharkY = fy;
  time += dist;
  eatCount++;
  if (eatCount === sharkSize) {
    sharkSize++;
    eatCount = 0;
  }
}

console.log(time);
