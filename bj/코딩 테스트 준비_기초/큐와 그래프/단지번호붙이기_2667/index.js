// 2024

let [N, ...num] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((q) => q.replace(/\n|\r*/g, ""));
N = Number(N);
num = num.map((m) => m.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const arr = [];

// console.log(N, num, visited);
//상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y) {
  let count = 1; // 현재 집을 포함
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < N &&
      ny < N &&
      !visited[nx][ny] &&
      num[nx][ny] === 1
    ) {
      count += dfs(nx, ny);
    }
  }

  return count;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (num[i][j] === 1 && !visited[i][j]) {
      arr.push(dfs(i, j));
    }
  }
}

arr.sort((a, b) => a - b);
console.log(arr.length);
console.log(arr.join("\n"));
