function solution(number, limit, power) {
    let answer = 0;
    for(let i = 1; i <= number; i++){
        let x = 1;      // 수 1,2,3,4,5,,,
        let num = 0;    // 개수
        let f = false;
        
        while(x*x <= i){
            if(i%x === 0) {
                num++;
                if(x * x !== i) {
                    num++;
                }
            }
            x++;
            if(num > limit) {
                f = true;
                break;
            }
        }
        answer += f ? power : num;
    }
    return answer;
}

/* 시간초과 24,25

function solution(number, limit, power) {
    let answer = 0;
    // console.log(number, limit, power)
    const ns = y(number)
    // console.log(ns)
    ns.map(x => {
        answer += x > limit ? +power : x
    })
    return answer;
}

function y(x){
    let arr = [];
    for(let i = 1; i <= x; i++){
        let cnt = 1;
        for(let j = 1; j <= i/2; j++){
            cnt += i%j === 0 ? 1 : 0
            // console.log('i : ', i, 'j : ', j, 'cnt : ', cnt)
            // console.log(i%j === 0 ? 'q' : 'a')
        }
        arr.push(cnt)
    }
    // console.log(arr)
    return arr
}

*/
