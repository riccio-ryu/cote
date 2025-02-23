// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(""));

const directions = [
  [-1, 0], // 위
  [1, 0], // 아래
  [0, -1], // 왼쪽
  [0, 1], // 오른쪽
];

let visited = Array.from({ length: N }, () => Array(M).fill(false));
let hasCycle = false;

function dfs(x, y, startX, startY, count) {
  if (hasCycle) return; // 이미 사이클 발견 시 즉시 종료
  visited[x][y] = true;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < M &&
      board[nx][ny] === board[x][y]
    ) {
      if (!visited[nx][ny]) {
        dfs(nx, ny, startX, startY, count + 1);
      } else if (nx === startX && ny === startY && count >= 4) {
        hasCycle = true;
        return;
      }
    }
  }

  visited[x][y] = false; // 백트래킹 (이걸 안 하면 다른 경로 탐색 불가능)
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j]) {
      dfs(i, j, i, j, 1);
      if (hasCycle) break;
    }
  }
  if (hasCycle) break;
}

console.log(hasCycle ? "Yes" : "No");


// 실패

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(""));

// console.log(N, M, board);

const directions = [
  [-1, 0], // 위
  [1, 0], // 아래
  [0, -1], // 왼쪽
  [0, 1], // 오른쪽
];

let visited = Array.from({ length: N }, () => Array(M).fill(false));
let cyc = false;

function dfs(x, y, startX, startY, count) {
  if (cyc) return; // 이미 사이클 발견 시 종료
  visited[x][y] = true;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < M &&
      board[nx][ny] === board[x][y]
    ) {
      if (!visited[nx][ny]) {
        dfs(nx, ny, startX, startY, count + 1);
      } else if (nx === startX && ny === startY && count >= 4) {
        cyc = true;
        return;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j]) {
      dfs(i, j, i, j, 1);
      if (cyc) break;
    }
  }
  if (cyc) break;
}
console.log(cyc ? "Yes" : "No");
