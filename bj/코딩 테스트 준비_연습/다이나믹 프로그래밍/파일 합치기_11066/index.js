// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input[0];
let idx = 1;

for (let t = 0; t < T; t++) {
  const K = +input[idx++];
  const files = input[idx++].split(" ").map(Number);

  // console.log(K, files);

  // 배열
  const sum = Array(K + 1).fill(0);
  for (let i = 1; i <= K; i++) {
    sum[i] = sum[i - 1] + files[i - 1];
  }
  // console.log(sum);

  const dp = Array.from({ length: K + 1 }, () => Array(K + 1).fill(0));

  for (let len = 2; len <= K; len++) {
    for (let i = 1; i <= K - len + 1; i++) {
      const j = i + len - 1;
      dp[i][j] = Infinity;

      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] + dp[k + 1][j] + sum[j] - sum[i - 1]
        );
      }
    }
  }

  console.log(dp[1][K]);
}
