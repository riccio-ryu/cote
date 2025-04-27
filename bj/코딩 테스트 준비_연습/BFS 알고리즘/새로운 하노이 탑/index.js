// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const towers = input.map(
  (line) =>
    line
      .split(" ")
      .slice(1)
      .join("")
      .replace(/\n|\r|\s*/g, "") || ""
);

// console.log(towers);

const bfs = () => {
  const visited = new Set();
  const queue = [[...towers, 0]]; // (A, B, C, 이동횟수)
  visited.add(towers.join("|"));

  while (queue.length) {
    const [a, b, c, cnt] = queue.shift();
    const state = [a, b, c];

    // 목표 상태 확인
    let ok = true;
    for (let tower of state) {
      if (tower.length === 0) continue;
      if (![...tower].every((ch) => ch === tower[0])) {
        ok = false;
        break;
      }
    }
    if (ok) {
      console.log(cnt);
      return;
    }

    // 이동: 현재 탑 중 가장 위 디스크를 다른 탑으로
    for (let i = 0; i < 3; i++) {
      if (state[i].length === 0) continue; // 옮길 게 없음
      const disk = state[i][state[i].length - 1];

      for (let j = 0; j < 3; j++) {
        if (i === j) continue; // 자기자신 제외

        const next = [...state];
        next[i] = next[i].slice(0, -1);
        next[j] = next[j] + disk;

        const key = next.join("|");
        if (!visited.has(key)) {
          visited.add(key);
          queue.push([...next, cnt + 1]);
        }
      }
    }
  }
};

bfs();
