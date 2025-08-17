const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, D] = input.splice(0, 1)[0].split(" ").map(Number);
const arr = input.map((a) => a.split(" ").map(Number));
// console.log(N, M, D, arr);

// 궁수 위치 조합 구하기
function getCombinations(arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combs = getCombinations(rest, selectNum - 1);
    const attached = combs.map((comb) => [v, ...comb]);
    results.push(...attached);
  });
  return results;
}

let answer = 0;
const archers = getCombinations([...Array(M).keys()], 3);
// console.log(archers);
function simulate(archerPos) {
  let tempArr = arr.map((row) => [...row]);
  let killCount = 0;

  for (let turn = 0; turn < N; turn++) {
    const targets = [];
    // 각 궁수별로 타겟 선정
    for (let i = 0; i < 3; i++) {
      let minDist = D + 1;
      let target = null;
      for (let r = N - 1 - turn; r >= 0; r--) {
        for (let c = 0; c < M; c++) {
          if (tempArr[r][c] === 1) {
            const dist = Math.abs(N - turn - r) + Math.abs(archerPos[i] - c);
            if (dist <= D) {
              if (
                dist < minDist ||
                (dist === minDist && c < (target ? target[1] : M))
              ) {
                minDist = dist;
                target = [r, c];
              }
            }
          }
        }
      }
      if (target) targets.push(target);
    }
    // 타겟 제거
    targets.forEach(([r, c]) => {
      if (tempArr[r][c] === 1) {
        tempArr[r][c] = 0;
        killCount++;
      }
    });
    // 적 이동(아래로 한 칸)
    if (N - 1 - turn <= 0) break;
    for (let r = N - 2 - turn; r >= 0; r--) {
      for (let c = 0; c < M; c++) {
        tempArr[r + 1][c] = tempArr[r][c];
      }
    }
    for (let c = 0; c < M; c++) {
      tempArr[0][c] = 0;
    }
  }
  return killCount;
}

archers.forEach((archerPos) => {
  answer = Math.max(answer, simulate(archerPos));
});

console.log(answer);
