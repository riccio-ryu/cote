const fs = require("fs");
const lines = fs.readFileSync("example.txt").toString().trim().split("\n");

const [x1, y1] = lines[0].split(" ").map(Number);
const [x2, y2] = lines[1].split(" ").map(Number);
const tp = [];
for (let i = 2; i < 5; i++) {
  const [ax, ay, bx, by] = lines[i].split(" ").map(Number);
  tp.push([ax, ay]);
  tp.push([bx, by]);
}

// 노드: 0=start, 1=end, 2~7=텔레포트
const nodes = [[x1, y1], [x2, y2], ...tp];
const n = nodes.length;

function manhattan(i, j) {
  return Math.abs(nodes[i][0] - nodes[j][0]) + Math.abs(nodes[i][1] - nodes[j][1]);
}

// 비용행렬
const cost = Array.from({ length: n }, () => Array(n).fill(Infinity));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === j) cost[i][j] = 0;
    else cost[i][j] = manhattan(i, j);
  }
}
// 텔레포트 비용 설정
cost[2][3] = cost[3][2] = 10;
cost[4][5] = cost[5][4] = 10;
cost[6][7] = cost[7][6] = 10;

// 다익스트라
const dist = Array(n).fill(Infinity);
const visited = Array(n).fill(false);
dist[0] = 0;

for (let _ = 0; _ < n; _++) {
  let u = -1, min = Infinity;
  for (let i = 0; i < n; i++) {
    if (!visited[i] && dist[i] < min) {
      min = dist[i];
      u = i;
    }
  }
  if (u === -1) break;
  visited[u] = true;
  for (let v = 0; v < n; v++) {
    if (!visited[v] && dist[v] > dist[u] + cost[u][v]) {
      dist[v] = dist[u] + cost[u][v];
    }
  }
}

console.log(dist[1]);
