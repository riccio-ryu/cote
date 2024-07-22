// 2024

const fs = require("fs");

// 입력을 읽어옵니다.
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r/g, "").split(" ").map(Number));
const N = parseInt(input.shift());

// console.log(N, input);
const visit = Array(N).fill(false);
let min = Infinity;

const dfs = (node, cnt, num) => {
  // 0 은 집으로
  if (cnt === N && input[node][0] > 0) {
    // console.log(node, cnt, num, input[node][0]);
    min = Math.min(min, num + input[node][0]);
    return;
  }
  for (let i = 0; i < N; i++) {
    // console.log(node, cnt, num, visit[i], input[node][i]);
    if (!visit[i] && input[node][i] > 0) {
      visit[i] = true;
      dfs(i, cnt + 1, num + input[node][i]);
      visit[i] = false;
    }
  }
};

visit[0] = true;
dfs(0, 1, 0);
console.log(min);


// 메모리 초과
const fs = require("fs");

// 입력을 읽어옵니다.
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r/g, "").split(" ").map(Number));
const N = parseInt(input.shift());

const ff = (n) => {
  const result = [];

  const fff = (m, l = []) => {
    if (!m.length) {
      result.push(l);
    } else {
      for (let i = 0; i < m.length; i++) {
        const copy = [...m];
        const k = copy.splice(i, 1);
        fff(copy, l.concat(k));
      }
    }
  };
  fff(n);
  return result;
};

const calc = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += input[arr[i]][arr[i + 1]];
  }
  return sum;
};

const arrays = ff(
  Array(N)
    .fill()
    .map((_, i) => i)
);
let min = Infinity;

for (let arr of arrays) {
  arr = [...arr, arr[0]];
  const x = calc(arr);
  min = Math.min(min, x);
}

console.log(min);
