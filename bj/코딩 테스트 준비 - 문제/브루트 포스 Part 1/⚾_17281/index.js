// 2025

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const N = +input[0];
const innings = input.slice(1).map((line) => line.split(" ").map(Number));

let maxScore = 0;
const players = [1, 2, 3, 4, 5, 6, 7, 8];

function getPermutations(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v]);
  let result = [];
  arr.forEach((v, idx, arr) => {
    const rest = arr.filter((_, i) => i !== idx);
    const perms = getPermutations(rest, selectNum - 1);
    const attached = perms.map((perm) => [v, ...perm]);
    result.push(...attached);
  });
  return result;
}

const orders = getPermutations(players, 8);

orders.forEach((order) => {
  // Insert player 0 (the fixed 4th batter) at 3rd index
  const battingOrder = [...order.slice(0, 3), 0, ...order.slice(3)];
  let score = 0;
  let hitterIdx = 0;

  for (let i = 0; i < N; i++) {
    let outs = 0;
    let bases = [0, 0, 0];
    while (outs < 3) {
      const result = innings[i][battingOrder[hitterIdx]];
      if (result === 0) {
        outs++;
      } else {
        // Move runners according to hit type
        let newBases = [0, 0, 0];
        // Advance runners
        for (let b = 2; b >= 0; b--) {
          if (bases[b]) {
            if (b + result >= 3) score++;
            else newBases[b + result] = 1;
          }
        }
        // Batter advances
        if (result >= 4) score++;
        else newBases[result - 1] = 1;
        bases = newBases;
      }
      hitterIdx = (hitterIdx + 1) % 9;
    }
  }
  if (score > maxScore) maxScore = score;
});

console.log(maxScore);
