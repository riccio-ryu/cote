// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((n) => parseInt(n.replace(/\n|\r/g, "")));

const [A, B, C] = [...input];
// console.log(A, B, C);

if ((A + B + C) % 3 !== 0) {
  console.log(0);
  process.exit();
}

let visited = new Set();
let queue = [[A, B, C]];

function bfs() {
  while (queue.length) {
    let [x, y, z] = queue.shift();

    if (x === y && y === z) return 1; // 모든 그룹의 돌 개수가 같아지면 성공

    let stones = [x, y, z];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i !== j && stones[i] !== stones[j]) {
          let newStones = [...stones];

          if (newStones[i] < newStones[j]) {
            newStones[j] -= newStones[i];
            newStones[i] *= 2;
          } else {
            newStones[i] -= newStones[j];
            newStones[j] *= 2;
          }

          newStones.sort((a, b) => a - b);
          let state = newStones.join(",");

          if (!visited.has(state)) {
            visited.add(state);
            queue.push(newStones);
          }
        }
      }
    }
  }
  return 0;
}

console.log(bfs());
