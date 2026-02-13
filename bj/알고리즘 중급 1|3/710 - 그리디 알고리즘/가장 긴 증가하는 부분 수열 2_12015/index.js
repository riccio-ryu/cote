// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number);

const L = [A[0]];

function binarySearch(target) {
    let left = 0;
    let right = L.length - 1;

    while (left < right) {
        // console.log('L in BS:', L, 'll', L[L.length - 1], 'target:', target, 'left:', left, 'right:', right);
        let mid = Math.floor((left + right) / 2);
        // console.log('mid:', mid, " ;; ", L[mid], ' // ', L[mid] <target);
        if (L[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return right;
}

for (let i = 1; i < N; i++) {
    const x = A[i];

    // console.log('L:', L, 'll', L[L.length - 1], 'x:', x);
    if (L[L.length - 1] < x) {
        // 현재 숫자가 L의 마지막 값보다 크면 뒤에 추가
        L.push(x);
    } else {
        // 그렇지 않으면 이분 탐색으로 교체할 위치를 찾음
        const idx = binarySearch(x);
        // console.log('--- idx found :', idx, ' // L[idx]:', L[idx], ' // x:', x);
        L[idx] = x;
    }
}

console.log(L.length);
