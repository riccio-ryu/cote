const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

// 2025

const [A, B] = [...input];

const n = A.length;
const m = B.length;

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (A[i - 1] === B[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

let lcs = "";
let i = n,
  j = m;

while (i > 0 && j > 0) {
  if (A[i - 1] === B[j - 1]) {
    lcs = A[i - 1] + lcs;
    i--;
    j--;
  } else if (dp[i - 1][j] > dp[i][j - 1]) {
    i--;
  } else {
    j--;
  }
}

console.log(dp[n][m]);
if (lcs.length > 0) console.log(lcs);
