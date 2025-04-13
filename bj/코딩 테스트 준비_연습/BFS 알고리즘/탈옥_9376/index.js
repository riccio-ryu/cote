// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const T = parseInt(input.shift());
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (map, startX, startY) => {
  const h = map.length;
  const w = map[0].length;
  const dist = Array.from({ length: h }, () => Array(w).fill(-1));
  const deque = [];
  deque.push([startX, startY]);
  dist[startX][startY] = 0;

  while (deque.length) {
    const [x, y] = deque.shift();

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (nx < 0 || ny < 0 || nx >= h || ny >= w) continue;
      if (map[nx][ny] === "*") continue;
      if (dist[nx][ny] !== -1) continue;

      if (map[nx][ny] === "#") {
        dist[nx][ny] = dist[x][y] + 1;
        deque.push([nx, ny]); // 문은 뒤에 넣음 (비용 +1)
      } else {
        dist[nx][ny] = dist[x][y];
        deque.unshift([nx, ny]); // 빈칸은 앞에 넣음 (비용 0)
      }
    }
  }

  return dist;
};

let idx = 0;
for (let t = 0; t < T; t++) {
  const [w, h] = input[idx++].split(" ").map(Number);
  const rawMap = input.slice(idx, idx + h).map((row) => row.split(""));
  idx += h;

  // padding 추가 (외부에서 진입 가능하도록)
  const map = Array.from({ length: h + 2 }, (_, i) => Array(w + 2).fill("."));

  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      map[i][j] = rawMap[i - 1][j - 1];
    }
  }

  // 죄수 찾기
  const prisoners = [];
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      if (map[i][j] === "$") {
        prisoners.push([i, j]);
      }
    }
  }

  const [p1x, p1y] = prisoners[0];
  const [p2x, p2y] = prisoners[1];

  const d1 = bfs(map, p1x, p1y);
  const d2 = bfs(map, p2x, p2y);
  const d0 = bfs(map, 0, 0); // 바깥에서 진입

  let answer = Infinity;
  for (let i = 0; i < h + 2; i++) {
    for (let j = 0; j < w + 2; j++) {
      if (map[i][j] === "*") continue;
      if (d0[i][j] === -1 || d1[i][j] === -1 || d2[i][j] === -1) continue;

      let sum = d0[i][j] + d1[i][j] + d2[i][j];
      if (map[i][j] === "#") sum -= 2; // 중복 열린 문 2번 빼기

      answer = Math.min(answer, sum);
    }
  }

  console.log(answer);
}
