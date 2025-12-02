// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split(" ").map(Number);

// console.log(input)
const [N, M] = input;
// 1종 스털링 수 D[n][k]: n개의 원소로 k개 사이클을 만드는 순열 수
const D = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
D[0][0] = 1;

for (let n = 1; n <= N; n++) {
  for (let k = 1; k <= n; k++) {
    D[n][k] = D[n - 1][k - 1] + (n - 1) * D[n - 1][k];
  }
}

// 분자 = 사이클 개수가 <= M 인 순열의 총 수
let A = 0;
for (let k = 1; k <= M; k++) A += D[N][k];

// 분모 = 전체 순열 수 = N!
let B = 1;
for (let i = 2; i <= N; i++) B *= i;

// 기약분수로 만들기
function gcd(a, b) {
  while (b !== 0) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}

const g = gcd(A, B);
A /= g;
B /= g;

console.log(`${A}/${B}`);
