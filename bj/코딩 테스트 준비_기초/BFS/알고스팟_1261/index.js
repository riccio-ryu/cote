// 2024

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [m, n] = input[0].split(" ").map(Number); // m: 가로, n: 세로
const maze = input.slice(1).map((line) => line.split("").map(Number));

// console.log(m, n, maze);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  const arr = [];
  const visited = Array.from({ length: n }, () => Array(m).fill(Infinity));
  arr.push([0, 0, 0]);
  visited[0][0] = 0;

  while (arr.length) {
    const [x, y, cost] = arr.shift();

    if (x === n - 1 && y === m - 1) {
      return cost;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        const nextCost = cost + maze[nx][ny];
        if (visited[nx][ny] > nextCost) {
          visited[nx][ny] = nextCost;

          if (maze[nx][ny] === 0) {
            arr.unshift([nx, ny, nextCost]);
          } else {
            arr.push([nx, ny, nextCost]);
          }
        }
      }
    }
  }
}

console.log(bfs());
