// 2025

const input = +require("fs").readFileSync("example.txt").toString().trim();
// console.log(input);

const nums = [1, 5, 10, 50];
const visited = new Set();

function dfs(depth, sum, start) {
  // console.log("--- ", depth, sum, start);
  if (depth === input) {
    // console.log("v : ", visited);
    visited.add(sum);
    return;
  }
  for (let i = start; i < 4; i++) {
    dfs(depth + 1, sum + nums[i], i);
  }
}

dfs(0, 0, 0);
console.log(visited.size);
