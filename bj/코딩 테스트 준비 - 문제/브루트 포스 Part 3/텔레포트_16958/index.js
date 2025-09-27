const fs = require("fs");
const lines = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.trim());

const [N, T] = lines[0].split(/\s+/).map(Number);

// 도시정보: 각 줄이 "special x y"
const city = [];
for (let i = 1; i <= N; i++) {
  const [s, x, y] = lines[i].split(/\s+/).map(Number);
  city.push({ x, y, special: s === 1 });
}

const specials = [];
for (let i = 0; i < N; i++) if (city[i].special) specials.push(i);

// console.log(specials);

function manhattan(i, j) {
  return Math.abs(city[i].x - city[j].x) + Math.abs(city[i].y - city[j].y);
}

const Q = Number(lines[N + 1]);
const out = [];

for (let qi = 0; qi < Q; qi++) {
  const [aRaw, bRaw] = lines[N + 2 + qi].split(/\s+/).map(Number);
  const a = aRaw - 1;
  const b = bRaw - 1;

  let best = manhattan(a, b); // 직접 이동

  if (specials.length > 0) {
    // 모든 특수 s1, s2에 대해 최솟값 계산 (정확한 계산)
    for (let s1 of specials) {
      const da = manhattan(a, s1);
      for (let s2 of specials) {
        const db = manhattan(b, s2);
        const between = Math.min(manhattan(s1, s2), T);
        const cost = da + between + db;
        if (cost < best) best = cost;
      }
    }
  }

  out.push(String(best));
}

console.log(out.join("\n"));
