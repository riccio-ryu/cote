// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

console.log(input);

const N = parseInt(input[0]);
const times = input[1].split(' ').map(Number);
// console.log(times);

times.sort((a, b) => a - b);

// console.log(times);

let totalSum = 0;
let currentSum = 0;

for (let i = 0; i < N; i++) {
    currentSum += times[i];
    totalSum += currentSum;
}

console.log(totalSum);
