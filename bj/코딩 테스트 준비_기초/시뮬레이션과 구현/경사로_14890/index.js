// 2024

let [[n, l], ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r*/g, "").split(" ").map(Number));
// console.log(n, l, input);

function canPass(line) {
  const visited = Array(n).fill(false); // 경사로 설치 여부 확인

  for (let i = 0; i < n - 1; i++) {
    // 높이 차이가 없는 경우
    if (line[i] === line[i + 1]) continue;

    // 높이 차이가 2 이상인 경우
    if (Math.abs(line[i] - line[i + 1]) > 1) return false;

    // 경사로 설치: 높아지는 경우
    if (line[i] < line[i + 1]) {
      for (let j = 0; j < l; j++) {
        if (i - j < 0 || line[i] !== line[i - j] || visited[i - j])
          return false;
        visited[i - j] = true;
      }
    }

    // 경사로 설치: 낮아지는 경우
    else {
      for (let j = 0; j < l; j++) {
        if (
          i + 1 + j >= n ||
          line[i + 1] !== line[i + 1 + j] ||
          visited[i + 1 + j]
        )
          return false;
        visited[i + 1 + j] = true;
      }
    }
  }

  return true;
}
// 결과 계산
let count = 0;

// 행 검사
for (let i = 0; i < n; i++) {
  if (canPass(input[i])) count++;
}

// 열 검사
for (let j = 0; j < n; j++) {
  const column = [];
  for (let i = 0; i < n; i++) {
    column.push(input[i][j]);
  }
  if (canPass(column)) count++;
}

console.log(count);
