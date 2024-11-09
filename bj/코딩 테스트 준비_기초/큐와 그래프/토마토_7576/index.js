// 2024

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const box = input.slice(1).map((line) => line.split(" ").map(Number));

// 방향 벡터 (상, 하, 좌, 우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 익은 토마토의 위치를 큐에 저장
let queue = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

let idx = 0;

// console.log(m, n, box, queue);

while (idx < queue.length) {
  const [x, y] = queue[idx++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < n && ny < m && box[nx][ny] === 0) {
      box[nx][ny] = box[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

let days = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === 0) {
      console.log(-1); // 익지 않은 토마토가 남아있는 경우
      return;
    }
    days = Math.max(days, box[i][j]);
  }
}

console.log(days - 1);
