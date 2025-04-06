// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const N = parseInt(input[0]);
const grid = input.slice(1).map((line) => line.split(""));
// console.log(N, grid);

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const dfs = (x, y, color, visited, board) => {
  const stack = [[x, y]];
  visited[x][y] = true;

  while (stack.length) {
    const [cx, cy] = stack.pop();

    for (const [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (!visited[nx][ny] && board[nx][ny] === color) {
          visited[nx][ny] = true;
          stack.push([nx, ny]);
        }
      }
    }
  }
};

let normalCount = 0;
const visited1 = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited1[i][j]) {
      dfs(i, j, grid[i][j], visited1, grid);
      normalCount++;
    }
  }
}

let colorBlindCount = 0;
const visited2 = Array.from({ length: N }, () => Array(N).fill(false));
const colorBlindGrid = grid.map((row) =>
  row.map((cell) => (cell === "G" ? "R" : cell))
);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited2[i][j]) {
      dfs(i, j, colorBlindGrid[i][j], visited2, colorBlindGrid);
      colorBlindCount++;
    }
  }
}

console.log(`${normalCount} ${colorBlindCount}`);
