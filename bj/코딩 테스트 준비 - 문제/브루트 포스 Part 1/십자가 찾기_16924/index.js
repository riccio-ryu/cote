// 2025

const fs = require('fs');
const [nm, ...mapInput] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = nm.split(' ').map(Number);
const map = mapInput.map(line => line.split(''));

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const result = [];
const dr = [-1, 1, 0, 0]; // 상하좌우
const dc = [0, 0, -1, 1];

function isStar(r, c) {
  return r >= 0 && r < N && c >= 0 && c < M && map[r][c] === '*';
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] !== '*') continue;
    let k = 1;
    while (true) {
      let ok = true;
      for (let d = 0; d < 4; d++) {
        const nr = i + dr[d] * k;
        const nc = j + dc[d] * k;
        if (!isStar(nr, nc)) {
          ok = false;
          break;
        }
      }
      if (!ok) break;
      k++;
    }
    k--; // 마지막 실패했으므로 -1
    if (k > 0) {
      result.push([i + 1, j + 1, k]); // 1-based indexing
      visited[i][j] = true;
      for (let d = 0; d < 4; d++) {
        for (let len = 1; len <= k; len++) {
          const nr = i + dr[d] * len;
          const nc = j + dc[d] * len;
          visited[nr][nc] = true;
        }
      }
    }
  }
}

// 원본의 *와 방문표시 비교
let ok = true;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === '*' && !visited[i][j]) {
      ok = false;
    }
  }
}

if (!ok) {
  console.log(-1);
} else {
  console.log(result.length);
  result.forEach(([i, j, k]) => console.log(`${i} ${j} ${k}`));
}
