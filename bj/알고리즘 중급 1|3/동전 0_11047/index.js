// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

let [N, K] = input[0].split(' ').map(Number);
const coins = [];

for (let i = 1; i <= N; i++) {
    coins.push(parseInt(input[i]));
}

let count = 0;

// console.log(N,K,coins);

for (let i = N - 1; i >= 0; i--) {
    const coin = coins[i];
    // console.log(`iiii ${i} cc: ${coin} j ? ${K >= coin}`);

    if (K >= coin) {
        count += Math.floor(K / coin);
        K %= coin;
    }

    if (K === 0) break;
}

console.log(count);
