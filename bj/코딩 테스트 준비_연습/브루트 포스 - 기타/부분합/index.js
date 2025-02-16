// 2025


const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""))
  .map((n) => n.split(" ").map((m) => +m));
const [[N, S], [...board]] = input;

console.log(N, S, board);
let start = 0,
  end = 0;
let sum = 0;
let minLength = Infinity;

// 투 포인터 알고리즘
while (end <= N) {
  if (sum >= S) {
    minLength = Math.min(minLength, end - start);
    sum -= board[start++];
  } else {
    sum += board[end++];
  }
}

console.log(minLength === Infinity ? 0 : minLength);
