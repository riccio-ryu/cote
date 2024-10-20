// 2024

let [N, A] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r/g, ""));
N = parseInt(N);
A = A.split(" ").map(Number);

let inc = Array(N).fill(1);
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      inc[i] = Math.max(inc[i], inc[j] + 1);
    }
  }
}

let dec = Array(N).fill(1);
for (let i = N - 2; i >= 0; i--) {
  for (let j = N - 1; j > i; j--) {
    if (A[i] > A[j]) {
      dec[i] = Math.max(dec[i], dec[j] + 1);
    }
  }
}

// console.log(inc, dec);
let maxLength = 0;
for (let i = 0; i < N; i++) {
  maxLength = Math.max(maxLength, inc[i] + dec[i] - 1);
}

console.log(maxLength);
