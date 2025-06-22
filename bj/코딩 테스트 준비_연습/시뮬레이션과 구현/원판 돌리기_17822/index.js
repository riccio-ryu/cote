// 2025


const input = require("fs")
  .readFileSync("example.txt") // 제출 시는 '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const [N, M, T] = input[0].split(" ").map(Number);
const board = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const commands = input.slice(N + 1).map((line) => line.split(" ").map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

// 시계 or 반시계로 회전
function rotate(x, d, k) {
  for (let i = x - 1; i < N; i += x) {
    for (let r = 0; r < k; r++) {
      if (d === 0) {
        // 시계 방향
        board[i].unshift(board[i].pop());
      } else {
        // 반시계 방향
        board[i].push(board[i].shift());
      }
    }
  }
}

// 인접한 같은 수 제거
function removeSame() {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  let hasRemoved = false;
  const toRemove = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) continue;
      const current = board[i][j];
      const queue = [[i, j]];
      const same = [[i, j]];

      visited[i][j] = true;

      while (queue.length) {
        const [x, y] = queue.pop();
        for (let d = 0; d < 4; d++) {
          let nx = x + dx[d];
          let ny = (y + dy[d] + M) % M; // 원형 배열 처리

          if (nx < 0 || nx >= N) continue;
          if (visited[nx][ny]) continue;
          if (board[nx][ny] === current) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
            same.push([nx, ny]);
          }
        }
      }

      if (same.length > 1) {
        hasRemoved = true;
        toRemove.push(...same);
      }
    }
  }

  for (const [x, y] of toRemove) {
    board[x][y] = 0;
  }

  return hasRemoved;
}

// 평균 계산 후 조정
function adjust() {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] !== 0) {
        sum += board[i][j];
        count++;
      }
    }
  }

  if (count === 0) return;

  const avg = sum / count;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) continue;
      if (board[i][j] > avg) board[i][j]--;
      else if (board[i][j] < avg) board[i][j]++;
    }
  }
}

// 메인 로직
for (const [x, d, k] of commands) {
  rotate(x, d, k);
  const removed = removeSame();
  if (!removed) adjust();
}

// 결과 출력
let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    answer += board[i][j];
  }
}
console.log(answer);
