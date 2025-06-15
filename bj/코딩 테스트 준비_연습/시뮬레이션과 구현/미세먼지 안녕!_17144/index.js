// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C, T] = input[0].split(" ").map(Number);
let map = input.slice(1).map((line) => line.split(" ").map(Number));

let airCleaner = [];
for (let i = 0; i < R; i++) {
  if (map[i][0] === -1) airCleaner.push(i);
}

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 미세먼지
const spreadDust = () => {
  const temp = Array.from({ length: R }, () => Array(C).fill(0));

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (map[i][j] > 0) {
        const spreadAmount = Math.floor(map[i][j] / 5);
        let count = 0;

        for (const [dx, dy] of directions) {
          const nx = i + dx;
          const ny = j + dy;

          if (nx >= 0 && nx < R && ny >= 0 && ny < C && map[nx][ny] !== -1) {
            temp[nx][ny] += spreadAmount;
            count++;
          }
        }

        map[i][j] -= spreadAmount * count;
      }
    }
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      map[i][j] += temp[i][j];
    }
  }
};

// 공청
const cleanAir = () => {
  const [top, bottom] = airCleaner;

  // 위쪽 (반시계)
  for (let i = top - 1; i > 0; i--) map[i][0] = map[i - 1][0];
  for (let j = 0; j < C - 1; j++) map[0][j] = map[0][j + 1];
  for (let i = 0; i < top; i++) map[i][C - 1] = map[i + 1][C - 1];
  for (let j = C - 1; j > 1; j--) map[top][j] = map[top][j - 1];
  map[top][1] = 0;

  // 아래쪽 (시계)
  for (let i = bottom + 1; i < R - 1; i++) map[i][0] = map[i + 1][0];
  for (let j = 0; j < C - 1; j++) map[R - 1][j] = map[R - 1][j + 1];
  for (let i = R - 1; i > bottom; i--) map[i][C - 1] = map[i - 1][C - 1];
  for (let j = C - 1; j > 1; j--) map[bottom][j] = map[bottom][j - 1];
  map[bottom][1] = 0;
};

for (let t = 0; t < T; t++) {
  spreadDust();
  cleanAir();
}

let result = 0;
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (map[i][j] > 0) result += map[i][j];
  }
}

console.log(result);
