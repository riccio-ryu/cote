// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example")
  .toString()
  .trim()
  .split(" ").map(Number);

const [N,M] = input;
console.log(N * M - 1);
