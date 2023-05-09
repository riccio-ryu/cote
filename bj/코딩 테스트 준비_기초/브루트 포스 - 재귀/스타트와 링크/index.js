//4 ≤ N ≤ 20,

const input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map((v) => v.split(" ").map((v) => +v));

let [n, ...arr] = input
const list = [];
n = n[0]
a = n -1

// console.log(n, arr);

for (let i = 0; i < n/2; i++) {
    for (let j = 0; j < n; j++) {
        if(i === j) continue;
        // console.log('i,j : ', i, j, arr[i][j], arr[j][i], arr[i][j] + arr[j][i]);
        const data1 = arr[i][j] + arr[j][i];
        const data2 = arr[a - i][a-j] + arr[a-j][a-i]
        // console.log(n,a, i,j,Math.abs(a - i), Math.abs(a-j), arr[Math.abs(a - i)], arr[Math.abs(a-j)]);
        const m = Math.abs(data1 - data2)
        console.log(i, j, m, data1, data2);
        console.log('++++', arr[i][j], arr[j][i], arr[a - i][a-j] , arr[a-j][a-i]);
        list.push(m)
    }
}
// console.log(list);
// console.log(Math.min(...list));
