// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);
const T = parseInt(input[0]);
let result = [];

for (let i = 1; i <= T; i++) {
    const s = input[i].trim();
    let stack = [];
    let isVPS = true;

    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                isVPS = false;
                break;
            }
            
            stack.pop();
        }
        // console.log('c ', stack);
    }

    if (stack.length > 0) isVPS = false;

    result.push(isVPS ? "YES" : "NO");
    // console.log('--')
}

console.log(result.join('\n'));
