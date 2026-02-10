// 2026

// 이해불가
const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

const N = parseInt(input[0]);
const rows = [];
// 'T'를 1, 'H'를 0으로 변환하여 비트(숫자)로 각 행을 저장
for (let i = 1; i <= N; i++) {
    let rowBit = 0;
    for (let j = 0; j < N; j++) {
        if (input[i][j] === 'T') {
            // console.log(`Row ${i}: Found 'T' at column ${j}`, rowBit, 1 << j);
            rowBit |= (1 << j);
        }
    }
    rows.push(rowBit);
    // console.log(`Row ${i} bitmask:`, rowBit, rows);
}

let minTotalT = N * N;

// console.log(rows, minTotalT);
for (let bit = 0; bit < (1 << N); bit++) {
    let currentTotalT = 0;

    for (let j = 0; j < N; j++) {
        let countT = 0;
        
        for (let i = 0; i < N; i++) {
            let curr = (rows[i] & (1 << j)) !== 0;
            
            if (bit & (1 << i)) {
                curr = !curr;
            }
            
            if (curr) countT++;
        }
        
        currentTotalT += Math.min(countT, N - countT);
    }
    
    if (currentTotalT < minTotalT) {
        minTotalT = currentTotalT;
    }
}

console.log(minTotalT);
