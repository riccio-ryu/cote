// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const [N, M] = input[0].split(" ").map(Number);
const board = Array(101).fill(0); // 1 ~ 100번 칸
const visited = Array(101).fill(false);

// console.log(N, M);

for (let i = 1; i <= N + M; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  board[from] = to; // 해당 칸에서 강제 이동할 위치 저장
}

function bfs() {
  let queue = [[1, 0]]; // (현재 위치, 주사위 횟수)
  visited[1] = true;

  while (queue.length) {
    const [pos, count] = queue.shift();

    if (pos === 100) return count; // 100번 칸 도착 시 종료

    for (let dice = 1; dice <= 6; dice++) {
      let nextPos = pos + dice;

      if (nextPos > 100 || visited[nextPos]) continue;

      if (board[nextPos] !== 0) nextPos = board[nextPos]; // 사다리 or 뱀 적용

      if (!visited[nextPos]) {
        visited[nextPos] = true;
        queue.push([nextPos, count + 1]);
      }
    }
  }
}

console.log(bfs());
