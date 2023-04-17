const input = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(Number);
// input -> n, m
//(1 ≤ M ≤ N ≤ 8)

const N = input[0];
const M = input[1];

let ss = (N,M) => {
    let arr = Array(M).fill(0);     // 자릿수 1 2 3 4 or 1 2
    let nums = Array(N).fill(0);    // 숫자의 사용여부? 0 -> 사용안함(사용가능), 1 -> 사용 중
    let ret = []

    let func = (num) => {
        // console.log('num  ', num);
        if(num === M){
            let data = []
            for (let i = 0; i < M; i++) {
                data.push(arr[i]);
            }
            ret.push(data.sort((a,b) => a-b))
        }
        for (let i = 0; i < N; i++) {
            if(!nums[i]){   // nums i번째가 0(false)라면 사용 가능이다...
                arr[num] = i+1
                nums[i] = 1
                func(num + 1)
                nums[i] = 0
            }
        }
    }

    func(0)
    // const uniq = ret.filter((c,idx) => {
    //     return(
    //         ret.findIndex(
    //             (item => item[0] === c[0] && item[1] === c[1])
    //         ) === idx
    //     )
    // })
    // console.log('aa ', [...new Set(ret.join('|').split('|'))].map(v => v.split(',')).map(v => v.map(a => +a)));
    const uniq = () => {
        return [...new Set(ret.join('|').split('|'))].map(v => v.split(',')).map(v => v.map(a => +a));
    }
    const val = uniq()
    for (let i = 0; i < val.length; i++) {
        console.log(val[i].join(' '));
    }
}
ss(N,M)

// 주석 처리 된것은 틀렸습니다 나옴...