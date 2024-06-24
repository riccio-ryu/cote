// 2024
const [[N, M, K], ...O] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((s) => s.replace(/\r/g, "").split(" ").map(Number));

let max = -Infinity;
let board = O;
// console.log(N, M, K, O, max, board);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    board[i][j] = { row: i, column: j, v: board[i][j] };
  }
}

// console.log(board);

const fn = (arr) => {
  const L = arr.length;
  if (L === K) {
    // K의 갯수만큼 이라면,
    // console.log(arr);
    const sum = arr.map((a) => a.v).reduce((r, v) => r + v, 0);
    if (sum > max) max = sum;
  } else {
    // K의 길이만큼이 아님
    let n = 0;
    let m = 0;
    if (L > 0) {
      n = arr[L - 1].row;
      m = arr[L - 1].column;
    }

    for (let i = n; i < N; i++) {
      for (let j = m; j < M; j++) {
        if (checkFn(arr, board[i][j])) {
          arr.push(board[i][j]);
          fn(arr);
          arr.pop();
        }
      }
      m = 0;
    }
  }
  return;
};

function checkFn(arr, obj) {
  const { row, column } = obj;
  for (let i = 0; i < arr.length; i++) {
    if (row == arr[i].row && column == arr[i].column) return false;
    if (row == arr[i].row && column == arr[i].column - 1) return false;
    if (row == arr[i].row && column == arr[i].column + 1) return false;
    if (row == arr[i].row + 1 && column == arr[i].column) return false;
    if (row == arr[i].row - 1 && column == arr[i].column) return false;
  }
  return true;
}

fn([], 0);

console.log(max);
