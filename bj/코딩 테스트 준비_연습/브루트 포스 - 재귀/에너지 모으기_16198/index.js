// 2025

const [[N], [...input]] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r/g, "").split(" ").map(Number));
// console.log(N, input);

let max = 0;

const action = (e, r) => {
  // console.log(e, r);
  if (r.length === 2) {
    max = Math.max(max, e);
    return;
  }

  for (let i = 1; i < r.length - 1; i++) {
    const c = r[i - 1] * r[i + 1];
    const x = r[i];
    const next = [...r];
    next.splice(i, 1);
    action(e + c, next);
  }
};

action(0, input);

console.log(max);
