// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(""));

let rx, ry, bx, by;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === "R") [rx, ry] = [i, j];
    if (board[i][j] === "B") [bx, by] = [i, j];
  }
}

const dirs = [
  [-1, 0], // up
  [1, 0], // down
  [0, -1], // left
  [0, 1], // right
];

function move(x, y, dx, dy) {
  let count = 0;
  while (board[x + dx][y + dy] !== "#" && board[x][y] !== "O") {
    x += dx;
    y += dy;
    count++;
    if (board[x][y] === "O") break;
  }
  return [x, y, count];
}

const visited = new Set();
const q = [];
q.push([rx, ry, bx, by, 0]);
visited.add(`${rx},${ry},${bx},${by}`);

while (q.length) {
  const [rx, ry, bx, by, d] = q.shift();

  for (const [dx, dy] of dirs) {
    let [nrx, nry, rc] = move(rx, ry, dx, dy);
    let [nbx, nby, bc] = move(bx, by, dx, dy);

    if (board[nbx][nby] === "O") continue; // 파란공 빠지면 실패
    if (board[nrx][nry] === "O") {
      // 빨간공만 빠지면 성공
      console.log(d + 1);
      process.exit(0);
    }

    // 둘 다 같은 위치면 더 많이 움직인 쪽을 한 칸 뒤
    if (nrx === nbx && nry === nby) {
      if (rc > bc) {
        nrx -= dx;
        nry -= dy;
      } else {
        nbx -= dx;
        nby -= dy;
      }
    }

    const key = `${nrx},${nry},${nbx},${nby}`;
    if (!visited.has(key)) {
      visited.add(key);
      q.push([nrx, nry, nbx, nby, d + 1]);
    }
  }
}

console.log(-1);
