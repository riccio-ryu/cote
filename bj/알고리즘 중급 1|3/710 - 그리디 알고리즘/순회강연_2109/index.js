// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

const n = parseInt(input[0]);
if (n === 0) {
    console.log(0);
    process.exit();
}

const speeches = [];
let maxDay = 0;
for (let i = 1; i <= n; i++) {
    const [p, d] = input[i].split(' ').map(Number);
    speeches.push([p, d]);
    if (d > maxDay) maxDay = d;
}

speeches.sort((a, b) => b[0] - a[0]);
// console.log(speeches);

const parent = new Array(maxDay + 1).fill(0).map((_, i) => i);

function find(i) {
    // console.log('find i :>> ', i, parent[i]);
    if (parent[i] === i) return i;
    return parent[i] = find(parent[i]);
}

let totalIncome = 0;

for (let i = 0; i < n; i++) {
    const [p, d] = speeches[i];
    
    let availableDay = find(d);
    // console.log('availableDay :>> ', availableDay, parent, p, d);
    
    if (availableDay > 0) {
        totalIncome += p;
        
        parent[availableDay] = find(availableDay - 1);
    }
}

console.log(totalIncome);
