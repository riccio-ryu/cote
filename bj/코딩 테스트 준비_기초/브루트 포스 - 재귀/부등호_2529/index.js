// 2024

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r|\s*/g, ""));

let [N, list] = [...input];
N = parseInt(N);
const m = N + 1;
list = list.split("");
// console.log(N, list, m);
let arr = [];
let visited = new Array(10).fill(0);

const dfs = (cnt, n) => {
  // if (cnt === N) return;
  if (n.length === m) {
    diff(n);
  } else {
    for (let i = 0; i < 10; i++) {
      if (visited[i]) continue;
      visited[i] = 1;
      dfs(cnt + 1, n + i);
      visited[i] = 0;
    }
  }
};

const diff = (n) => {
  const nn = n.split("").map(Number);
  let bool = false;
  for (let i = 0; i < n.length - 1; i++) {
    const x = nn[i];
    const y = nn[i + 1];
    const bd = list[i];
    // console.log(x, y, bd);
    if (bd === ">") {
      bool = l(x, y);
    } else {
      bool = r(x, y);
    }
    // console.log(bool, x, bd, y);
    if (!bool) break;
  }
  if (bool) arr.push(n);
};

const l = (a, b) => {
  return a > b;
};
const r = (a, b) => {
  return a < b;
};

dfs(0, "");
console.log(arr[arr.length - 1]);
console.log(arr[0]);
