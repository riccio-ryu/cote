// 2025


const fs = require("fs");
const [N,K] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ").map(Number);

  // console.log(N,K)

const MAX = 500000;
const visited = Array.from({ length: MAX + 1 }, () => [false, false]);

let queue = [[N, 0]];
visited[N][0] = true;

let answer = -1;

while (queue.length) {
  // console.log('queue ', queue);
  const [pos, t] = queue.shift();

  const bro = K + (t * (t + 1)) / 2;
  if (bro > MAX) break;

  // console.log(' --- ', bro, pos, t, visited[bro]);
  if (visited[bro][t % 2]) {
    answer = t;
    break;
  }

  for (const next of [pos - 1, pos + 1, pos * 2]) {
    if (next >= 0 && next <= MAX && !visited[next][(t + 1) % 2]) {
      visited[next][(t + 1) % 2] = true;
      queue.push([next, t + 1]);
    }
  }
}

console.log(answer);
