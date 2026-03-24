// 2026

// 2026

const fs = require('fs');
const N = parseInt(fs.readFileSync('example').toString().trim());

let results = [];
let count = 0;

function hanoi(n, from, to, other) {
    // console.log(`hanoi(${n}, ${from}, ${to}, ${other}) called`, 'results:', results, 'count:', count);
    if (n === 0) return;

    hanoi(n - 1, from, other, to);

    results.push(`${from} ${to}`);
    count++;
// console.log(' -- ', 'results:', results, 'count:', count, `n, ${n}, ${from}, ${to}, ${other}`);
    hanoi(n - 1, other, to, from);
}

hanoi(N, 1, 3, 2);

console.log(count);
console.log(results.join('\n'));

/*
3 1 3 2  ->  
2 1 2 3  / 2 2 3 1 

2 1 2 3 -> 
1 1 3 2  / 1 3 2 1

1 1 3 2 -> 
0 1 2 3  / 0 2 3 1

0 1 2 3 (1 1 3 2) X  : [1,3]

0 2 3 1 (1 1 3 2) x

1 3 2 1 (2 1 2 3) -> 
0 3 1 2 / 0 1 2 3

0 3 1 2 X

0 1 2 3 (2 1 2 3) x

*/
