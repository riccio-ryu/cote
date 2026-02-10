// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

const N = parseInt(input[0]);
const current = input[1].split('').map(Number);
const target = input[2].split('').map(Number);

function toggle(arr, idx) {
    // console.log('Toggle at index:', arr, idx);
    for (let i = idx - 1; i <= idx + 1; i++) {
        if (i >= 0 && i < N) {
            arr[i] = 1 - arr[i];
        }
    }
}

function solve(initialState, firstClick) {
    // console.log('Initial State:', initialState, 'First Click:', firstClick);
    let arr = [...initialState];
    let count = 0;

    if (firstClick) {
        // console.log('First click on index 0');
        toggle(arr, 0);
        count++;
    }

    for (let i = 1; i < N; i++) {
        // console.log(`Checking index ${i-1}:`, arr[i - 1], 'Target:', target[i - 1]);
        if (arr[i - 1] !== target[i - 1]) {
            toggle(arr, i);
            count++;
        }
    }

    for (let i = 0; i < N; i++) {
        // console.log(`Final check index ${i}:`, arr[i], 'Target:', target[i]);
        if (arr[i] !== target[i]) return Infinity;
    }
    return count;
}

const res1 = solve(current, false); // 1번 스위치 안 누름
const res2 = solve(current, true);  // 1번 스위치 누름

const result = Math.min(res1, res2);
console.log(result === Infinity ? -1 : result);
