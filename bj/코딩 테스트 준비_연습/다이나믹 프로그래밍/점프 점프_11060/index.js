// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

// console.log(input);

const N = +input[0];
const A = input[1].split(" ").map(Number);
const visited = Array(N).fill(-1); // -1: 방문 안 함
// console.log(N, A);

const queue = [];
queue.push(0);
visited[0] = 0;

while (queue.length > 0) {
  const cur = queue.shift();
  const maxJump = A[cur];
  // console.log(maxJump);

  for (let i = 1; i <= maxJump; i++) {
    const next = cur + i;
    if (next >= N) break;
    if (visited[next] === -1) {
      visited[next] = visited[cur] + 1;
      queue.push(next);
    }
  }
}

console.log(visited[N - 1]);
