// 2024

let [O, ...num] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((q) => q.replace(/\n|\r*/g, ""));
const [N, M] = O.split(" ").map(Number);
num = num.map((m) => m.split("").map(Number));

// const visited = Array.from({ length: N }, () => Array(N).fill(false));
// console.log(N, M, num);
//상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
  const queue = [[x, y]];
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  visited[x][y] = true;

  while (queue.length) {
    const [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < M &&
        num[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        num[nx][ny] = num[cx][cy] + 1; // 이전 +1
        queue.push([nx, ny]);
      }
    }
  }
  return num[N - 1][M - 1];
}

console.log(bfs(0, 0));
