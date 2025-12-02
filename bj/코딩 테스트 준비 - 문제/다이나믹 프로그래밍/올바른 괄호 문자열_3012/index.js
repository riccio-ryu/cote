// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split("\n");
  // .split(" ").map(Number);

const n = parseInt(input[0]);
const arr = input[1].split("");

const MOD = 100000;

const match = {
  ')': '(',
  ']': '[',
  '}': '{',
  '?': '?'
};


// console.log(n, arr);


function canPair(a, b) {
  if (a === '?' && b === '?') return 3;   // (), {}, []
  if (a === '?' && (b === ')' || b === ']' || b === '}')) return 1;
  if (b === '?' && (a === '(' || a === '[' || a === '{')) return 1;
  if (
    (a === '(' && b === ')') ||
    (a === '[' && b === ']') ||
    (a === '{' && b === '}')
  ) return 1;
  return 0;
}

const dp = Array.from({ length: n }, () => Array(n).fill(0));

for (let i = 0; i < n; i++) dp[i][i] = 0;
// console.log(dp);
for (let i = 0; i < n - 1; i++) {
  dp[i][i + 1] = canPair(arr[i], arr[i + 1]);
}
// console.log(dp);

for (let len = 4; len <= n; len += 2) {
  for (let l = 0; l + len - 1 < n; l++) {
    let r = l + len - 1;
    let total = 0;

    for (let k = l + 1; k <= r; k += 2) {
      const ways = canPair(arr[l], arr[k]);
      if (ways === 0) continue;

      const left = (k - 1 >= l + 1) ? dp[l + 1][k - 1] : 1;
      const right = (k + 1 <= r) ? dp[k + 1][r] : 1;

      total = (total + (ways * left % MOD) * right) % MOD;
    }

    dp[l][r] = total;
  }
  console.log(dp)
}

console.log(dp[0][n - 1] % MOD);
