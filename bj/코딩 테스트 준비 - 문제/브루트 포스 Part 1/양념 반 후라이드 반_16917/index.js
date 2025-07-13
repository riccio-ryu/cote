// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [a, b, c, x, y] = [...input];
// console.log(a, b, c, x, y);
let minCost = Infinity;
for (let i = 0; i <= 2 * Math.max(x, y); i += 2) {
  const half = i / 2;
  const remainingA = Math.max(0, x - half);
  const remainingB = Math.max(0, y - half);
  const total = i * c + remainingA * a + remainingB * b;
  minCost = Math.min(minCost, total);
}

console.log(minCost);
