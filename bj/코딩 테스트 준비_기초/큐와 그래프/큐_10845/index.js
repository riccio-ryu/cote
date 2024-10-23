// 2024

let [n, ...list] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.replace(/\n|\r*/g, ""));
n = Number(n);

const q = [];
let result = "";

for (let i = 0; i < n; i++) {
  const command = list[i].split(" ");
  // console.log(i, list[i], command);
  if (command[0] === "push") {
    q.push(parseInt(command[1], 10));
  } else if (command[0] === "pop") {
    result += (q.length ? q.shift() : -1) + "\n";
  } else if (command[0] === "size") {
    result += q.length + "\n";
  } else if (command[0] === "empty") {
    result += (q.length ? 0 : 1) + "\n";
  } else if (command[0] === "front") {
    result += (q.length ? q[0] : -1) + "\n";
  } else if (command[0] === "back") {
    result += (q.length ? q[q.length - 1] : -1) + "\n";
  }
}

console.log(result);
