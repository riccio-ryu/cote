// 2025

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [M, N] = input;

if (M > N) {
  console.log(N * 2 - 1);
} else {
  console.log(M * 2 - 2);
}

/**
const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split(" ").map(Number);

const [M, N] = input;

// console.log(M,N)

const visited = Array.from({ length: M }, () => Array(N).fill(0));
// console.log('v: ', visited)
// 오른쪽, 아래, 왼쪽, 위
const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];

let answer = 0;
let direction = 0;
let count = M * N - 1;
let i = 0,
  j = 0;

visited[i][j] = 1;

while (count-- > 0) {
  let ni = i + dr[direction];
  let nj = j + dc[direction];
  if (ni < 0 || nj < 0 || ni >= M || nj >= N || visited[ni][nj] !== 0) {
    answer += 1;
    direction = (direction + 1) % 4;
    ni = i + dr[direction];
    nj = j + dc[direction];
  }
  [i, j] = [ni, nj];
  visited[i][j] += 1;
  console.log(i,j, visited)
}

console.log(answer);
*/

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
