const input = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(Number);
// input -> n, m
//(1 ≤ M ≤ N ≤ 8)

const N = input[0];
const M = input[1];

let ss = (N,M) => {
    let arr = Array(M).fill(0);     // 자릿수 1 2 3 4 or 1 2
    let nums = Array(N).fill(0);    // 숫자의 사용여부? 0 -> 사용안함(사용가능), 1 -> 사용 중
    let ret = ''

    let func = (num) => {
        // console.log('num  ', num);
        if(num === M){
            let data = []
            for (let i = 0; i < M; i++) {
                data.push(arr[i]);
            }
            // console.log(data);
            return ret += `${data.join(' ')}\n`
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
    return ret
}
console.log(ss(N,M));

//https://chamdom.blog/dfs-using-js/ 참고
/* 해당 문제에서 for문을 여러번 돌리려 했으나 메모리 에러가 발생 
    해당 내용이 dfs 로 판단하여 자바스크립트의 dfs를 재귀하는 방법을 찾아보았다.
*/