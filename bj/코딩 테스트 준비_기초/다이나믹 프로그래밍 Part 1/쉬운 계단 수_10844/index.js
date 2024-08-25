// 2024

const N = require("fs").readFileSync("example.txt").toString().trim();
const n = parseInt(N);

const q = 1000000000;
let arr = Array.from({ length: n + 1 }, () => Array(10).fill(0));

// 1자리
for (let j = 1; j <= 9; j++) {
  arr[1][j] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j > 0) arr[i][j] += arr[i - 1][j - 1];
    if (j < 9) arr[i][j] += arr[i - 1][j + 1];
    arr[i][j] %= q;
  }
}

// console.log(arr);
let result = arr[n].reduce((sum, val) => (sum + val) % q, 0);
console.log(result);
