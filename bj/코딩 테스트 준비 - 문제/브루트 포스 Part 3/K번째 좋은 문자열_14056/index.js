// 2025

// 시간초과인데, 구글링이 안됨

const fs = require("fs");
const [S, kStr] = fs.readFileSync("example.txt").toString().trim().split("\n");
const K = BigInt(kStr);

// 재귀적으로 부분수열 탐색
const n = S.length;
const results = new Set();

function isGood(str) {
  // "()" 기본
  if (str === "()") return true;

  // "(SS...S)" 형태 검사
  if (str[0] === "(" && str[str.length - 1] === ")") {
    const inner = str.slice(1, -1);
    // inner를 분해해서 모두 "좋은 문자열"로만 구성되는지 확인
    let i = 0;
    while (i < inner.length) {
      let balance = 0,
        j = i;
      while (j < inner.length) {
        balance += inner[j] === "(" ? 1 : -1;
        if (balance === 0) break;
        j++;
      }
      if (balance !== 0) return false;
      const sub = inner.slice(i, j + 1);
      if (!isGood(sub)) return false;
      i = j + 1;
    }
    return true;
  }

  return false;
}

function dfs(idx, built, open) {
  if (idx === n) {
    if (open === 0 && built.length > 0 && isGood(built)) {
      results.add(built);
    }
    return;
  }

  // skip
  dfs(idx + 1, built, open);

  // use '('
  if (S[idx] === "(") {
    dfs(idx + 1, built + "(", open + 1);
  }

  // use ')'
  if (S[idx] === ")" && open > 0) {
    dfs(idx + 1, built + ")", open - 1);
  }
}

dfs(0, "", 0);
// console.log(results);
// 사전순 정렬
const arr = Array.from(results).sort();
const idx = Number(K - 1n);

if (idx < 0 || idx >= arr.length) {
  console.log(-1);
} else {
  console.log(arr[idx]);
}
