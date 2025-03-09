// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const N = parseInt(input[0]);
const [r1, c1, r2, c2] = input[1].split(" ").map(Number);

// console.log(N, r1, c1, r2, c2);

const moves = [
  [-2, -1],
  [-2, 1],
  [0, -2],
  [0, 2],
  [2, -1],
  [2, 1],
];

const visited = Array.from({ length: N }, () => Array(N).fill(false));

function bfs() {
  let queue = [[r1, c1, 0]]; // (현재 위치 r, c, 이동 횟수)
  visited[r1][c1] = true;

  while (queue.length) {
    const [r, c, count] = queue.shift();

    if (r === r2 && c === c2) return count; // 목표 지점 도착

    for (const [dr, dc] of moves) {
      let nr = r + dr;
      let nc = c + dc;

      if (nr >= 0 && nr < N && nc >= 0 && nc < N && !visited[nr][nc]) {
        visited[nr][nc] = true;
        queue.push([nr, nc, count + 1]);
      }
    }
  }

  return -1; // 도달할 수 없는 경우
}

console.log(bfs());
