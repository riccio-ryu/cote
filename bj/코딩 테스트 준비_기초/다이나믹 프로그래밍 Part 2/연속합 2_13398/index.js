// 2024

let [N, A] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r/g, ""));
N = parseInt(N);
A = A.split(" ").map(Number);

let dp1 = Array(N).fill(0);
let dp2 = Array(N).fill(0);

dp1[0] = A[0];
dp2[0] = A[0];

for (let i = 1; i < N; i++) {
  // console.log(i, dp1, dp2, dp1[i - 1] + A[i], A[i], dp2[i - 1] + A[i], dp1[i - 1]);
  dp1[i] = Math.max(dp1[i - 1] + A[i], A[i]);
  dp2[i] = Math.max(dp2[i - 1] + A[i], dp1[i - 1]);
}

console.log(Math.max(...dp1, ...dp2));
