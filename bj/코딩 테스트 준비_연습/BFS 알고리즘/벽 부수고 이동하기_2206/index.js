// const input = require("fs")
//   .readFileSync("example.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((n) => n.replace(/\n|\r/g, "").split("").map(Number));

// const [[N, M], ...map] = input;

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split("").map(Number));
// console.log(N, M, board);

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 🔵 2️⃣ `visited` 배열을 올바르게 초기화 (3차원 배열)
let visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [false, false])
);

// 🔴 3️⃣ BFS 탐색 (최단 거리)
function bfs() {
  let queue = [];
  let front = 0; // `shift()` 대신 인덱스로 관리하여 O(1) 연산 수행

  queue.push([0, 0, 0, 1]); // (x, y, 벽 부순 여부, 거리)
  visited[0][0][0] = true;

  while (front < queue.length) {
    const [x, y, broken, dist] = queue[front++];

    if (x === N - 1 && y === M - 1) return dist; // 목표 도착 시 종료

    for (const [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        // 🔹 인덱스 범위 체크
        if (map[nx][ny] === 0 && !visited[nx][ny][broken]) {
          visited[nx][ny][broken] = true;
          queue.push([nx, ny, broken, dist + 1]);
        } else if (map[nx][ny] === 1 && broken === 0 && !visited[nx][ny][1]) {
          visited[nx][ny][1] = true;
          queue.push([nx, ny, 1, dist + 1]);
        }
      }
    }
  }

  return -1; // 도달 불가능한 경우
}

console.log(bfs());
