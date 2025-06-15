// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let [r, c, k] = input[0].split(" ").map((v) => +v);
let A = input.slice(1).map((line) => line.split(" ").map(Number));

const getMaxLen = (arr) => Math.max(...arr.map((row) => row.length));

const calc = (arr) => {
  const newArr = [];

  for (const row of arr) {
    const counter = new Map();

    for (const num of row) {
      if (num === 0) continue;
      counter.set(num, (counter.get(num) || 0) + 1);
    }

    const sorted = Array.from(counter.entries()).sort(
      (a, b) => a[1] - b[1] || a[0] - b[0]
    );

    const newRow = [];
    for (let [num, cnt] of sorted) {
      newRow.push(num, cnt);
    }

    newArr.push(newRow.slice(0, 100)); // 최대 100개까지 자르기
  }

  const maxLen = getMaxLen(newArr);
  return newArr.map((row) => {
    while (row.length < maxLen) row.push(0);
    return row;
  });
};

let time = 0;

while (time <= 100) {
  if (A[r - 1] && A[r - 1][c - 1] === k) break;

  time++;

  const rowLen = A.length;
  const colLen = A[0].length;

  if (rowLen >= colLen) {
    // R 연산
    A = calc(A);
  } else {
    // C 연산
    const rotated = A[0].map((_, col) => A.map((row) => row[col]));
    const calcRotated = calc(rotated);
    A = calcRotated[0].map((_, col) => calcRotated.map((row) => row[col]));
  }
}

console.log(time > 100 ? -1 : time);
