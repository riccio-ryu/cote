// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);
const N = parseInt(input[0]);
const pos = []; // 1보다 큰 양수
const neg = []; // 음수
let ones = 0;   // 1의 개수
let zeros = 0;  // 0의 개수

for (let i = 1; i <= N; i++) {
    const num = parseInt(input[i]);
    if (num > 1) pos.push(num);
    else if (num < 0) neg.push(num);
    else if (num === 1) ones++;
    else zeros++;
}


pos.sort((a, b) => b - a);
neg.sort((a, b) => a - b);

let maxSum = 0;

for (let i = 0; i < pos.length; i += 2) {
    if (i + 1 < pos.length) {
        maxSum += pos[i] * pos[i + 1];
    } else {
        maxSum += pos[i];
    }
}

for (let i = 0; i < neg.length; i += 2) {
    if (i + 1 < neg.length) {
        maxSum += neg[i] * neg[i + 1];
    } else {
        if (zeros === 0) {
            maxSum += neg[i];
        }
    }
}

maxSum += ones;

console.log(maxSum);
