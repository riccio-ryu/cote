// 2024

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r/g, "").split(" ").map(Number));
const [N] = input[0];
const arr = input[1];

let poss = new Set();
let result = 1;
// console.log(arr, N);
const act = (i, sum) => {
  if (i === N) {
    poss.add(sum);
    return;
  }

  // 현재 수 arr[i]을 합에 포함과 미포함
  act(i + 1, sum);
  act(i + 1, sum + arr[i]);
};

act(0, 0);

while (poss.has(result)) {
  result++;
}

console.log(result);
