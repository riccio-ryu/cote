// 2024

const input = require("fs").readFileSync("example.txt").toString().split("\n");
const N = parseInt(input[0]);
const A = input[1].split(" ").map(Number);
// console.log(N, A);
const dp = Array(N).fill(1);
const prev = Array(N).fill(-1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
      prev[i] = j;
    }
  }
}

let maxLength = Math.max(...dp);
let index = dp.indexOf(maxLength);
// console.log(prev);
const lis = [];
while (index !== -1) {
  lis.push(A[index]);
  index = prev[index];
}
lis.reverse();

console.log(maxLength);
console.log(lis.join(" "));
