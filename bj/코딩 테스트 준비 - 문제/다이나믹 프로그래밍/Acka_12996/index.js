// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split(" ").map(Number);
const MOD = 1000000007;
// console.log(input);
const [N, a, b, c] = input;

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: a + 1 }, () =>
    Array.from({ length: b + 1 }, () =>
      Array(c + 1).fill(0)
    )
  )
);

// console.log(N,a,b,c,dp)
dp[0][0][0][0] = 1;

// 가능한 부르는 패턴들 (A,B,C)
const patterns = [
  [1, 0, 0], // A
  [0, 1, 0], // B
  [0, 0, 1], // C
  [1, 1, 0], // AB
  [1, 0, 1], // AC
  [0, 1, 1], // BC
  [1, 1, 1], // ABC
];

for (let i = 0; i < N; i++) {
  for (let x = 0; x <= a; x++) {
    for (let y = 0; y <= b; y++) {
      for (let z = 0; z <= c; z++) {
        const cur = dp[i][x][y][z];
        // console.log(cur)
        if (!cur) continue;

        for (const [da, db, dc] of patterns) {
          const nx = x + da;
          const ny = y + db;
          const nz = z + dc;

          if (nx <= a && ny <= b && nz <= c) {
            dp[i + 1][nx][ny][nz] =
              (dp[i + 1][nx][ny][nz] + cur) % MOD;
          }
        }
      }
    }
  }
}
// console.log(dp)
console.log(dp[N][a][b][c] % MOD);
