const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let cnt, num;
[cnt, num] = input[0].split(' ').map(Number);
const str = input[1].split(' ').sort()
const vow = ['a','e', 'i','o','u']
const ans = [];

let ff = (txt, ind) => {
    if(txt.length === cnt){
        let n = 0;
        for (let i = 0; i < txt.length; i++) {
            if(vow.includes(txt[i])) n++;
        }
        if(n > 0 && cnt - n > 1){
            ans.push(txt)
        }
    }else{
        for (let i = ind; i < num; i++) {
            ff(txt + str[i], i+1)
        }
    }
}

ff('',0)
console.log(ans.join('\n'));

// let ff = (n,m) => {
//     let c = Array(m).fill('')    //자릿수 (cnt)
//     let k = Array(n).fill(0)    // 사용여부(num)
//     let v = []
//     let uu = (t) => {
//         if(t === m){
//             let data = []
//             for (let i = 0; i < m; i++) {
//                 data.push(c[i])
//             }
//             const val = data.sort().join('')
//             let z = 0
//             for (let i = 0; i < vow.length; i++) {
//                 if(data.includes(vow[i])) z += 1
//             }
//             if(!v.includes(val) && z > 0) v.push(val)
//         }
//         for (let i = 0; i < n; i++) {
//             if(!k[i]){
//                 c[t] = str[i]
//                 k[i] = 1
//                 uu(t+1)
//                 k[i]=0
//             }
//         }
//     }
//     uu(0)
//     console.log(v.join('\n'));
//     // const ccc = [...new Set(v.map(o => o.join('')))]
//     // for (let i = 0; i < ccc.length; i++) {
//     //     let z = 0;
//     //     for (let j = 0; j < vow.length; j++) {
//     //         if(ccc[i].includes(vow[j])) {
//     //             z += 1
//     //         }
//     //     }
//     //     if(z > 0){
//     //         console.log(ccc[i]);
//     //     }
//     // }
// }
// ff(num, cnt)

// console.log(cnt);
// console.log(num);
// console.log(str);
// let v = ''
// for (let i = 0; i < cnt; i++) {
//     let txt = ''
//     for (let j = i+1; j < num; j++) {
//         txt = str[i] + str[j]
//         if(!v.includes(txt)){
//             v += txt+'\n';
//         }
//     }
// }
// console.log(v);
