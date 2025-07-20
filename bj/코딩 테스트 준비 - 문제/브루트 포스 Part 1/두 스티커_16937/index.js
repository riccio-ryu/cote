// 2025

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [H, W] = input[0].split(" ").map(Number);
const N = Number(input[1]);
const stickers = input.slice(2).map((line) => line.split(" ").map(Number));
// console.log(H, W, N, stickers);

let maxArea = 0;

// 두 스티커를 선택
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const [r1, c1] = stickers[i];
    const [r2, c2] = stickers[j];

    // 스티커1의 회전 여부
    for (let rot1 = 0; rot1 < 2; rot1++) {
      const nr1 = rot1 ? c1 : r1;
      const nc1 = rot1 ? r1 : c1;

      // 스티커2의 회전 여부
      for (let rot2 = 0; rot2 < 2; rot2++) {
        const nr2 = rot2 ? c2 : r2;
        const nc2 = rot2 ? r2 : c2;

        // 1. 위아래 배치
        if (nr1 + nr2 <= H && Math.max(nc1, nc2) <= W) {
          maxArea = Math.max(maxArea, nr1 * nc1 + nr2 * nc2);
        }

        // 2. 좌우 배치
        if (Math.max(nr1, nr2) <= H && nc1 + nc2 <= W) {
          maxArea = Math.max(maxArea, nr1 * nc1 + nr2 * nc2);
        }
      }
    }
  }
}

console.log(maxArea);
