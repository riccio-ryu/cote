// 2025

const input = require("fs").readFileSync("example.txt").toString().split("\n").map((s) => s.replace(/\n|\r|\s*/g, ""));

const [N, M] = input[0].split("").map(Number);
const grid = input.slice(1).map((row) => row.split(""));

// console.log(input, N,M, grid);

const crosses = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function getCrosses(x, y) {
  if (grid[x][y] !== "#") return [];

  const result = [];
  let size = 0;

  while (true) {
    let ok = true;
    for (let d = 0; d < 4; d++) {
      let nx = x + dx[d] * (size + 1);
      let ny = y + dy[d] * (size + 1);
      if (nx < 0 || nx >= N || ny < 0 || ny >= M || grid[nx][ny] !== "#") {
        ok = false;
        break;
      }
    }
    if (!ok) break;

    size++;
    result.push({ x, y, size, area: 4 * size + 1 });
  }

  // 크기 0 (중심만)도 십자가 가능
  result.unshift({ x, y, size: 0, area: 1 });

  return result;
}

// 모든 십자가 수집
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    // console.log(' -- i ',i,'j ', j, getCrosses(i, j))
    crosses.push(...getCrosses(i, j));
    // console.log('crosses :: ', crosses)
  }
}

// 겹치는지 확인
function overlap(c1, c2) {
  const cells1 = new Set();
  cells1.add(`${c1.x},${c1.y}`);
  for (let s = 1; s <= c1.size; s++) {
    for (let d = 0; d < 4; d++) {
      let nx = c1.x + dx[d] * s;
      let ny = c1.y + dy[d] * s;
      cells1.add(`${nx},${ny}`);
    }
  }

  if (cells1.has(`${c2.x},${c2.y}`)) return true;
  for (let s = 1; s <= c2.size; s++) {
    for (let d = 0; d < 4; d++) {
      let nx = c2.x + dx[d] * s;
      let ny = c2.y + dy[d] * s;
      if (cells1.has(`${nx},${ny}`)) return true;
    }
  }

  return false;
}

// 최대 면적 곱 구하기
let answer = 0;
for (let i = 0; i < crosses.length; i++) {
  for (let j = i + 1; j < crosses.length; j++) {
    // console.log( ' oooo ', crosses[i], crosses[j], !overlap(crosses[i], crosses[j]))
    if (!overlap(crosses[i], crosses[j])) {
      answer = Math.max(answer, crosses[i].area * crosses[j].area);
    }
  }
}

console.log(answer);
