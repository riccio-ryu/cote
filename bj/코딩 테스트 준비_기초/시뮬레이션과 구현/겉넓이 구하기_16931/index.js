// 2024

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number); // 격자 크기
const grid = input.slice(1).map(line => line.split(" ").map(Number)); // 블록의 높이 정보

// 방향 벡터 (상, 하, 좌, 우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let surfaceArea = 0;

// 모든 칸을 순회하며 겉넓이를 계산
for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    // 윗면과 아랫면
    surfaceArea += 2;

    // 네 방향 확인
    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      // 인접 칸과 높이 차이를 계산
      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        surfaceArea += Math.max(0, grid[x][y] - grid[nx][ny]);
      } else {
        // 가장자리의 경우 현재 칸의 높이를 더함
        surfaceArea += grid[x][y];
      }
    }
  }
}

console.log(surfaceArea);
