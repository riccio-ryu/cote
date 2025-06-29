// 2025

const input = require("fs")
  .readFileSync("example.txt") // 제출 시는 '/dev/stdin'
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const cube = [0, ...input];

// console.log(cube);

const faces = [
  [],
  [1, 2, 3, 4], // 1번 면
  [5, 6, 7, 8], // 2번 면
  [9, 10, 11, 12], // 3번 면
  [13, 14, 15, 16], // 4번 면
  [17, 18, 19, 20], // 5번 면
  [21, 22, 23, 24], // 6번 면
];

const rotate = [
  [6, 8, 18, 20, 23, 21, 13, 15],
  [15, 13, 21, 23, 20, 18, 8, 6],
  [5, 7, 17, 19, 24, 22, 14, 16],
  [16, 14, 22, 24, 19, 17, 7, 5],
  [3, 4, 17, 18, 10, 9, 16, 14],
  [14, 16, 9, 10, 18, 17, 4, 3],
  [1, 2, 19, 20, 12, 11, 15, 13],
  [13, 15, 11, 12, 20, 19, 2, 1],
  [1, 3, 5, 7, 9, 11, 24, 22],
  [22, 24, 11, 9, 7, 5, 3, 1],
  [2, 4, 6, 8, 10, 12, 23, 21],
  [21, 23, 12, 10, 8, 6, 4, 2],
];

function isSolved(arr) {
  for (let f of faces.slice(1)) {
    const [a, b, c, d] = f;
    if (!(arr[a] === arr[b] && arr[b] === arr[c] && arr[c] === arr[d])) {
      return false;
    }
  }
  return true;
}

function rotateCube(cube, order) {
  const next = [...cube];
  const seq = rotate[order];

  for (let i = 0; i < 8; i++) {
    next[seq[(i + 2) % 8]] = cube[seq[i]];
  }

  return next;
}

for (let i = 0; i < 12; i++) {
  const rotated = rotateCube(cube, i);
  if (isSolved(rotated)) {
    console.log(1);
    return;
  }
}

console.log(0);
