// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

let i = 0;
let j = 0;
const result = [];

while (i < N && j < M) {
    if (A[i] <= B[j]) {
        result.push(A[i]);
        i++;
    } else {
        result.push(B[j]);
        j++;
    }
}

// console.log(i , N, j, M);
while (i < N) {
    result.push(A[i]);
    i++;
}
while (j < M) {
    result.push(B[j]);
    j++;
}

console.log(result.join(' '));
