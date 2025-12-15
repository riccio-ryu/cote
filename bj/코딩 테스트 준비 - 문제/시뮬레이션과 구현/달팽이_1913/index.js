// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split("\n").map(Number);

// console.log(input)
const N = Number(input[0]);
const K = Number(input[1]);
// console.log(N,K)

const board = Array.from({ length: N }, () => Array(N).fill(0));

// 방향: 위, 오른쪽, 아래, 왼쪽
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// 시작 위치 (가운데)
let x = Math.floor(N / 2);
let y = Math.floor(N / 2);

let num = 1;
board[x][y] = num;

let ansX = x;
let ansY = y;

let dir = 0;
let step = 1;

while (num < N * N) {
  for (let t = 0; t < 2; t++) {
    for (let i = 0; i < step; i++) {
      if (num >= N * N) break;

      x += dx[dir];
      y += dy[dir];
      num++;

      board[x][y] = num;

      if (num === K) {
        ansX = x;
        ansY = y;
      }
    }
    dir = (dir + 1) % 4;
  }
  step++;
}

// 출력
let output = "";
for (let i = 0; i < N; i++) {
  output += board[i].join(" ") + "\n";
}
output += `${ansX + 1} ${ansY + 1}`;

console.log(output.trim());
