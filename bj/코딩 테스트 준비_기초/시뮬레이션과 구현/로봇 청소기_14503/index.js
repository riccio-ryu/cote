// 2024

let [[n, m], [r, c, d], ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\r*/g, "").split(" ").map(Number));

// console.log(n, m, r, c, d, input);
//0 북쪽, 1 동 2 남쪽,  3 서쪽
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let cnt = 0;

while (true) {
  // 1. 현재 위치를 청소
  if (input[r][c] === 0) {
    input[r][c] = 2; // 청소 완료
    cnt++;
  }

  // 2. 네 방향 탐색
  let cleaned = false;
  for (let i = 0; i < 4; i++) {
    d = (d + 3) % 4; // 왼쪽 방향으로 회전
    const nx = r + dx[d];
    const ny = c + dy[d];

    // 청소되지 않은 빈 칸이 있는 경우
    if (input[nx][ny] === 0) {
      r = nx;
      c = ny;
      cleaned = true;
      break;
    }
  }

  // 3. 네 방향 모두 청소되어 있거나 벽인 경우
  if (!cleaned) {
    const bd = (d + 2) % 4; // 뒤쪽 방향
    const bx = r + dx[bd];
    const by = c + dy[bd];

    // 뒤쪽으로 이동 가능한 경우
    if (input[bx][by] !== 1) {
      r = bx;
      c = by;
    } else {
      // 뒤쪽도 벽인 경우 작동 종료
      break;
    }
  }
}
console.log(cnt);
