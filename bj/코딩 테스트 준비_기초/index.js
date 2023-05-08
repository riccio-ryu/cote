const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let cnt, num;
[cnt, num] = input[0].split(' ').map(Number);
const str = input[1].split(' ').sort()
const vow = ['a','e', 'i','o','u']

let ff = (n,m) => {
    let c = Array(m).fill('')    //자릿수 (cnt)
    let k = Array(n).fill(0)    // 사용여부(num)
    let v = []
    let uu = (t) => {
        if(t === m){
            let data = []
            for (let i = 0; i < m; i++) {
                data.push(c[i])
            }
            v.push(data.sort())
        }
        for (let i = 0; i < n; i++) {
            if(!k[i]){
                c[t] = str[i]
                k[i] = 1
                uu(t+1)
                k[i]=0
            }
        }
    }
    uu(0)
    const ccc = [...new Set(v.map(o => o.join('')))]
    for (let i = 0; i < ccc.length; i++) {
        let z = 0;
        for (let j = 0; j < vow.length; j++) {
            if(ccc[i].includes(vow[j])) {
                z += 1
            }
        }
        if(z > 0){
            console.log(ccc[i]);
        }
    }
}
ff(num, cnt)

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