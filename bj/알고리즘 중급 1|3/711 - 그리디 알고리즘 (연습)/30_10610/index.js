// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim();

const digits = input.split('');

if (!digits.includes('0')) {
    console.log(-1);
    process.exit();
}

const sum = digits.reduce((acc, curr) => acc + parseInt(curr), 0);
// console.log(sum);
if (sum % 3 !== 0) {
    console.log(-1);
    process.exit();
}

const result = digits.sort((a, b) => b - a).join('');

console.log(result);
