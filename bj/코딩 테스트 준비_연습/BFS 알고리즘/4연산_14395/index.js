// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((n) => parseInt(n.replace(/\n|\r/g, "")));

const [s, t] = [...input];
// console.log(s, t);

if (s === t) {
  console.log(0);
  return;
}

const operations = [
  { op: "*", func: (x) => x * x },
  { op: "+", func: (x) => x + x },
  { op: "-", func: (x) => x - x },
  { op: "/", func: (x) => (x !== 0 ? Math.floor(x / x) : null) },
];

const bfs = (s, t) => {
  const queue = [[s, ""]];
  const visited = new Set();
  visited.add(s);

  while (queue.length) {
    const [cur, path] = queue.shift();

    for (const { op, func } of operations) {
      const next = func(cur);
      if (next === null || next > 1e9 || visited.has(next)) continue;

      if (next === t) {
        console.log(path + op);
        return;
      }

      visited.add(next);
      queue.push([next, path + op]);
    }
  }

  console.log(-1);
};

bfs(s, t);
