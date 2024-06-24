// 2024
const [[N, M], O] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((s) => s.replace(/\r/g, "").split(" ").map(Number));

const num = O.sort((a, b) => a - b);
const arr = Array(M).fill("");
// console.log(N, M, num);
let b = "";

// console.log(num, arr, visited, b);

function dfs(lev, stt) {
  if (lev === M) {
    // lev이 M과 같을때 return한다.
    let data = [];
    for (let i = 0; i < M; i++) {
      // console.log("arr i ", arr[i]);
      data.push(arr[i]);
    }
    // console.log(lev, stt, data, arr);
    return (b += `${data.join(" ")}\n`);
  }
  for (let i = stt; i <= N; i++) {
    //     console.log("i = " + i);
    arr[lev] = num[i - 1];
    // console.log(i, lev, arr);
    dfs(lev + 1, i);
  }
}
dfs(0, 1);

console.log(b);
