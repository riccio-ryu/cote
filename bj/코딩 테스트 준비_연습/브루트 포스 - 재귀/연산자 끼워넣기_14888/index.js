// 2024
// 나누기 부분을 ~~(a / b),로 바꿔주면 된다
/**
~~(a / b)
~는 자바스크립트의 비트 부정 연산자이다. 이 연산자는 피연산자를 32비트 signed integer로 변환시키고 모든 비트를 뒤집는다. 예를 들어 정수 5는 00000000000000000000000000000101인데, ~5는 11111111111111111111111111111010로 -6이 된다.

이 문제에서 음수 나눗셈을 할 때 양수로 변환 후 정수 몫을 구하여 다시 음수로 변환하라는 조건을 달았다.
일단 정수 몫을 구해야 하는데, ~ 연산자가 피연산자를 정수로 변환시키고(소수 부분이 버려짐) 비트를 뒤집는다. 여기서 ~ 연산자를 한 번 더 사용하면 다시 비트를 뒤집어서 원래 값에서 소수 부분만 제거한 상태가 된다.
처음에는 a / b < 0 ? Math.ceil(a / b) : Math.floor(a / b)를 사용하였으나, 비트 부정 연산자로 더 쉽게 나타낼 수 있었다.
*/

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r/g, "").split(" ").map(Number));
const [N] = input[0];
const arr = input[1];
const cal = input[2];
// console.log(arr, cal, N);
let max = -Infinity;
let min = Infinity;

const calculate = (a, b, o) => {
  switch (o) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a < 0 ? -Math.floor(-a / b) : Math.floor(a / b);
  }
};

const act = (i, res) => {
  if (i === N) {
    max = Math.max(max, res);
    min = Math.min(min, res);
    return;
  }

  for (let j = 0; j < 4; j++) {
    if (cal[j] > 0) {
      cal[j]--;
      act(i + 1, calculate(res, arr[i], j));
      cal[j]++;
    }
  }
};

act(1, arr[0]);

console.log(max);
console.log(min);
