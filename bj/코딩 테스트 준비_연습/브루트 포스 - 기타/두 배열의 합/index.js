// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""))
  .map((n) => n.split(" ").map((m) => +m));
const [[T], [N], [...A], [M], [...B]] = input;

// console.log(T, N, A, M, B);

function getSubarraySums(arr) {
  const sums = new Map();
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      sums.set(sum, (sums.get(sum) || 0) + 1);
    }
  }
  return sums;
}

const sumA = getSubarraySums(A);
const sumB = getSubarraySums(B);
// console.log(sumA, sumB);
let count = 0;

for (const [key, value] of sumA) {
  if (sumB.has(T - key)) {
    count += value * sumB.get(T - key);
  }
}

console.log(count);
