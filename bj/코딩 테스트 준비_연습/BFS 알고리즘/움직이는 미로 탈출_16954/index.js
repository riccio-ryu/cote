// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const N = 8;
let board = input.map((line) => line.split(""));

// 🔹 이동 방향 (8방향 + 제자리 포함)
const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 0],
];

function bfs() {
  let queue = new Set();
  queue.add("7 0 0"); // (x, y, time) → 시작점
  let visited = new Set();
  visited.add("7 0 0");

  while (queue.size > 0) {
    let nextQueue = new Set();

    for (let q of queue) {
      let [x, y, time] = q.split(" ").map(Number);

      // 성공
      if (x === 0 && y === 7) return 1;

      // 탈락
      if (board[x][y] === "#") continue;

      // 이동
      for (const [dx, dy] of directions) {
        let nx = x + dx;
        let ny = y + dy;

        if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
          if (
            board[nx][ny] === "." &&
            !visited.has(`${nx} ${ny} ${time + 1}`)
          ) {
            nextQueue.add(`${nx} ${ny} ${time + 1}`);
            visited.add(`${nx} ${ny} ${time + 1}`);
          }
        }
      }
    }

    // 벽 이동
    board = moveWalls(board);

    // 큐 업데이트
    queue = nextQueue;
  }

  return 0;
}

// 벽 아래로
function moveWalls(board) {
  let newBoard = Array.from({ length: N }, () => Array(N).fill("."));

  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === "#") {
        newBoard[i + 1][j] = "#";
      }
    }
  }

  return newBoard;
}

console.log(bfs());
