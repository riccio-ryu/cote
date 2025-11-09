// 2025


const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

let line = 0;
const [N, M, P] = input[line++].split(" ").map(Number);
const S = input[line++].split(" ").map(Number);

// console.log(N, M, P, S);
const board = Array.from({ length: N }, () => input[line++].trim().split(""));
const queues = Array.from({ length: P }, () => []);
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const cnt = Array(P).fill(0);

const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

// 초기 위치 큐 삽입
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] >= "1" && board[i][j] <= "9") {
      const p = board[i][j].charCodeAt(0) - 49; // '1'→0
      queues[p].push([i, j]);
      visited[i][j] = true;
      cnt[p]++;
    }
  }
}

while (true) {
  let progressed = false;

  for (let p = 0; p < P; p++) {
    let steps = S[p];
    while (steps-- > 0 && queues[p].length) {
      const newQueue = [];
      for (const [x, y] of queues[p]) {
        for (const [dx, dy] of dirs) {
          const nx = x + dx,
            ny = y + dy;
          if (
            nx < 0 ||
            ny < 0 ||
            nx >= N ||
            ny >= M ||
            visited[nx][ny] ||
            board[nx][ny] !== "."
          )
            continue;
          visited[nx][ny] = true;
          board[nx][ny] = String(p + 1);
          cnt[p]++;
          newQueue.push([nx, ny]);
          progressed = true;
        }
      }
      queues[p] = newQueue;
    }
  }

  if (!progressed) break;
}

console.log(cnt.join(" "));
