// 2024

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0], 10); // 톱니바퀴의 개수
const gears = input.slice(1, T + 1).map((line) => line.split("").map(Number)); // 톱니바퀴 상태
const K = parseInt(input[T + 1], 10); // 회전 횟수
const commands = input.slice(T + 2).map((line) => line.split(" ").map(Number)); // 회전 명령

// console.log(T, gears, K, commands);

// 시계 방향 회전
function rotateClockwise(gear) {
  gear.unshift(gear.pop());
}

// 반시계 방향 회전
function rotateClockwise2(gear) {
  gear.push(gear.shift());
}

// 회전 처리
function rotate(index, direction) {
  const rotateStatus = Array(T).fill(0);
  rotateStatus[index] = direction;

  // 왼쪽 확인
  for (let i = index - 1; i >= 0; i--) {
    if (gears[i][2] !== gears[i + 1][6]) {
      rotateStatus[i] = -rotateStatus[i + 1];
    } else {
      break;
    }
  }

  // 오른쪽 확인
  for (let i = index + 1; i < T; i++) {
    if (gears[i - 1][2] !== gears[i][6]) {
      rotateStatus[i] = -rotateStatus[i - 1];
    } else {
      break;
    }
  }

  // 모든 톱니바퀴 회전
  for (let i = 0; i < T; i++) {
    if (rotateStatus[i] === 1) {
      rotateClockwise(gears[i]);
    } else if (rotateStatus[i] === -1) {
      rotateClockwise2(gears[i]);
    }
  }
}

// 명령 처리
for (const [gearIndex, direction] of commands) {
  rotate(gearIndex - 1, direction);
}

// 결과 계산
const result = gears.reduce(
  (count, gear) => count + (gear[0] === 1 ? 1 : 0),
  0
);
console.log(result);
