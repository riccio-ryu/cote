// 2024

const [n, ...wine] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => Number(s.replace(/\n|\r|\s*/g, "")));
wine.unshift(0);

// console.log(n, wine);
let dp = Array(n + 1).fill(0);

dp[1] = wine[1];
if (n > 1) dp[2] = wine[1] + wine[2];
if (n > 2)
  dp[3] = Math.max(wine[1] + wine[2], wine[1] + wine[3], wine[2] + wine[3]);

for (let i = 4; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + wine[i],
    dp[i - 3] + wine[i - 1] + wine[i]
  );
}

// console.log(dp);
console.log(dp[n]);
