// 2025

const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  // .split("\n")
  .split(" ")
  .map(Number);
// console.log(input);
const [F, S, G, U, D] = input;

const visited = Array(F + 1).fill(false);
const queue = [[S, 0]];
visited[S] = true;

let found = false;

while (queue.length) {
  const [current, count] = queue.shift();

  if (current === G) {
    console.log(count);
    found = true;
    break;
  }

  for (let next of [current + U, current - D]) {
    if (next >= 1 && next <= F && !visited[next]) {
      visited[next] = true;
      queue.push([next, count + 1]);
    }
  }
}

if (!found) {
  console.log("use the stairs");
}
