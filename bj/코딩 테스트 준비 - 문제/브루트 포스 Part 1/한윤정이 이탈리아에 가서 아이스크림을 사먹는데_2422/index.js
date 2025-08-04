// 2025

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n").map(line => line.split(" ").map(Number));
const [n, m] = input[0];
const edges = input.slice(1).map(edge => edge.map(Number));

// 금지 조합
const forbidden = new Set();
for (const [a, b] of edges) {
    forbidden.add(`${a},${b}`);
    forbidden.add(`${b},${a}`);
}
// console.log(forbidden);
let count = 0;
// 3개 아이스크림을 고르는 모든 조합
for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
        // console.log(i, j, forbidden.has(`${i},${j}`));
        if (forbidden.has(`${i},${j}`)) continue;
        for (let k = j + 1; k <= n; k++) {
            if (forbidden.has(`${i},${k}`) || forbidden.has(`${j},${k}`)) continue;
            count++;
        }
    }
}
console.log(count);
