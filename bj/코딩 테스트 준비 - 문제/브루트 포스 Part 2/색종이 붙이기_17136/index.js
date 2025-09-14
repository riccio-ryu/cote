// 2025


const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
// console.log(input);
const N = 10;
let ans = Infinity;
const paper = [0, 5, 5, 5, 5, 5]; // 크기별 남은 색종이 수

function canAttach(x, y, size) {
  if (x + size > N || y + size > N) return false;
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (input[i][j] === 0) return false;
    }
  }
  return true;
}

function setPaper(x, y, size, val) {
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      input[i][j] = val;
    }
  }
}

function dfs(x, y, used) {
  if (x >= N) {
    ans = Math.min(ans, used);
    return;
  }

  if (used >= ans) return;

  if (y >= N) {
    dfs(x + 1, 0, used);
    return;
  }

  if (input[x][y] === 1) {
    for (let size = 5; size >= 1; size--) {
      if (paper[size] > 0 && canAttach(x, y, size)) {
        setPaper(x, y, size, 0);
        paper[size]--;
        dfs(x, y + 1, used + 1);
        setPaper(x, y, size, 1);
        paper[size]++;
      }
    }
  } else {
    dfs(x, y + 1, used);
  }
}

dfs(0, 0, 0);
console.log(ans === Infinity ? -1 : ans);
