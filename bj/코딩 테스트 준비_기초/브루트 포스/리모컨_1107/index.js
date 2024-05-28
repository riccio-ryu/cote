const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r|\s*/g, ""));

// console.log(input);
const N = +input[0];
const M = +input[1];
const nums = input[2].split("").map(Number).sort();

const brokens = nums
  ? nums.reduce((acc, v) => {
      acc[v] = true;
      return acc;
    }, {})
  : {};

// console.log(N, M, nums, brokens);

let count = Math.abs(100 - N);
for (let i = 0; i < 1000000; i++) {
  //1000000 -> +500000 , -500000
  const n = i.toString();
  let isValid = true; // cnt세기 위해
  // console.log(n, isValid);
  for (let j = 0; j < n.length; j++) {
    // console.log(n, j, brokens, brokens[n[j]]);
    if (brokens[n[j]]) {
      // 속해 있는지
      // console.log(n, j, brokens, brokens[n[j]]);
      isValid = false;
      break;
    }
  }
  // console.log(isValid, count, Math.abs(i - N) + n.length);
  if (isValid) {
    //brokens에 속해 있지 않은수의 count를 센다
    count = Math.min(count, Math.abs(i - N) + n.length);
    // console.log(count);
  }
}
console.log(count);
