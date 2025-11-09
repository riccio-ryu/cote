// 2025


const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const map = [input[1].trim(), input[2].trim()];

const visited = Array.from({ length: 2 }, () => Array(n).fill(false));
const queue = [];
queue.push([0, 0, 0]); // [line, index, time]
visited[0][0] = true;

while (queue.length) {
  const [line, idx, time] = queue.shift();

  // 성공 조건: index가 범위를 벗어나면 끝!
  if (idx >= n) {
    console.log(1);
    process.exit(0);
  }

  // 시간이 지났을 때 index가 이미 사라진 칸이면 무시
  // (사라지는 칸: index < time)
  if (idx < time) continue;

  // 1) 오른쪽 (idx + 1)
  let ni = idx + 1;
  if (ni >= n) {
    console.log(1);
    process.exit(0);
  }
  if (ni > time && map[line][ni] === "1" && !visited[line][ni]) {
    visited[line][ni] = true;
    queue.push([line, ni, time + 1]);
  }

  // 2) 왼쪽 (idx - 1)
  ni = idx - 1;
  if (ni > time && ni >= 0 && map[line][ni] === "1" && !visited[line][ni]) {
    visited[line][ni] = true;
    queue.push([line, ni, time + 1]);
  }

  // 3) 반대 줄 점프 (idx + k)
  const nl = 1 - line;
  ni = idx + k;
  if (ni >= n) {
    console.log(1);
    process.exit(0);
  }
  if (ni > time && map[nl][ni] === "1" && !visited[nl][ni]) {
    visited[nl][ni] = true;
    queue.push([nl, ni, time + 1]);
  }
}

console.log(0);
