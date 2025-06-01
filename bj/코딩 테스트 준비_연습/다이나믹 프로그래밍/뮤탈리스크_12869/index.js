// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0].split(" ").map(Number);
const scvs = input[1] ? input[1].split(" ").map(Number) : [];
while (scvs.length < 3) scvs.push(0);
const visited = Array.from({ length: 61 }, () =>
  Array.from({ length: 61 }, () => Array(61).fill(-1))
);
const queue = [];
queue.push([...scvs, 0]); // scv1, scv2, scv3, 턴수
visited[scvs[0]][scvs[1]][scvs[2]] = 0;

const attack = [
  [9, 3, 1],
  [9, 1, 3],
  [3, 9, 1],
  [3, 1, 9],
  [1, 9, 3],
  [1, 3, 9],
];

while (queue.length > 0) {
  const [a, b, c, cnt] = queue.shift();
  if (a === 0 && b === 0 && c === 0) {
    console.log(cnt);
    return;
  }

  for (const [d1, d2, d3] of attack) {
    const na = Math.max(0, a - d1);
    const nb = Math.max(0, b - d2);
    const nc = Math.max(0, c - d3);

    if (visited[na][nb][nc] === -1) {
      visited[na][nb][nc] = cnt + 1;
      queue.push([na, nb, nc, cnt + 1]);
    }
  }
}
