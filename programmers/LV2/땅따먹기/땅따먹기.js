// 2024  50

function solution(land) {
    let arr = Array.from({length : land.length}, () => Array(4).fill(0));
    arr[0] = land[0]
    for(let i = 1; i < land.length; i++){   // 행
        for(let j = 0; j < 4; j++){ // 이전
            let sum = 0
            for(let k = 0; k < 4; k++){ //현재
                if(j===k) continue
                let sum2 = land[i][j] + arr[i-1][k]
                sum = Math.max(sum, sum2)
                // console.log(j,k, land[i][j], arr[i-1][k])
            }
            // console.log('sum ', sum)
            arr[i][j] = sum
        }
    }
    // console.log(Math.max(...arr.at(-1)))
    return Math.max(...arr.at(-1));
}
