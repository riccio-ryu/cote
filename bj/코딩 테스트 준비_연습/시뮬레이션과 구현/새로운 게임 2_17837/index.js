// 2025


const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const board = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const chess = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => [])
);
const dx = [0, 0, -1, 1]; // 동 서 북 남
const dy = [1, -1, 0, 0];
const horse = [];

for (let i = 0; i < k; i++) {
  const [x, y, d] = input[n + 1 + i].split(" ").map(Number);
  horse.push([x - 1, y - 1, d - 1]);
  chess[x - 1][y - 1].push(i);
}

let count = 0;

function changeDir(d) {
  if (d === 0 || d === 2) return d + 1;
  if (d === 1 || d === 3) return d - 1;
  return d;
}

function solve(h_num) {
  let [x, y, d] = horse[h_num];
  let nx = x + dx[d];
  let ny = y + dy[d];

  if (nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] === 2) {
    d = changeDir(d);
    horse[h_num][2] = d;
    nx = x + dx[d];
    ny = y + dy[d];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] === 2) {
      return true;
    }
  }

  const idx = chess[x][y].indexOf(h_num);
  const horse_up = chess[x][y].splice(idx);

  if (board[nx][ny] === 1) horse_up.reverse();

  for (const h of horse_up) {
    horse[h][0] = nx;
    horse[h][1] = ny;
    chess[nx][ny].push(h);
  }

  return chess[nx][ny].length < 4;
}

while (true) {
  if (++count > 1000) {
    console.log(-1);
    break;
  }

  let end = false;

  for (let i = 0; i < k; i++) {
    if (!solve(i)) {
      end = true;
      break;
    }
  }

  if (end) {
    console.log(count);
    break;
  }
}
