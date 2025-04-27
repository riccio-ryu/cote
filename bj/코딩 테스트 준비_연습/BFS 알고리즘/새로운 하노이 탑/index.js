// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const visited = new Set();
const queue = [];

// 입력 받기
let a = input[0].split(" ");
let A = a.length > 1 ? a[1] : "";

let b = input[1].split(" ");
let B = b.length > 1 ? b[1] : "";

let c = input[2].split(" ");
let C = c.length > 1 ? c[1] : "";

queue.push([A, B, C, 0]);
visited.add(A + "|" + B + "|" + C);

while (queue.length) {
  const [a, b, c, moves] = queue.shift();

  // 목표 달성 조건
  const isGoal =
    a === "A".repeat(a.length) &&
    b === "B".repeat(b.length) &&
    c === "C".repeat(c.length);

  if (isGoal) {
    console.log(moves);
    break;
  }

  const states = [[a, b, c]];

  for (let i = 0; i < 3; i++) {
    const cur = [a, b, c][i];

    if (cur.length > 0) {
      const top = cur[cur.length - 1];
      const next = [a, b, c].map((s) => s);

      next[i] = next[i].slice(0, -1); // 현재 막대에서 top 제거

      for (let j = 0; j < 3; j++) {
        if (i === j) continue;

        const moved = [...next];
        moved[j] = moved[j] + top; // 다른 막대에 top 추가

        const stateKey = moved.join("|");
        if (!visited.has(stateKey)) {
          visited.add(stateKey);
          queue.push([moved[0], moved[1], moved[2], moves + 1]);
        }
      }
    }
  }
}

