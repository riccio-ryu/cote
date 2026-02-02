// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

const N = parseInt(input[0]);
const meetings = [];

for (let i = 1; i <= N; i++) {
    meetings.push(input[i].split(' ').map(Number));
}

// console.log(meetings);

meetings.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];
});

let count = 0;
let lastEndTime = 0;

// console.log(meetings);

for (let i = 0; i < N; i++) {
    const [start, end] = meetings[i];

    if (start >= lastEndTime) {
        count++;
        lastEndTime = end;
    }
}

console.log(count);
