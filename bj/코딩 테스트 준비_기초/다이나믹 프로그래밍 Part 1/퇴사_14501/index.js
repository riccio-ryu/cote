// 2024 다운
let [N, ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" ").map(Number));

N = N[0];
let T = input.map((x) => x[0]);
let P = input.map((x) => x[1]);

let dp = Array(N + 1).fill(0);

for (let i = N - 1; i >= 0; i--) {
  // console.log(i, T[i]);

  if (i + T[i] <= N) {
    dp[i] = Math.max(dp[i + 1], dp[i + T[i]] + P[i]);
  } else {
    dp[i] = dp[i + 1]; // 상담을 진행할 못함
  }
  // console.log(dp);
}
console.log(dp[0]);


// 2024 업
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" ").map(Number));
const [N] = input.shift();

let arr = new Array(N).fill(0);

// console.log(N, input, arr);

for (let i = 0; i < N; i++) {
  // console.log(i, input[i][0], input[i][1]);
  if (input[i][0] + i > N) continue;
  arr[i] += input[i][1];
  // console.log(arr);
  for (let j = i + input[i][0]; j < N; j++) {
    arr[j] = Math.max(arr[j], arr[i]);
  }
}

console.log(Math.max(...arr));
