// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, "").split(" ").map(Number));

const [[N, M], ...board] = input;

// console.log(N, M, board);
// 상하좌우 이동
const d = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 바이러스
let virusPositions = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 2) {
      virusPositions.push([i, j]);
    }
  }
}

// console.log(virusPositions);

let max = 0;

function spreadVirus(tempLab) {
  let queue = [...virusPositions];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of d) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && tempLab[nx][ny] === 0) {
        tempLab[nx][ny] = 2; // 바이러스 감염
        queue.push([nx, ny]);
      }
    }
  }

  return tempLab.flat().filter((cell) => cell === 0).length;
}

function setWall(count) {
  if (count === 3) {
    let tempLab = board.map((row) => [...row]); // 연구소 복사
    let safeArea = spreadVirus(tempLab);
    max = Math.max(max, safeArea);
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) {
        board[i][j] = 1; // 벽 설치
        setWall(count + 1);
        board[i][j] = 0; // 원래 상태로 복구
      }
    }
  }
}

setWall(0);
console.log(max);
