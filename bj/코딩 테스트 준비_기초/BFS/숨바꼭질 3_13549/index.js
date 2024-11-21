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
  const visited = Array(max + 1).fill(Infinity);
  const arr = [];

  arr.push([s, 0]);
  visited[s] = 0;

  while (arr.length) {
    const [c, t] = arr.shift();

    if (c === e) return t;

    // *2
    if (c * 2 <= max && visited[c * 2] > t) {
      visited[c * 2] = t;
      arr.unshift([c * 2, t]); // 0초 일때는 앞에 넣기
    }

    // -1
    if (c - 1 >= 0 && visited[c - 1] > t + 1) {
      visited[c - 1] = t + 1;
      arr.push([c - 1, t + 1]);
    }

    // +1
    if (c + 1 <= max && visited[c + 1] > t + 1) {
      visited[c + 1] = t + 1;
      arr.push([c + 1, t + 1]);
    }
  }
}

console.log(bfs(N, K));

