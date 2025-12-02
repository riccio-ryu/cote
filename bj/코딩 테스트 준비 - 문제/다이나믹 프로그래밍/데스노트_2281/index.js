// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split("\n");
  // .split(" ").map(Number);

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number);

// console.log(n,m,arr)

const INF = 1e18;
const dp = Array(n + 1).fill(INF);
dp[n] = 0; // 마지막 학생 다음은 비용 0

for (let i = n - 1; i >= 0; i--) {
  let lengthSum = 0;

  for (let j = i; j < n; j++) {
    lengthSum += arr[j];
    console.log('j ? ', j, ' i ? ', i)
    const used = lengthSum + (j - i); // 사이 공백(j-i)

    if (used > m) break; // 더 이상 같은 줄에 못 넣음

    const leftover = m - used;

    // 마지막 줄은 공백 비용 없음
    const cost = j === n - 1 ? 0 : leftover * leftover;

    dp[i] = Math.min(dp[i], cost + dp[j + 1]);
    // console.log(i, j, used, leftover, cost, dp);
  }
}

console.log(dp[0]);
