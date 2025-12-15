// 2025

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [M, N] = input;

if (M > N) {
  console.log(N * 2 - 1);
} else {
  console.log(M * 2 - 2);
}

// 아래는 왜 안되는 걸까??
/**
const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split(" ").map(Number);

const [M, N] = input;

// console.log(M,N)

const visited = Array.from({ length: N }, () => Array(M).fill(false));

// 오른쪽, 아래, 왼쪽, 위
const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];

let r = 0, c = 0;
let dir = 0;
let count = 0;

visited[r][c] = true;

for (let i = 1; i < N * M; i++) {
  let nr = r + dr[dir];
  let nc = c + dc[dir];

  if (
    nr < 0 || nc < 0 || nr >= N || nc >= M ||
    visited[nr][nc]
  ) {
    dir = (dir + 1) % 4;
    count++;

    nr = r + dr[dir];
    nc = c + dc[dir];
  }

  r = nr;
  c = nc;
  visited[r][c] = true;
}

console.log(count + 1);*/
