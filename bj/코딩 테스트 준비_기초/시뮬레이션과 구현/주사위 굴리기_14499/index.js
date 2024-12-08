// 2024

let [[n, m, x, y, k], ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r*/g, "").split(" ").map(Number));
const move = input.pop();
// console.log(n, m, x, y, k, input, move);

// 동, 서, 북, 남
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

let dice = [0, 0, 0, 0, 0, 0]; //top, front, right, back, left, bottom
let currentX = x;
let currentY = y;

function rollDice(direction) {
  const [top, front, right, back, left, bottom] = dice;
  if (direction === 1) {
    // 동쪽
    dice = [left, front, top, back, bottom, right];
  } else if (direction === 2) {
    // 서쪽
    dice = [right, front, bottom, back, top, left];
  } else if (direction === 3) {
    // 북쪽
    dice = [front, bottom, right, top, left, back];
  } else if (direction === 4) {
    // 남쪽
    dice = [back, top, right, bottom, left, front];
  }
}

const result = [];
for (const mov of move) {
  const nx = currentX + dx[mov - 1];
  const ny = currentY + dy[mov - 1];

  // 범위 체크
  if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
    continue; // 지도 범위를 벗어나면 무시
  }

  // 주사위 굴리기
  rollDice(mov);

  // 지도와 주사위 값 업데이트
  if (input[nx][ny] === 0) {
    input[nx][ny] = dice[5]; // 주사위 아랫면 값 복사
  } else {
    dice[5] = input[nx][ny]; // 지도 값을 주사위 아랫면에 복사
    input[nx][ny] = 0; // 지도 값을 0으로 만듦
  }

  // 윗면 값을 결과에 저장
  result.push(dice[0]);

  // 위치 업데이트
  currentX = nx;
  currentY = ny;
}

console.log(result.join("\n"));
