// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const items = input.slice(1).map((line) => line.split(" ").map(Number));

const dp = Array(K + 1).fill(0);

// console.log(N, K, items, dp);
for (let i = 0; i < N; i++) {
  const [w, v] = items[i];

  for (let j = K; j >= w; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v);
  }
}

console.log(dp[K]);
