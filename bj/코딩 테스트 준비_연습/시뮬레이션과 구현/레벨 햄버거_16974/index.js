// 2025

const [N, X] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// console.log(input);
const len = Array(N + 1).fill(0);
const patty = Array(N + 1).fill(0);

len[0] = 1;
patty[0] = 1;

for (let i = 1; i <= N; i++) {
  len[i] = 2 * len[i - 1] + 3;
  patty[i] = 2 * patty[i - 1] + 1;
}
function eat(level, x) {
  if (level === 0) {
    return x <= 0 ? 0 : 1;
  }

  if (x === 1) return 0;
  else if (x <= 1 + len[level - 1]) return eat(level - 1, x - 1);
  else if (x === 2 + len[level - 1]) return patty[level - 1] + 1;
  else if (x <= 2 + 2 * len[level - 1]) {
    return patty[level - 1] + 1 + eat(level - 1, x - 2 - len[level - 1]);
  } else {
    return patty[level];
  }
}

console.log(eat(N, X));
