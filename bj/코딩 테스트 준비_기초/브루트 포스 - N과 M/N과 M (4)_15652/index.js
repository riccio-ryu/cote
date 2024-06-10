// 2024
const [N, M] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((s) => parseInt(s.replace(/\n|\r|\s*/g, "")));

// console.log(N, M);

let b = [];

// console.log(arr, visited);

function dfs(lev, stt) {
  // console.log(lev, stt, b);
  if (lev === M) {
    // console.log(lev, stt, b);
    console.log(b.join(" "));
    return;
  }

  for (let i = stt; i < N; i++) {
    b.push(i + 1);
    dfs(lev + 1, i);
    b.pop();
  }
}
dfs(0, 0);
