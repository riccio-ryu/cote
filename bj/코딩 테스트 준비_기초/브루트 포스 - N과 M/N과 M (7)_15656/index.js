// 2024

const [[N, M], O] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((s) => s.replace(/\r/g, "").split(" ").map(Number));

const num = O.sort((a, b) => a - b);
const arr = Array(M).fill("");
const visited = Array(N + 1).fill(false);
// console.log(N, M, num);
let b = "";

// console.log(arr, visited);

function dfs(lev) {
  if (lev === M) {
    // lev이 M과 같을때 return한다.
    let data = [];
    for (let i = 0; i < M; i++) {
      // console.log("arr i ", arr[i]);
      data.push(arr[i]);
    }
    // console.log(data);
    return (b += `${data.join(" ")}\n`);
  }
  for (let i = 1; i <= N; i++) {
    //     console.log("i = " + i);
    if (visited[i]) {
      continue;
    }
    arr[lev] = num[i - 1];
    // visited[i] = true;
    dfs(lev + 1);
    // visited[i] = false;
  }
}
dfs(0);

console.log(b);
