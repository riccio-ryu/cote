// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim();

// console.log(input);
const groups = input.split('-');
// console.log(groups);
const results = groups.map(group => {
    return group.split('+')
                .map(Number)
                .reduce((acc, curr) => acc + curr, 0);
});

let answer = results[0];
// console.log(results);
for (let i = 1; i < results.length; i++) {
    // console.log('rr ', results[i], ' a: ', answer);
    answer -= results[i];
}

console.log(answer);
