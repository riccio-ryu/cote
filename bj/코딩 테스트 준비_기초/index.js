// N(1 ≤ N ≤ 10,000)

const [cnt, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split(/\s+/).map(v => +v);


const sv = (cnt, arr) => {
    let answer = '';
    const arrSort = [...arr].sort((a,b) => a-b)
    if(arr.every((v,i) => v === arrSort[i])){
        answer = '-1'
    }else{
        let i = cnt - 2;    // 말둘
        while (arr[i] < arr[i+1]) {
            i--;
        }
        let j = cnt - 1;    // 말
        while (arr[i] < arr[j]) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        answer = [
            ...arr.slice(0, i + 1),
            ...arr.slice(i + 1, cnt).sort((a,b) => b - a)
        ].join(' ')
    }
    console.log(answer);
}

sv(cnt, arr)