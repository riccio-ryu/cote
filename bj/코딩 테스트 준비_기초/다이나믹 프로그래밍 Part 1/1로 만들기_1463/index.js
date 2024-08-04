// 2024

let input = require("fs").readFileSync("example.txt").toString().trim();
input = parseInt(input);

const arr = new Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  // console.log("++ ", arr);
  // 1 을 뺀 경우
  arr[i] = arr[i - 1] + 1;

  // 2로 나뉘는 경우
  if (i % 2 === 0) {
    arr[i] = Math.min(arr[i], arr[i / 2] + 1);
  }

  // 3로 나뉘는 경우
  if (i % 3 === 0) {
    arr[i] = Math.min(arr[i], arr[i / 3] + 1);
  }
  // console.log("-- ", arr);
}
console.log(arr[input]);
/* 0 -> 0
   1 -> 0
   2 -> 1
   3 -> 1
   4 -> 2
   5 -> 3
   6 -> 2
   7 -> 3
*/


// 시간초과
let input = require("fs").readFileSync("example.txt").toString().trim();
input = parseInt(input);

let num = input;

const dp = (cnt, val) => {
  if (val === 1) {
    num = Math.min(cnt, num);
    return cnt;
  }
  if (val % 3 === 0) dp(cnt + 1, val / 3);
  if (val % 2 === 0) dp(cnt + 1, val / 2);
  dp(cnt + 1, val - 1);
};

dp(0, input);

console.log(num);
