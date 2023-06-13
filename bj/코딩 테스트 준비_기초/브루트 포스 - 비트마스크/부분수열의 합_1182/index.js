// 1 ≤ N ≤ 20, |S| ≤ 1,000,000

const input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map((v) => v.split(" ").map((v) => +v));

let [first, arr, ...etc] = input
let N = first[0]
let S = first[1]

const d = (N,S,arr) => {
    let cnt = 0;

    const rec = (i, sum) => {
        if(i === N) return; // 끝까지 다돔 종료
        
        sum += arr[i]   //기존 sum에 합

        if(sum === S) cnt++;
        
        rec(i + 1, sum);
        rec(i + 1, sum - arr[i])
    };
    rec(0,0)
    console.log(cnt);
}

d(N,S,arr);