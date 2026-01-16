// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);
let leftStack = input[0].split('');
let rightStack = [];
const M = parseInt(input[1]);

for (let i = 2; i < 2 + M; i++) {
    const cmd = input[i];

    if (cmd[0] === 'L') {
        if (leftStack.length > 0) {
            rightStack.push(leftStack.pop());
        }
    } else if (cmd[0] === 'D') {
        if (rightStack.length > 0) {
            leftStack.push(rightStack.pop());
        }
    } else if (cmd[0] === 'B') {
        if (leftStack.length > 0) {
            leftStack.pop();
        }
    } else if (cmd[0] === 'P') {
        const char = cmd[2];
        leftStack.push(char);
    }
}

console.log(leftStack.join('') + rightStack.reverse().join(''));
