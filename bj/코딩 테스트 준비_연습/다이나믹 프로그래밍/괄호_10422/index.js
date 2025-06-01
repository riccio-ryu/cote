// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0], 10);
const Ls = input.slice(1).map(Number);

const MOD = 1_000_000_007;
const DP = Array(5001).fill(0);

function init() {
  DP[0] = DP[2] = 1;
  for (let i = 4; i <= 5000; i += 2) {
    for (let j = 0; j < i; j += 2) {
      DP[i] = (DP[i] + DP[j] * DP[i - j - 2]) % MOD;
    }
  }
}

init();

let result = "";
for (let i = 0; i < T; i++) {
  const L = Ls[i];
  result += DP[L] + "\n";
}
console.log(result);
/*
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input[0];
const Ns = input.slice(1).map(Number);

const MOD = 1_000_000_007;
const MAX_N = 5000;
const dp = Array(MAX_N + 1).fill(0);

dp[0] = 1;
for (let i = 2; i <= MAX_N; i += 2) {
  for (let j = 0; j <= i - 2; j += 2) {
    dp[i] = (dp[i] + dp[j] * dp[i - 2 - j]) % MOD;
  }
}
// console.log("dp :: ", dp);
let result = "";
for (const N of Ns) {
  result += dp[N] + "\n";
}
console.log(result);
*/
