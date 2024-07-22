// 2024

const fs = require("fs");

// 입력을 읽어옵니다.
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r/g, "").split(" ").map(Number));
input.pop();
// console.log(input);

let results = [];

for (let i = 0; i < input.length; i++) {
  const arr = input[i];
  const k = arr.shift();

  function comb(arr, num) {
    const result = [];
    if (num === 1) return arr.map((el) => [el]);
    arr.forEach((f, i, o) => {
      const rest = o.slice(i + 1);
      const cb = comb(rest, num - 1);
      const att = cb.map((el) => [f, ...el]);
      result.push(...att);
    });
    return result;
  }

  const val = comb(arr, 6);
  results.push(val.map((v) => v.join(" ")).join("\n"));
}

console.log(results.join("\n\n"));
