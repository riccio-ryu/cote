// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

let N = parseInt(input[0]);
let map = Array.from({ length: N }, () => Array(N).fill(0));
let chk = Array.from({ length: N }, () =>
  Array.from({ length: N }, () =>
    Array.from({ length: 3 }, () =>
      Array(N * N + 1).fill(Infinity)
    )
  )
);

let sx = 0, sy = 0;
for (let i = 0; i < N; i++) {
  const row = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    map[i][j] = row[j];
    if (row[j] === 1) {
      sx = i;
      sy = j;
    }
  }
}

const dx = [
  [-2, -1, 1, 2, 2, 1, -1, -2], // knight
  [-1, 1, 1, -1],               // bishop
  [-1, 0, 1, 0],                // rook
];
const dy = [
  [1, 2, 2, 1, -1, -2, -2, -1],
  [1, 1, -1, -1],
  [0, 1, 0, -1],
];

class Point {
  constructor(x, y, mal, n, cnt, t) {
    this.x = x; // 현재 위치
    this.y = y;
    this.mal = mal; // 말 종류 (0:나이트,1:비숍,2:룩)
    this.n = n; // 현재까지 방문한 숫자
    this.cnt = cnt; // 말 전환 횟수
    this.t = t; // 이동 시간
  }
}

let resTime = Infinity;
let resCnt = Infinity;

const q = [];
const enqueue = (p) => q.push(p);
const dequeue = () => q.shift();

// 초기 3가지 말로 시작
for (let i = 0; i < 3; i++) {
  enqueue(new Point(sx, sy, i, 1, 0, 0));
  chk[sx][sy][i][1] = 0;
}

while (q.length > 0) {
  const cur = dequeue();

  if (cur.n === N * N) {
    if (cur.t < resTime) {
      resTime = cur.t;
      resCnt = cur.cnt;
    } else if (cur.t === resTime) {
      resCnt = Math.min(resCnt, cur.cnt);
    }
    continue;
  }

  // 1️⃣ 말 바꾸기
  for (let i = 0; i < 3; i++) {
    if (i === cur.mal) continue;
    if (cur.cnt + 1 >= chk[cur.x][cur.y][i][cur.n]) continue;
    chk[cur.x][cur.y][i][cur.n] = cur.cnt + 1;
    enqueue(new Point(cur.x, cur.y, i, cur.n, cur.cnt + 1, cur.t + 1));
  }

  // 2️⃣ 말 이동
  if (cur.mal === 0) {
    // 나이트
    for (let d = 0; d < 8; d++) {
      const X = cur.x + dx[0][d];
      const Y = cur.y + dy[0][d];
      if (X < 0 || Y < 0 || X >= N || Y >= N) continue;
      const nextN = map[X][Y] === cur.n + 1 ? cur.n + 1 : cur.n;
      if (cur.cnt >= chk[X][Y][cur.mal][nextN]) continue;
      chk[X][Y][cur.mal][nextN] = cur.cnt;
      enqueue(new Point(X, Y, cur.mal, nextN, cur.cnt, cur.t + 1));
    }
  } else {
    // 비숍, 룩
    for (let d = 0; d < 4; d++) {
      let X = cur.x;
      let Y = cur.y;
      while (true) {
        X += dx[cur.mal][d];
        Y += dy[cur.mal][d];
        if (X < 0 || Y < 0 || X >= N || Y >= N) break;
        const nextN = map[X][Y] === cur.n + 1 ? cur.n + 1 : cur.n;
        if (cur.cnt >= chk[X][Y][cur.mal][nextN]) continue;
        chk[X][Y][cur.mal][nextN] = cur.cnt;
        enqueue(new Point(X, Y, cur.mal, nextN, cur.cnt, cur.t + 1));
      }
    }
  }
}

console.log(resTime + " " + resCnt);
