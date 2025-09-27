// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const height = input.slice(1).map(line => line.split(" ").map(Number));

const dr = [-1, -1, -1, 0, 0, 1, 1, 1];
const dc = [-1, 0, 1, -1, 1, -1, 0, 1];

const dest = Array.from({ length: N }, () => Array(M).fill(null));

function dfs(r, c) {
  if (dest[r][c]) return dest[r][c];

  let minH = height[r][c];
  let nr = r, nc = c;

  for (let d = 0; d < 8; d++) {
    const rr = r + dr[d];
    const cc = c + dc[d];
    if (rr < 0 || cc < 0 || rr >= N || cc >= M) continue;
    if (height[rr][cc] < minH) {
      minH = height[rr][cc];
      nr = rr;
      nc = cc;
    }
  }

  if (nr === r && nc === c) {
    dest[r][c] = [r, c];
  } else {
    dest[r][c] = dfs(nr, nc);
  }
  return dest[r][c];
}

const count = Array.from({ length: N }, () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const [rr, cc] = dfs(i, j);
    count[rr][cc]++;
  }
}

console.log(count.map(row => row.join(" ")).join("\n"));
