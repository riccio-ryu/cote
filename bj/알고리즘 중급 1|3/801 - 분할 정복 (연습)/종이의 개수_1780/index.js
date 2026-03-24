// 2026

// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

const N = parseInt(input[0]);
const board = input.slice(1).map(line => line.split(' ').map(Number));

// console.log(board);
let countMinus1 = 0;
let count0 = 0;
let count1 = 0;

function check(x, y, size) {
    const firstValue = board[x][y];
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (board[i][j] !== firstValue) return false;
        }
    }
    return true;
}

function solve(x, y, size) {
    // console.log(`Checking block: (${x}, ${y}), size: ${size}`);
    // console.log('Block values:', check(x, y, size), board[x][y]);
    if (check(x, y, size)) {
        // 모두 같은 숫자라면 카운트 증가
        if (board[x][y] === -1) countMinus1++;
        else if (board[x][y] === 0) count0++;
        else count1++;
        // console.log(` --- 0: ${count0}, -1: ${countMinus1}, 1: ${count1}`);
        return;
    }

    // 숫자가 다르다면 9등분
    const nextSize = size / 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            solve(x + i * nextSize, y + j * nextSize, nextSize);
        }
    }
}

solve(0, 0, N);
console.log(countMinus1);
console.log(count0);
console.log(count1);
