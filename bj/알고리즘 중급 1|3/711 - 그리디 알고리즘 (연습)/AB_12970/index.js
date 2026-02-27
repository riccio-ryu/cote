// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split(' ').map(Number);

const [N,K] = input;
// console.log(N, K);

function solve() {
    for (let a = 0; a <= N; a++) {
        let b = N - a;
        // console.log(`a: ${a}, b: ${b}, a*b: ${a*b}`);
        if (a * b >= K) {
            let res = new Array(N).fill('B');
            for (let i = 0; i < a - 1; i++) {
                res[i] = 'A';
            }
            // console.log(`a: ${a}, b: ${b}, currentK: ${(a - 1) * b}, remainK: ${K - (a - 1) * b} res: ${res.join('')}`);
            let currentK = (a - 1) * b;
            let remainK = K - currentK;
            if (a > 0) {
                res[N - 1 - remainK] = 'A';
            }
            // console.log(`a: ${a}, b: ${b}, currentK: ${(a - 1) * b}, remainK: ${remainK} res: ${res.join('')}`);
            return res.join('');
        }
    }
    return -1;
}

console.log(solve());
