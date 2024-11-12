// 2024

const [N, K] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((f) => Number(f));
// console.log(N, K);

function bfs(s, e) {
  const max = 100000;
  const visited = Array(max + 1).fill(false);
  const queue = [[s, 0]];
  visited[s] = true;

  while (queue.length) {
    const [c, t] = queue.shift();

    if (c === e) return t;

    for (let n of [c + 1, c - 1, c * 2]) {
      if (n >= 0 && n <= max && !visited[n]) {
        visited[n] = true;
        queue.push([n, t + 1]);
      }
    }
  }
}

console.log(bfs(N, K));
