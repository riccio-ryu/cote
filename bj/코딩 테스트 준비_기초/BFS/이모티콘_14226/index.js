// 2024

const S = parseInt(require("fs").readFileSync("example.txt").toString().trim());
// console.log(S);

function bfs(i) {
  const visited = Array.from({ length: 1001 }, () => Array(1001).fill(false));
  const queue = [[1, 0, 0]]; // [화면, 클립보드, 시간]
  visited[1][0] = true;

  while (queue.length) {
    const [s, c, t] = queue.shift();

    if (s === i) return t;

    //복사
    if (!visited[s][s]) {
      visited[s][s] = true;
      queue.push([s, s, t + 1]);
    }

    //붙혀넣기
    if (c > 0 && s + c <= 1000 && !visited[s + c][c]) {
      visited[s + c][c] = true;
      queue.push([s + c, c, t + 1]);
    }

    //삭제
    if (s > 1 && !visited[s - 1][c]) {
      visited[s - 1][c] = true;
      queue.push([s - 1, c, t + 1]);
    }
  }
}

console.log(bfs(S));
