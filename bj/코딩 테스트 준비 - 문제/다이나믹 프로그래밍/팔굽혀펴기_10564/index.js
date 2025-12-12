// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split(/\s+/).map(Number);

// console.log(input)

let ptr = 0;
const tc = input[ptr++];
// console.log('tc', tc)
let output = [];

function go(cnt, turn, n, m, arr, dp) {
  // Base Case
  if (cnt === 0) return 0;

  // Memoization check
  if (dp[cnt][turn] !== -1) return dp[cnt][turn];

  dp[cnt][turn] = -9876543210;

  // Transition
  for (let i = 0; i < m; i++) {
    if (cnt - turn * arr[i] >= 0) {
      dp[cnt][turn] = Math.max(
        dp[cnt][turn],
        go(cnt - turn * arr[i], turn + 1, n, m, arr, dp) + arr[i]
      );
    }
  }

  return dp[cnt][turn];
}

for (let _ = 0; _ < tc; _++) {
  const n = input[ptr++];
  const m = input[ptr++];
  const arr = [];
  for (let i = 0; i < m; i++) arr.push(input[ptr++]);

  // dp[cnt][turn] = maximum score
  const dp = Array.from({ length: n + 1 }, () => Array(101).fill(-1));
  // console.log(' - ', tc, n,m,arr)

  const ans = go(n, 1, n, m, arr, dp);
  // console.log('a : ', ans)
  output.push(ans > 0 ? ans : -1);
}

console.log(output.join("\n"));
