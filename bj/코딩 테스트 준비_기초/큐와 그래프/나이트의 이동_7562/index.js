// 2024


let [T, ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((q) => q.replace(/\n|\r*/g, ""));
T = Number(T);
let idx = 0;
const result = [];

const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];
// console.log(input, T);
function bfs(l, start, target) {
  const [sx, sy] = start;
  const [tx, ty] = target;
  const queue = [[sx, sy, 0]];
  const visited = Array.from({ length: l }, () => Array(l).fill(false));
  visited[sx][sy] = true;

  while (queue.length) {
    const [x, y, moves] = queue.shift();

    // 도착
    if (x === tx && y === ty) return moves;

    // 8가지 이동
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < l && ny < l && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, moves + 1]);
      }
    }
  }

  return -1;
}

for (let t = 0; t < T; t++) {
  const l = parseInt(input[idx++], 10); // 체스판
  const start = input[idx++].split(" ").map(Number); // 시작
  const target = input[idx++].split(" ").map(Number); // 목표

  if (start[0] === target[0] && start[1] === target[1]) {
    result.push(0);
  } else {
    result.push(bfs(l, start, target));
  }
}

console.log(result.join("\n"));
