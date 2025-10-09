// 2025


// index.js  (example.txt로 실행)
const fs = require("fs");
const lines = fs.readFileSync("example.txt").toString().trim().split(/\r?\n/);

const [N, M] = lines[0].split(/\s+/).map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  A.push(lines[1 + i].split(/\s+/).map(Number));
}

// rFactor, cFactor
const rFactor = Array(N).fill(2);
if (N >= 1) {
  rFactor[0] = 1;
  rFactor[N - 1] = 1;
}
const cFactor = Array(M).fill(2);
if (M >= 1) {
  cFactor[0] = 1;
  cFactor[M - 1] = 1;
}

// Rsum[i] = sum_j cFactor[j] * A[i][j]
const Rsum = Array(N).fill(0);
for (let i = 0; i < N; i++) {
  let s = 0;
  for (let j = 0; j < M; j++) s += cFactor[j] * A[i][j];
  Rsum[i] = s;
}

// Csum[j] = sum_i rFactor[i] * A[i][j]
const Csum = Array(M).fill(0);
for (let j = 0; j < M; j++) {
  let s = 0;
  for (let i = 0; i < N; i++) s += rFactor[i] * A[i][j];
  Csum[j] = s;
}

// base S
let base = 0;
for (let i = 0; i < N; i++) base += rFactor[i] * Rsum[i];
// (같은값을 columns 관점에서도 얻을 수 있음)

// 행 교환 이득 (엣지 행 <-> 중간 행)
let bestRowInc = 0;
if (N > 2) {
  // 중간 행들 indices 1..N-2 (0-based)
  let minMid = Infinity;
  for (let i = 1; i <= N - 2; i++) if (Rsum[i] < minMid) minMid = Rsum[i];
  // edge top
  bestRowInc = Math.max(bestRowInc, Math.max(0, Rsum[0] - minMid));
  // edge bottom
  bestRowInc = Math.max(bestRowInc, Math.max(0, Rsum[N - 1] - minMid));
}

// 열 교환 이득 (엣지 열 <-> 중간 열)
let bestColInc = 0;
if (M > 2) {
  let minMid = Infinity;
  for (let j = 1; j <= M - 2; j++) if (Csum[j] < minMid) minMid = Csum[j];
  bestColInc = Math.max(bestColInc, Math.max(0, Csum[0] - minMid));
  bestColInc = Math.max(bestColInc, Math.max(0, Csum[M - 1] - minMid));
}

const result = base + Math.max(bestRowInc, bestColInc);
console.log(result);
