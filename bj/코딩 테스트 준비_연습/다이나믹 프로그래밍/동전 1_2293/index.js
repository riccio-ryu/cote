// 2025

// 메모리 초과 => node로는 메모리 초과가 난다고 한다
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const coins = input
  .slice(1)
  .map(Number)
  .filter((v, i, arr) => arr.indexOf(v) === i);
coins.sort((a, b) => a - b);

const dp = new Int32Array(k + 1);
dp[0] = 1;

for (const coin of coins) {
  for (let j = coin; j <= k; j++) {
    dp[j] = (dp[j] + dp[j - coin]) % 1000000007;
  }
}

console.log(dp[k]);



/*
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

// console.log(n, k, coins);

const dp = Array(k + 1).fill(0);
dp[0] = 1;

for (const coin of coins) {
  for (let j = coin; j <= k; j++) {
    dp[j] += dp[j - coin];
  }
}

console.log(dp[k]);
*/
