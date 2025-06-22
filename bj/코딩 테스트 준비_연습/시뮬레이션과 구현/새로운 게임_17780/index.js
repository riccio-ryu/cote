// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const a = Array.from({ length: n + 1 }, (_, i) =>
  i === 0 ? Array(n + 1).fill(0) : [0, ...input[i].split(" ").map(Number)]
);

const dr = [0, 0, 0, -1, 1];
const dc = [0, 1, -1, 0, 0];
const v = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => [])
);

const h = Array(k + 1)
  .fill(null)
  .map(() => ({ r: 0, c: 0, d: 0, movable: true }));

for (let i = 1; i <= k; ++i) {
  const [r, c, d] = input[n + i].split(" ").map(Number);
  h[i] = { r, c, d, movable: true };
  v[r][c].push(i);
}

let finished = false;

const canMove = (r, c) => r > 0 && c > 0 && r <= n && c <= n && a[r][c] !== 2;

const move = (i, nr, nc) => {
  h[i].movable = false;
  const { r, c } = h[i];
  const prev = v[r][c];
  const curr = v[nr][nc];

  const idx = prev.indexOf(i);
  let stack = prev.slice(idx);

  if (a[nr][nc] === 1) stack.reverse();

  for (let j of stack) {
    curr.push(j);
    h[j].r = nr;
    h[j].c = nc;
  }

  v[r][c] = prev.slice(0, idx);
  h[curr[0]].movable = true;

  if (curr.length >= 4) finished = true;
};

const sol = () => {
  for (let t = 1; t <= 1000; ++t) {
    for (let i = 1; i <= k; ++i) {
      if (!h[i].movable) continue;

      let { r, c, d } = h[i];
      let nr = r + dr[d];
      let nc = c + dc[d];

      if (!canMove(nr, nc)) {
        d = d % 2 === 0 ? d - 1 : d + 1;
        h[i].d = d;
        nr = r + dr[d];
        nc = c + dc[d];
        if (canMove(nr, nc)) move(i, nr, nc);
      } else {
        move(i, nr, nc);
      }

      if (finished) return t;
    }
  }
  return -1;
};

console.log(sol());
