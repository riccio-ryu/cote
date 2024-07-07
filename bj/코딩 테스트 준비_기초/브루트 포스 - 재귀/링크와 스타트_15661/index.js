// 2024

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" ").map(Number));
const [N] = input.shift();

let start = [];
let link = [];
let visited = new Array(N).fill(0);
let p = new Array(N).fill(0).map((_, i) => i);

let min = Infinity;

const dfs = (cnt) => {
  // console.log("dfs~~~~~~~ :: ", cnt);
  if (cnt === N) {
    // 팀가르기 완료
    if (start.length < 1 || start.length >= N) return;
    link = p.filter((f) => !start.includes(f));
    // console.log(start, link);
    const startSum = cc(start);
    const linkSum = cc(link);
    // console.log(startSum, linkSum);
    min = Math.min(Math.abs(startSum - linkSum), min);
  } else {
    // for (let i = stt; i < N; i++) {
    // if (visited[i]) continue;
    visited[cnt] = 1;
    start.push(cnt);
    dfs(cnt + 1);
    start.pop();
    visited[cnt] = 0;
    dfs(cnt + 1);
    // }
  }
};

const cc = (team) => {
  let res = 0;
  for (let i = 0; i < team.length; i++) {
    for (let j = 0; j < team.length; j++) {
      if (i === j) continue;
      res += input[team[i]][team[j]];
    }
  }
  return res;
};

dfs(0);

console.log(min);
