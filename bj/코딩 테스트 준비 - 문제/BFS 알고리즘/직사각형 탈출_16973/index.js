// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n").map((line) => line.split(" ").map(Number));

  // console.log(input);

const [n, m] = input[0];
const board = [];
for (let i = 1; i <= n; i++) {
  board.push(input[i]);
}
const [h, w, sr, sc, fr, fc] = input[n+1];

// console.log(n,m)
// console.log(board)
// console.log(h, w, sr, sc, fr, fc)

const ps = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    ps[i][j] = board[i - 1][j - 1] + ps[i - 1][j] + ps[i][j - 1] - ps[i - 1][j - 1];
  }
}

const maxR = n - h + 1;
const maxC = m - w + 1;
function canPlace(r, c) {
  if (r < 1 || c < 1 || r > maxR || c > maxC) return false;
  const r2 = r + h - 1;
  const c2 = c + w - 1;
  const sum = ps[r2][c2] - ps[r - 1][c2] - ps[r2][c - 1] + ps[r - 1][c - 1];
  return sum === 0;
}

if (!canPlace(sr, sc) || !canPlace(fr, fc)) {
  console.log(-1);
} else {
  const visited = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));
  const q = [[sr, sc, 0]];
  visited[sr][sc] = true;
  let qi = 0;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (qi < q.length) {
    const [r, c, d] = q[qi++];
    if (r === fr && c === fc) {
      console.log(d);
      return;
    }
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 1 || nc < 1 || nr > maxR || nc > maxC) continue;
      if (!visited[nr][nc] && canPlace(nr, nc)) {
        visited[nr][nc] = true;
        q.push([nr, nc, d + 1]);
      }
    }
  }

  console.log(-1);
}
