// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.replace(/\n|\r/g, ""));

const N = parseInt(input[0]);
const words = input.slice(1);
// console.log(N, words);

const al = {};

for (const word of words) {
  let power = 1;
  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];
    if (!al[char]) al[char] = 0;
    al[char] += power;
    power *= 10;
  }
}

const sorts = Object.entries(al).sort((a, b) => b[1] - a[1]);

let num = 9;
const at = {};
for (const [st, _] of sorts) {
  at[st] = num--;
}

let sum = 0;
for (const word of words) {
  let str = "";
  for (const w of word) {
    str += at[w];
  }
  sum += parseInt(str);
}

console.log(sum);
