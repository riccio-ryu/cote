// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, L, R, X] = input[0].split(" ").map(Number);
const problems = input[1].split(" ").map(Number);
// console.log(N, L, R, X, problems);

let answer = 0;

function dfs(idx, count, sum, minVal, maxVal) {
  if (idx === N) {
    if (count >= 2 && sum >= L && sum <= R && maxVal - minVal >= X) {
      answer++;
    }
    return;
  }

  // 현재 문제 포함
  dfs(
    idx + 1,
    count + 1,
    sum + problems[idx],
    Math.min(minVal, problems[idx]),
    Math.max(maxVal, problems[idx])
  );

  // 현재 문제 미포함
  dfs(idx + 1, count, sum, minVal, maxVal);
}

// 초기 min, max를 -1, -1로 해서 count==0일때 무시하게 설계
dfs(0, 0, 0, 1e9, 0);

console.log(answer);
