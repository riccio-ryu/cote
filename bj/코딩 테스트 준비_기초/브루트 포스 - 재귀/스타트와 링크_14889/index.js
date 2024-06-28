// 2024
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" ").map(Number));
const [N] = input.shift();
const h = N / 2;
let start = [];
let link = [];
let visited = new Array(N).fill(0);
let p = new Array(N).fill(0).map((_, i) => i);

let min = Infinity;

const dfs = (cnt, stt) => {
  // console.log("dfs~~~~~~~ :: ", cnt, stt);
  if (cnt === h) {
    // 팀가르기 완료
    link = p.filter((f) => !start.includes(f));
    // console.log(start, link);
    const startSum = cc(start);
    const linkSum = cc(link);
    min = Math.min(Math.abs(startSum - linkSum), min);
  } else {
    for (let i = stt; i < N; i++) {
      if (visited[i]) continue;
      visited[i] = 1;
      start.push(i);
      dfs(cnt + 1, i);
      start.pop();
      visited[i] = 0;
    }
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

dfs(0, 0);

console.log(min);



// 2023
//4 ≤ N ≤ 20,

const input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map((v) => v.split(" ").map((v) => +v));

let [n, ...arr] = input
const list = [];
n = n[0]
a = n -1

// console.log(n, arr);

for (let i = 0; i < n/2; i++) {
    for (let j = 0; j < n; j++) {
        if(i === j) continue;
        // console.log('i,j : ', i, j, arr[i][j], arr[j][i], arr[i][j] + arr[j][i]);
        const data1 = arr[i][j] + arr[j][i];
        const data2 = arr[a - i][a-j] + arr[a-j][a-i]
        // console.log(n,a, i,j,Math.abs(a - i), Math.abs(a-j), arr[Math.abs(a - i)], arr[Math.abs(a-j)]);
        const m = Math.abs(data1 - data2)
        console.log(i, j, m, data1, data2);
        console.log('++++', arr[i][j], arr[j][i], arr[a - i][a-j] , arr[a-j][a-i]);
        list.push(m)
    }
}
// console.log(list);
// console.log(Math.min(...list));
