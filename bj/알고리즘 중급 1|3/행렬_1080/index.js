// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

const [N, M] = input[0].split(' ').map(Number);
const A = input.slice(1, N + 1).map(line => line.split('').map(Number));
const B = input.slice(N + 1).map(line => line.split('').map(Number));

let count = 0;

function flip(x, y) {
    for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
            A[i][j] = 1 - A[i][j]; // 0이면 1로, 1이면 0으로
        }
    }
}

for (let i = 0; i <= N - 3; i++) {
    for (let j = 0; j <= M - 3; j++) {
        if (A[i][j] !== B[i][j]) {
            flip(i, j);
            count++;
        }
    }
}

let isPossible = true;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (A[i][j] !== B[i][j]) {
            isPossible = false;
            break;
        }
    }
    if (!isPossible) break;
}

console.log(isPossible ? count : -1);
