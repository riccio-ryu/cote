// 2024

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r/g, "").split(" ").map(Number));
const [N] = input[0];
const arr = input[1];
const cal = input[2];
// console.log(N, arr, cal);
let max = -Infinity;
let min = Infinity;

const calculate = (a, b, o) => {
  switch (o) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return ~~(a / b);
  }
};

const act = (i, res) => {
  if (i === N) {
    max = Math.max(max, res);
    min = Math.min(min, res);
    return;
  }

  for (let j = 0; j < 4; j++) {
    if (cal[j] > 0) {
      cal[j]--;
      act(i + 1, calculate(res, arr[i], j));
      cal[j]++;
    }
  }
};

act(1, arr[0]);

console.log(max);
console.log(min);
