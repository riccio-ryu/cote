// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map(BigInt);
// console.log(n, nums);
const used = Array(n).fill(false);
let found = false;

function dfs(path) {
  // console.log(path, " // ", found);
  if (found) return;

  if (path.length === n) {
    console.log(path.join(" "));
    found = true;
    return;
  }

  const last = path[path.length - 1];
  for (let i = 0; i < n; i++) {
    if (used[i]) continue;
    if (nums[i] === last * 2n || (last % 3n === 0n && nums[i] === last / 3n)) {
      used[i] = true;
      dfs([...path, nums[i]]);
      used[i] = false;
    }
  }
}

for (let i = 0; i < n; i++) {
  used[i] = true;
  dfs([nums[i]]);
  used[i] = false;
}
