//4 ≤ N ≤ 20,

const input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map((v) => v.split(" ").map((v) => +v));

let [n, ...arr] = input
n = n[0]
const h = n/2 // 팀원 수 :: 6 -> 3 ,  8 -> 4
const list = [];    // 팀원 합산 리스트
let startTeam = []; // start team num
let linkTeam = [];  // link team num
let people = [];    // 0,1,2,3,4,5,6,,,,,,,
for (let i = 0; i < n; i++) people.push(i)
let v = new Array(n).fill(0)

const sum = (cnt, start) => {
    if (cnt === h) {
        linkTeam = pp(people, startTeam);
        const startNum = calc(arr, startTeam)
        const linkNum = calc(arr, linkTeam)
        list.push(Math.abs(startNum - linkNum))
        return
    }
    for (let i = start; i < n; i++) {
        if (v[i]) continue;
        v[i] = 1;
        startTeam.push(i);
        sum(cnt+1, i)
        startTeam.pop()
        v[i] = 0
    }
}
const pp = (p,t) => {   // link team make func
    let result = [];
    for (let i = 0; i < n; i++) {
        if (!t.includes(p[i])) result.push(p[i])
    }
    return result;
}
const calc = (c,t) => { // sum calculator func
    let result = 0;
    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (i === j) continue;
            result += c[t[i]][t[j]]
        }
    }
    return result;
}
sum(0,0)
console.log(Math.min(...list));


/*
n = n[0]
a = n -1

console.log(n, arr);

for (let i = 0; i < n/2; i++) {
    for (let j = 0; j < n; j++) {
        if(i === j) continue;
        // console.log('i,j : ', i, j, arr[i][j], arr[j][i], arr[i][j] + arr[j][i]);
        const data1 = arr[i][j] + arr[j][i];
        const data2 = arr[n - i][n-j] + arr[n-j][n-i]
        // console.log(n,a, i,j,Math.abs(a - i), Math.abs(a-j), arr[Math.abs(a - i)], arr[Math.abs(a-j)]);
        const m = Math.abs(data1 - data2)
        console.log(i, j, m, data1, data2);
        console.log('++++', arr[i][j], arr[j][i], arr[a - i][a-j] , arr[a-j][a-i]);
        list.push(m)
    }
}
console.log(list);
// console.log(Math.min(...list));
*/