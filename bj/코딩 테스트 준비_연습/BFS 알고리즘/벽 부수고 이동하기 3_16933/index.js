// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);
let map = input
  .slice(1)
  .map((line) => line.replace(/\n|\r/g, "").split("").map(Number));
// console.log(N, M, K, map);

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () =>
    Array.from({ length: K + 1 }, () => [false, false])
  )
);

function bfs() {
  let queue = [];
  let front = 0;

  queue.push([0, 0, 0, 1, true]); // (x, y, 벽 부순 횟수, 거리, 낮/밤)
  visited[0][0][0][1] = true;

  while (front < queue.length) {
    const [x, y, broken, dist, isDay] = queue[front++];

    if (x === N - 1 && y === M - 1) return dist; // 목표 도착 시 종료

    for (const [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        // 🔹 인덱스 범위 체크
        if (map[nx][ny] === 0 && !visited[nx][ny][broken][isDay ? 1 : 0]) {
          visited[nx][ny][broken][isDay ? 1 : 0] = true;
          queue.push([nx, ny, broken, dist + 1, !isDay]);
        } else if (
          map[nx][ny] === 1 &&
          broken < K &&
          isDay &&
          !visited[nx][ny][broken + 1][0]
        ) {
          visited[nx][ny][broken + 1][0] = true;
          queue.push([nx, ny, broken + 1, dist + 1, false]);
        }
      }
    }

    // 🔹 제자리에서 기다리기 (밤에 벽을 부술 수 없으므로 낮이 될 때까지 대기)
    if (!visited[x][y][broken][isDay ? 1 : 0]) {
      visited[x][y][broken][isDay ? 1 : 0] = true;
      queue.push([x, y, broken, dist + 1, !isDay]);
    }
  }

  return -1; // 도달 불가능한 경우
}

console.log(bfs());
