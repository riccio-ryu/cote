// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const k = parseInt(input[0]); // 부등호 개수
const signs = input[1].split(" ");

// console.log(k, signs);
let max = "";
let min = "";

const v = Array(10).fill(false); // 숫자 사용 여부 체크

function isV(p, n, sign) {
  if (sign === "<") return p < n;
  if (sign === ">") return p > n;
  return false;
}

function dfs(d, str) {
  if (d === k + 1) {
    if (min === "") min = str;
    max = str;
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (!v[i]) {
      if (d === 0 || isV(str[d - 1], i, signs[d - 1])) {
        v[i] = true;
        dfs(d + 1, str + i);
        v[i] = false;
      }
    }
  }
}

dfs(0, "");

console.log(max);
console.log(min);
