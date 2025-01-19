const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r/g, "").split(" ").map(Number));
// console.log(input);

const blanks = [];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] === 0) blanks.push([i, j]);
  }
}

function valid(x, y, num) {
  // 행 검사
  for (let i = 0; i < 9; i++) {
    if (input[x][i] === num) return false;
  }

  // 열 검사
  for (let i = 0; i < 9; i++) {
    if (input[i][y] === num) return false;
  }

  // 3x3 구역 검사
  const startX = Math.floor(x / 3) * 3;
  const startY = Math.floor(y / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (input[startX + i][startY + j] === num) return false;
    }
  }

  return true;
}

function solve(idx) {
  if (idx === blanks.length) {
    // 스도쿠 완성 시 출력 후 종료
    console.log(input.map((row) => row.join(" ")).join("\n"));
    process.exit(); // 하나의 정답만 출력
  }

  const [x, y] = blanks[idx];
  for (let num = 1; num <= 9; num++) {
    if (valid(x, y, num)) {
      input[x][y] = num;
      solve(idx + 1);
      input[x][y] = 0;
    }
  }
}

solve(0);
