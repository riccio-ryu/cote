// 2024

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r/g, "").split(" ").map(Number));
input.pop();
// console.log(input);

let result = [];
for (let i = 0; i < input.length; i++) {
  const arr = input[i];
  const k = arr.shift();
  // console.log(k, arr);
  function comb(arr, num) {
    const r = [];
    if (num === 1) return arr.map((el) => [el]);
    arr.forEach((f, i, o) => {
      const rest = o.slice(i + 1);
      const cb = comb(rest, num - 1);
      const att = cb.map((el) => [f, ...el]);
      r.push(...att);
    });
    return r;
  }

  const val = comb(arr, 6);
  result.push(val.map((v) => v.join(" ")).join("\n"));
}

console.log(result.join("\n\n"));
