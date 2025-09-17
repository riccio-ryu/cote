// 2025


const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
  
const n = +input[0];
const arr = input[1].split(' ').map(Number)
  
// console.log(n, arr)
let ops = 0;
let a = arr.slice();

while (true) {
  let allZero = a.every(x => x === 0);
  console.log('allz 1 : ', allZero, a)
  if (allZero) break;

  // 홀수 -> 짝수 변경
  for (let i = 0; i < n; i++) {
    if (a[i] % 2 === 1) {
      a[i]--;
      ops++;
    }
  }

  allZero = a.every(x => x === 0);
  console.log('allz 2 : ', allZero, a)
  if (allZero) break;

  let allEven = a.every(x => x % 2 === 0);
  // 짝수면 2로 나누자
  if (allEven) {
    for (let i = 0; i < n; i++) a[i] /= 2;
    ops++;
  }
}

console.log(ops);
