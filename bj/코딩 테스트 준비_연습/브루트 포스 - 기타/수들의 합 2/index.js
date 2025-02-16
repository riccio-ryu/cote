// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""))
  .map((n) => n.split(" ").map((m) => +m));
const [[N, M], [...board]] = input;

// console.log(N, M, board);
let start = 0;
let end = 0;
let sum = 0;
let count = 0;

while (end <= N) {
  //   console.log(sum, M, end, start);
  if (sum < M) {
    sum += board[end++];
  } else if (sum > M) {
    sum -= board[start++];
  } else {
    count++;
    sum -= board[start++];
  }
}

console.log(count);
