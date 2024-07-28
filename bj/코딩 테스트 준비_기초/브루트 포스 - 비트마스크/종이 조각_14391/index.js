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


/*
특정 비트의 상태 확인:

비트 연산 AND를 사용하여 특정 비트가 1인지 0인지 확인할 수 있습니다.
예를 들어, mask = 0b1010 (10)이고, 이 값의 두 번째 비트(0부터 시작, 오른쪽에서 왼쪽으로 두 번째 비트)가 1인지 확인하려면, mask & (1 << 1)을 계산합니다. 결과가 0이 아니면 해당 비트가 1이고, 0이면 해당 비트가 0입니다.
특정 비트 켜기:

비트 연산 OR를 사용하여 특정 비트를 1로 설정할 수 있습니다.
예를 들어, mask = 0b1010 (10)에서 첫 번째 비트를 1로 설정하려면, mask | (1 << 0)을 사용하여 mask는 0b1011 (11)로 바뀝니다.
특정 비트 끄기:

비트 연산 AND와 NOT를 사용하여 특정 비트를 0으로 설정할 수 있습니다.
예를 들어, mask = 0b1010 (10)에서 두 번째 비트를 0으로 설정하려면, mask & ~(1 << 1)을 사용하여 mask는 0b1000 (8)로 바뀝니다.
특정 비트 반전:

비트 연산 XOR를 사용하여 특정 비트를 반전(1은 0으로, 0은 1로)할 수 있습니다.
예를 들어, mask = 0b1010 (10)에서 두 번째 비트를 반전하려면, mask ^ (1 << 1)을 사용하여 mask는 0b1000 (8)로 바뀝니다.
*/
