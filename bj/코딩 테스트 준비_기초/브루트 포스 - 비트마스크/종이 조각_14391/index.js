const fs = require("fs");
const ff = fs.readFileSync("example.txt").toString().trim().split("\n");

const [N, M] = ff[0].split(" ").map(Number);
const input = ff.slice(1).map((line) => line.split("").map(Number));

let max = 0;
//2024

for (let mask = 0; mask < 1 << (N * M); mask++) {
  let sum = 0;
  // 가로로 자른 숫자 합 계산
  for (let i = 0; i < N; i++) {
    let rowSum = 0;
    for (let j = 0; j < M; j++) {
      const index = i * M + j;
      if ((mask & (1 << index)) === 0) {
        // 가로로 자른 경우
        rowSum = rowSum * 10 + input[i][j];
      } else {
        sum += rowSum;
        rowSum = 0;
      }
    }
    sum += rowSum; // 마지막 숫자 추가
  }
  // 세로로 자른 숫자 합 계산
  for (let j = 0; j < M; j++) {
    let colSum = 0;
    for (let i = 0; i < N; i++) {
      const index = i * M + j;
      if ((mask & (1 << index)) !== 0) {
        // 세로로 자른 경우
        colSum = colSum * 10 + input[i][j];
      } else {
        sum += colSum;
        colSum = 0;
      }
    }
    sum += colSum; // 마지막 숫자 추가
  }
  max = Math.max(max, sum);
}

console.log(max);
