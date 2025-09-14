// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const A = input[0];
const B = input[1];
// console.log(A, B);

const queue = [[A, 1]]; // [현재 값, 연산 횟수]
let ans = -1;

while (queue.length > 0) {
  // console.log("q :: ", queue);
  const [cur, cnt] = queue.shift();
  if (cur === B) {
    ans = cnt;
    break;
  }
  if (cur > B) continue;

  queue.push([cur * 2, cnt + 1]);
  queue.push([cur * 10 + 1, cnt + 1]);
}

console.log(ans);
