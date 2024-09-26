//2024

let [N, ...h] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
N = Number(N);
h = h.map((s) => s.split(" ").map((q) => Number(q.replace(/\n|\r|\s*/g, ""))));
// console.log(N);
// console.log(h);

let arr = Array.from({ length: N }, () => Array(3).fill(0));

// 초기값 설정 (첫 번째 집의 색칠 비용)
arr[0][0] = h[0][0]; // 빨강
arr[0][1] = h[0][1]; // 초록
arr[0][2] = h[0][2]; // 파랑

for (let i = 1; i < N; i++) {
  arr[i][0] = Math.min(arr[i - 1][1], arr[i - 1][2]) + h[i][0]; // 빨강으로 칠한 경우
  arr[i][1] = Math.min(arr[i - 1][0], arr[i - 1][2]) + h[i][1]; // 초록으로 칠한 경우
  arr[i][2] = Math.min(arr[i - 1][0], arr[i - 1][1]) + h[i][2]; // 파랑으로 칠한 경우
}

console.log(Math.min(arr[N - 1][0], arr[N - 1][1], arr[N - 1][2]));
