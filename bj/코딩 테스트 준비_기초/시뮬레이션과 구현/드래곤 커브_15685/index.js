// 2024

let [n, ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r*/g, "").split(" ").map(Number));

// console.log(n, input);

// 우, 상, 좌, 하
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const grid = Array.from({ length: 101 }, () => Array(101).fill(false));

function dc(x, y, d, g) {
  const dir = [d]; // 초기 방향

  // 각 세대 방향
  for (let i = 0; i < g; i++) {
    const size = dir.length;
    for (let j = size - 1; j >= 0; j--) {
      dir.push((dir[j] + 1) % 4);
    }
  }

  grid[y][x] = true;
  for (const dd of dir) {
    x += dx[dd];
    y += dy[dd];
    grid[y][x] = true;
  }
}

for (const [x, y, d, g] of input) {
  dc(x, y, d, g);
}

// true cnt
let cnt = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (grid[i][j] && grid[i + 1][j] && grid[i][j + 1] && grid[i + 1][j + 1]) {
      cnt++;
    }
  }
}

console.log(cnt);
