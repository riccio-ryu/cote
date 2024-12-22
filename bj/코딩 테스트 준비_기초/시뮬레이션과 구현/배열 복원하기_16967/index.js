// 2024

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [H1, W1, H2, W2] = input[0].split(" ").map(Number); // 크기 정보
const B = input.slice(1).map(line => line.split(" ").map(Number)); // 배열 B

// 배열 A 초기화
const A = Array.from({ length: H1 }, () => Array(W1).fill(0));

// 배열 복원
for (let i = 0; i < H1; i++) {
  for (let j = 0; j < W1; j++) {
    A[i][j] = B[i][j]; // 기본적으로 B 값을 할당

    // B[i][j]가 추가된 값일 경우, 영향을 제거
    if (i >= H2 && j >= W2) {
      A[i][j] -= A[i - H2][j - W2];
    }
  }
}

// 결과 출력
console.log(A.map(row => row.join(" ")).join("\n"));
