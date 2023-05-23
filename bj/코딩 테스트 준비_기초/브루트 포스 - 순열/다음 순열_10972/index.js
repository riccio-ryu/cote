// N(1 ≤ N ≤ 10,000)

const [cnt, ...arr] = require('fs').readFileSync('example.txt').toString().trim().split(/\s+/).map(v => +v);


const sv = (cnt, arr) => {
    let answer = '';
    const arrSort = [...arr].sort((a,b) => b-a)
    if(arr.every((v,i) => v === arrSort[i])){
        answer = '-1'
    }else{
        let i = cnt - 2;    // 말둘
        while (arr[i] > arr[i+1]) {
            i--;
        }
        let j = cnt - 1;    // 말
        while (arr[i] > arr[j]) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        answer = [
            ...arr.slice(0, i + 1),
            ...arr.slice(i + 1, cnt).sort((a,b) => a - b)
        ].join(' ')
    }
    console.log(answer);
}

sv(cnt, arr)

/*
let part = arr[cnt-1]
let b = 0

for (let i = cnt; i > 0; i--) {
    if(part <= arr[i - 1]){
        b = i
        break;
    }
    part = arr[i - 1]
}

let ar1 = arr.splice(0, b-1)
let ar2 = [...arr]

for (let i = ar2.length - 1; i >= 0; i--) {
    if(ar1[ar1.length -1] < ar2[i]){
        let w = ar1[ar1.length -1]
        ar1.splice(ar1.length -1, 1, ar2[i])
        ar2.splice(i, 1, w)
        console.log(ar1.join(' ') + ' ' + ar2.join(' '));
    }
    if(i === 0){
        console.log(-1);
    }
}
*/
// 참조 : https://kwanghyuk.tistory.com/25