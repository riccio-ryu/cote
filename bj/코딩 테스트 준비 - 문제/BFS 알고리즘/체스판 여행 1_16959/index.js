// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

  // console.log(input);

const N = +input[0];
const board = input.slice(1).map((line) => line.split(" ").map(Number));

// 방향 정의
const knight = [
  [-2, -1], [-2, 1], [-1, -2], [-1, 2],
  [1, -2], [1, 2], [2, -1], [2, 1],
];
const bishop = [
  [-1, -1], [-1, 1], [1, -1], [1, 1],
];
const rook = [
  [-1, 0], [1, 0], [0, -1], [0, 1],
];
const dirs = [knight, bishop, rook];

const pos = Array(N * N + 1);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    pos[board[i][j]] = [i, j];
  }
}

const inRange = (x, y) => x >= 0 && y >= 0 && x < N && y < N;

// visited[x][y][말][숫자]
const visited = Array.from({ length: N }, () =>
  Array.from({ length: N }, () =>
    Array.from({ length: 3 }, () => Array(N * N + 1).fill(false))
  )
);

const [sx, sy] = pos[1];
const queue = [];
let head = 0;

// 초기 3가지 말로 시작
for (let p = 0; p < 3; p++) {
  visited[sx][sy][p][1] = true;
  queue.push([sx, sy, p, 1, 0]); // x, y, 말, 숫자, 시간
}

while (head < queue.length) {
  const [x, y, piece, num, time] = queue[head++];

  if (num === N * N) {
    console.log(time);
    process.exit(0);
  }

  // 말 교체
  for (let np = 0; np < 3; np++) {
    if (np !== piece && !visited[x][y][np][num]) {
      visited[x][y][np][num] = true;
      queue.push([x, y, np, num, time + 1]);
    }
  }

  // 이동
  if (piece === 0) {
    // 나이트
    for (const [dx, dy] of knight) {
      const nx = x + dx,
        ny = y + dy;
      if (!inRange(nx, ny)) continue;
      let nnum = num;
      if (board[nx][ny] === num + 1) nnum++;
      if (!visited[nx][ny][piece][nnum]) {
        visited[nx][ny][piece][nnum] = true;
        queue.push([nx, ny, piece, nnum, time + 1]);
      }
    }
  } else if (piece === 1) {
    // 비숍
    for (const [dx, dy] of bishop) {
      let nx = x,
        ny = y;
      while (true) {
        nx += dx;
        ny += dy;
        if (!inRange(nx, ny)) break;
        let nnum = num;
        if (board[nx][ny] === num + 1) nnum++;
        if (!visited[nx][ny][piece][nnum]) {
          visited[nx][ny][piece][nnum] = true;
          queue.push([nx, ny, piece, nnum, time + 1]);
        }
      }
    }
  } else {
    // 룩
    for (const [dx, dy] of rook) {
      let nx = x,
        ny = y;
      while (true) {
        nx += dx;
        ny += dy;
        if (!inRange(nx, ny)) break;
        let nnum = num;
        if (board[nx][ny] === num + 1) nnum++;
        if (!visited[nx][ny][piece][nnum]) {
          visited[nx][ny][piece][nnum] = true;
          queue.push([nx, ny, piece, nnum, time + 1]);
        }
      }
    }
  }
}
