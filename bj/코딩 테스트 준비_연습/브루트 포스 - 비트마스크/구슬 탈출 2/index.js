// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(""));

const d = [
  [-1, 0], // 상
  [1, 0], // 하
  [0, -1], // 좌
  [0, 1], // 우
];
// console.log(N, M, board);
let red = [0, 0],
  blue = [0, 0],
  hole = [0, 0];

// 1️⃣ 초기 위치 탐색
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === "R") {
      red = [i, j];
      board[i][j] = ".";
    } else if (board[i][j] === "B") {
      blue = [i, j];
      board[i][j] = ".";
    } else if (board[i][j] === "O") {
      hole = [i, j];
    }
  }
}

const queue = [[...red, ...blue, 0]]; // [rx, ry, bx, by, depth]
const visited = new Set();
visited.add(`${red[0]},${red[1]},${blue[0]},${blue[1]}`);

function move(x, y, dx, dy) {
  let count = 0;
  while (board[x + dx][y + dy] !== "#" && board[x][y] !== "O") {
    x += dx;
    y += dy;
    count++;
  }
  return [x, y, count];
}

while (queue.length > 0) {
  const [rx, ry, bx, by, depth] = queue.shift();

  if (depth >= 10) break; // 10번 이상 종료

  for (const [dx, dy] of d) {
    let [nrx, nry, rcount] = move(rx, ry, dx, dy);
    let [nbx, nby, bcount] = move(bx, by, dx, dy);

    // 파란 구슬 구멍
    if (board[nbx][nby] === "O") continue;

    // 빨간 구슬 구멍 정답 출력 종료
    if (board[nrx][nry] === "O") {
      console.log(depth + 1);
      process.exit();
    }

    // 빨간 구슬과 파란 구슬이 같은 위치라면, 이동 거리에 따라 조정
    if (nrx === nbx && nry === nby) {
      if (rcount > bcount) {
        nrx -= dx;
        nry -= dy;
      } else {
        nbx -= dx;
        nby -= dy;
      }
    }

    const state = `${nrx},${nry},${nbx},${nby}`;
    if (!visited.has(state)) {
      visited.add(state);
      queue.push([nrx, nry, nbx, nby, depth + 1]);
    }
  }
}

// 10번 안에 구멍에 도달하지 못하면 -1 출력
console.log(-1);
