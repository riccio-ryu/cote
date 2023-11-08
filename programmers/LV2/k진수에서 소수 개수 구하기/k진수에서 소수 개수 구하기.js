//2023

// 2차
// 원인 : Math.sqrt(num) 하는 부분에서 미만이 아닌 이하로....
function solution(n, k) {
    let answer = 0;
    const nk = n.toString(k).split('0').map(Number).filter(num => num !== 1 && num !== 0)
    // console.log(nk)
    nk.map(num => {
        let flag = false
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num%i === 0 ) {
                flag = true
                break
            }
        }
        answer += flag ? 0 : 1
    })
    return answer;
}

// 1차, 합계: 89.3 / 100.0
/*
0P0, P0, 0P, P
0만 제거하면 P여야 한다?
*/
function solution(n, k) {
    let answer = 0;
    const nk = n.toString(k).split('0').map(Number).filter(num => num !== 1 && num !== 0)
    // console.log(nk)
    nk.map(num => {
        let flag = false
        for(let i = 2; i < Math.sqrt(num); i++){
            if(num%i === 0 ) {
                flag = true
                break
            }
        }
        answer += flag ? 0 : 1
    })
    return answer;
}
