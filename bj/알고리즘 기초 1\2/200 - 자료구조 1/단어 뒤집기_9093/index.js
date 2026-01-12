// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);
const T = parseInt(input[0]);
let result = "";

for (let i = 1; i <= T; i++) {
    const sentence = input[i];
    
    const words = sentence.split(' ');
    
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    
    result += reversedWords.join(' ') + '\n';
}

process.stdout.write(result);
