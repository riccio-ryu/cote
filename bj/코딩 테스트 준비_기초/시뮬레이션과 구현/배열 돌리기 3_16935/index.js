// 2024

let [[n, m, r], ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r*/g, "").split(" ").map(Number));
const acts = input.pop();
// console.log(n, m, r, input, acts);

// 1번: 상하 반전
function operation1(arr) {
  return arr.reverse();
}

// 2번: 좌우 반전
function operation2(arr) {
  return arr.map((row) => row.reverse());
}

// 3번: 오른쪽 90도 회전
function operation3(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  const result = Array.from({ length: cols }, () => Array(rows));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][rows - 1 - i] = arr[i][j];
    }
  }
  return result;
}

// 4번: 왼쪽 90도 회전
function operation4(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  const result = Array.from({ length: cols }, () => Array(rows));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[cols - 1 - j][i] = arr[i][j];
    }
  }
  return result;
}

// 5번: 4개의 부분 배열을 시계방향으로 회전
function operation5(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  const halfRows = Math.floor(rows / 2);
  const halfCols = Math.floor(cols / 2);

  const result = Array.from({ length: rows }, () => Array(cols));

  // 1 → 2
  for (let i = 0; i < halfRows; i++) {
    for (let j = 0; j < halfCols; j++) {
      result[i][j + halfCols] = arr[i][j];
    }
  }

  // 2 → 3
  for (let i = 0; i < halfRows; i++) {
    for (let j = halfCols; j < cols; j++) {
      result[i + halfRows][j] = arr[i][j];
    }
  }

  // 3 → 4
  for (let i = halfRows; i < rows; i++) {
    for (let j = halfCols; j < cols; j++) {
      result[i][j - halfCols] = arr[i][j];
    }
  }

  // 4 → 1
  for (let i = halfRows; i < rows; i++) {
    for (let j = 0; j < halfCols; j++) {
      result[i - halfRows][j] = arr[i][j];
    }
  }

  return result;
}

// 6번: 4개의 부분 배열을 반시계방향으로 회전
function operation6(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  const halfRows = Math.floor(rows / 2);
  const halfCols = Math.floor(cols / 2);

  const result = Array.from({ length: rows }, () => Array(cols));

  // 1 → 4
  for (let i = 0; i < halfRows; i++) {
    for (let j = 0; j < halfCols; j++) {
      result[i + halfRows][j] = arr[i][j];
    }
  }

  // 4 → 3
  for (let i = halfRows; i < rows; i++) {
    for (let j = 0; j < halfCols; j++) {
      result[i][j + halfCols] = arr[i][j];
    }
  }

  // 3 → 2
  for (let i = halfRows; i < rows; i++) {
    for (let j = halfCols; j < cols; j++) {
      result[i - halfRows][j] = arr[i][j];
    }
  }

  // 2 → 1
  for (let i = 0; i < halfRows; i++) {
    for (let j = halfCols; j < cols; j++) {
      result[i][j - halfCols] = arr[i][j];
    }
  }

  return result;
}

// 연산 수행
for (const act of acts) {
  switch (act) {
    case 1:
      input = operation1(input);
      break;
    case 2:
      input = operation2(input);
      break;
    case 3:
      input = operation3(input);
      break;
    case 4:
      input = operation4(input);
      break;
    case 5:
      input = operation5(input);
      break;
    case 6:
      input = operation6(input);
      break;
  }
}

// 결과 출력
console.log(input.map((row) => row.join(" ")).join("\n"));


