// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let [R, C, M] = input[0].split(" ").map(Number);
const sharks = input.slice(1).map((line) => line.split(" ").map(Number));

// 방향: 1:위, 2:아래, 3:오른쪽, 4:왼쪽
const dx = [0, -1, 1, 0, 0];
const dy = [0, 0, 0, 1, -1];

let map = Array.from({ length: R }, () => Array(C).fill(null));

// 상어 초기 배치
for (let [r, c, s, d, z] of sharks) {
  map[r - 1][c - 1] = { s, d, z };
}

let answer = 0;

for (let king = 0; king < C; king++) {
  // 낚시왕 낚시
  for (let row = 0; row < R; row++) {
    if (map[row][king]) {
      answer += map[row][king].z;
      map[row][king] = null;
      break;
    }
  }

  // 상어
  const newMap = Array.from({ length: R }, () => Array(C).fill(null));

  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (!map[x][y]) continue;

      let { s, d, z } = map[x][y];
      let nx = x,
        ny = y;

      let speed = s;
      if (d === 1 || d === 2) speed %= (R - 1) * 2;
      else speed %= (C - 1) * 2;

      for (let i = 0; i < speed; i++) {
        let tx = nx + dx[d];
        let ty = ny + dy[d];
        if (tx < 0 || tx >= R || ty < 0 || ty >= C) {
          // 반대로
          if (d === 1) d = 2;
          else if (d === 2) d = 1;
          else if (d === 3) d = 4;
          else if (d === 4) d = 3;

          tx = nx + dx[d];
          ty = ny + dy[d];
        }
        nx = tx;
        ny = ty;
      }

      if (!newMap[nx][ny] || newMap[nx][ny].z < z) {
        newMap[nx][ny] = { s, d, z };
      }
    }
  }

  map = newMap;
}

console.log(answer);
