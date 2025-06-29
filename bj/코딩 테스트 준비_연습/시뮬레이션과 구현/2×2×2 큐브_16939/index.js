// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const cube = [0, ...input];

const turns = [
  [
    [1, 2, 4, 3],
    [5, 6, 17, 18, 21, 22, 13, 14],
  ],
  // D면
  [
    [9, 10, 12, 11],
    [7, 8, 15, 16, 23, 24, 19, 20],
  ],
  // F면
  [
    [5, 6, 8, 7],
    [3, 4, 19, 17, 10, 9, 16, 14],
  ],
  // B면
  [
    [21, 22, 24, 23],
    [1, 2, 13, 15, 12, 11, 20, 18],
  ],
  // L면
  [
    [13, 14, 16, 15],
    [1, 3, 5, 7, 9, 11, 24, 22],
  ],
  // R면
  [
    [17, 18, 20, 19],
    [2, 4, 6, 8, 10, 12, 23, 21],
  ],
];

function rotate(arr, [face, around], dir) {
  const tmp = [...arr];

  // 1. 면 회전 (시계 or 반시계)
  if (dir === 1) {
    arr[face[0]] = tmp[face[2]];
    arr[face[1]] = tmp[face[0]];
    arr[face[2]] = tmp[face[3]];
    arr[face[3]] = tmp[face[1]];
  } else {
    arr[face[0]] = tmp[face[1]];
    arr[face[1]] = tmp[face[3]];
    arr[face[2]] = tmp[face[0]];
    arr[face[3]] = tmp[face[2]];
  }

  // 2. 주변 영향 회전
  for (let i = 0; i < 8; i++) {
    const from = around[(i + (dir ? 6 : 2)) % 8];
    arr[around[i]] = tmp[from];
  }

  return arr;
}

function isSolved(arr) {
  for (let i = 1; i <= 24; i += 4) {
    if (
      arr[i] !== arr[i + 1] ||
      arr[i] !== arr[i + 2] ||
      arr[i] !== arr[i + 3]
    ) {
      return false;
    }
  }
  return true;
}

// 가능한 모든 회전 시도 (6면 × 시계/반시계)
for (let i = 0; i < 6; i++) {
  for (let d = 0; d < 2; d++) {
    const copy = [...cube];
    const next = rotate(copy, turns[i], d);
    if (isSolved(next)) {
      console.log(1);
      return;
    }
  }
}

console.log(0);



// fail
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
