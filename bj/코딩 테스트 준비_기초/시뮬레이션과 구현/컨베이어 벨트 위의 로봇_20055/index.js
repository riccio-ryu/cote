// 2024
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);
const d = input[1].split(" ").map(Number);
// console.log(N, K, d);

let robots = Array(N).fill(false);
let step = 0;

while (true) {
  step++;
  // console.log("d ", d);
  d.unshift(d.pop()); // 회전
  robots.unshift(false); //로봇 돎
  robots.pop(); // 로봇 내림
  robots[N - 1] = false;
  // console.log("d r ", d, robots);
  for (let i = N - 2; i >= 0; i--) {
    if (robots[i] && !robots[i + 1] && d[i + 1] > 0) {
      robots[i] = false;
      robots[i + 1] = true;
      d[i + 1]--;
    }
  }
  // console.log("rr ", robots);
  robots[N - 1] = false; // 내리는 위치 로봇 제거
  // console.log("tt1 ", robots, d);
  if (d[0] > 0) {
    robots[0] = true;
    d[0]--;
  }
  // console.log("tt2 ", robots, d);
  const z = d.filter((v) => v === 0).length;
  if (z >= K) break;
}

console.log(step);
