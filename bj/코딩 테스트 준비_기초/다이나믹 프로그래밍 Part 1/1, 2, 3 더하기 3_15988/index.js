// 2024

const [t, ...num] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => Number(s.replace(/\n|\r|\s*/g, "")));
// console.log(t, num);
const max = Math.max(...num.slice(1));
let arr = Array(max + 1).fill(0);
arr[1] = 1;
if (max >= 2) arr[2] = 2;
if (max >= 3) arr[3] = 4;

for (let i = 4; i <= max; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2] + arr[i - 3]) % 1000000009;
}

// console.log(arr);
num.forEach((n) => console.log(arr[n]));
