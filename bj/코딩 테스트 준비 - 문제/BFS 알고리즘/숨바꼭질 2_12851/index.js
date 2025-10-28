// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split(" ").map(Number);
// console.log(input)

const n = input[0];
const k = input[1];

const MAX = 100000;
const visited = Array(MAX + 1).fill(-1);
const count = Array(MAX + 1).fill(0);

const queue = [];
visited[n] = 0;
count[n] = 1;
queue.push(n);

while (queue.length) {
  const cur = queue.shift();
  const nextTime = visited[cur] + 1;

  for (const next of [cur - 1, cur + 1, cur * 2]) {
    if (next < 0 || next > MAX) continue;

    // 처음 방문하는 경우
    if (visited[next] === -1) {
      visited[next] = nextTime;
      count[next] = count[cur];
      queue.push(next);
    }
    // 같은 최소 시간에 도달한 경우
    else if (visited[next] === nextTime) {
      count[next] += count[cur];
    }
  }
}

console.log(visited[k]);
console.log(count[k]);
