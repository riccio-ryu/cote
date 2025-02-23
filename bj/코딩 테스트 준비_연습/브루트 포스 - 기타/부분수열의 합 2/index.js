// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""))
  .map((n) => n.split(" ").map((m) => +m));
const [[N, S], [...numbers]] = input;

// console.log(N, S, numbers);

function getSubSums(arr) {
  const sums = [];
  const len = arr.length;
  for (let i = 0; i < 1 << len; i++) {
    let sum = 0;
    for (let j = 0; j < len; j++) {
      if (i & (1 << j)) sum += arr[j];
    }
    sums.push(sum);
  }
  return sums;
}

const leftPart = numbers.slice(0, N >> 1);
const rightPart = numbers.slice(N >> 1);

const leftSums = getSubSums(leftPart);
const rightSums = getSubSums(rightPart).sort((a, b) => a - b);

let count = 0;
const binarySearch = (target) => {
  let left = 0,
    right = rightSums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (rightSums[mid] < target) left = mid + 1;
    else right = mid;
  }
  let start = left;

  (left = 0), (right = rightSums.length);
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (rightSums[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return right - start;
};

for (const sum of leftSums) {
  count += binarySearch(S - sum);
}

if (S === 0) count--;

console.log(count);
