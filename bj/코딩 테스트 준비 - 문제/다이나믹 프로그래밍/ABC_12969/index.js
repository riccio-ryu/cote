// 2025

const fs = require("fs");
const [N, K] = fs.readFileSync("example.txt").toString().split(" ").map(Number);

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => Array(K + 1).fill(false))
  )
);

// dp[a][b][c][k] = true if possible
dp[0][0][0][0] = true;

// Fill DP
for (let a = 0; a <= N; a++) {
  for (let b = 0; b <= N; b++) {
    for (let c = 0; c <= N; c++) {
      const len = a + b + c;
      if (len > N) continue;

      for (let k = 0; k <= K; k++) {
        if (!dp[a][b][c][k]) continue;

        // Add A
        if (a + 1 <= N) {
          dp[a + 1][b][c][k] = true;
        }

        // Add B → adds A pairs
        if (b + 1 <= N && k + a <= K) {
          dp[a][b + 1][c][k + a] = true;
        }

        // Add C → adds A+B pairs
        if (c + 1 <= N && k + a + b <= K) {
          dp[a][b][c + 1][k + a + b] = true;
        }
      }
    }
  }
}

// Find any (a,b,c) that reaches K
let aa = -1, bb = -1, cc = -1;
for (let a = 0; a <= N; a++) {
  for (let b = 0; b <= N; b++) {
    const c = N - a - b;
    if (c < 0) continue;
    if (c > N) continue;
    if (K <= K && dp[a][b][c][K]) {
      aa = a;
      bb = b;
      cc = c;
      break;
    }
  }
  if (aa !== -1) break;
}

// Impossible
if (aa === -1) {
  console.log(-1);
  return;
}

// Backtracking
let a = aa, b = bb, c = cc, k = K;
let result = "";

for (let i = N; i > 0; i--) {
  // Try put 'C'
  if (c > 0) {
    const added = a + b;
    if (k - added >= 0 && dp[a][b][c - 1][k - added]) {
      result = "C" + result;
      k -= added;
      c--;
      continue;
    }
  }

  // Try put 'B'
  if (b > 0) {
    const added = a;
    if (k - added >= 0 && dp[a][b - 1][c][k - added]) {
      result = "B" + result;
      k -= added;
      b--;
      continue;
    }
  }

  // Put 'A'
  if (a > 0 && dp[a - 1][b][c][k]) {
    result = "A" + result;
    a--;
    continue;
  }
}

console.log(result);

