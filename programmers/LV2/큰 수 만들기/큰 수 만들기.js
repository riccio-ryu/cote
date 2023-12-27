// 2023

// 2차
/*
4177252841  // 4
[] 
[4]                                         (0)
[4,1]                                       (0)
[4,1] 7 -> [4] 1 , 7 -> [4] 7 -> [7]        (2)
[7] 7                                       (2)
[7,7] 2                                     (2)
[7,7,2] 5 -> [7,7] 2, 5 -> [7,7,5]          (3)
[7,7,5] 2                                   (3)
[7,7,5,2] 8 -> [7,7,5] 2, 8                 (4)
[7,7,5,8]                                   stop
*/
function solution(number, k) {
    const answer = []
    for(let n of number){
        // console.log('n : ', n)
        while(k > 0 && answer.at(-1) < n){  // k는 0보다 크고, answer의 마지막이 n보다 작아야한다.
            // console.log(k, answer.at(-1), n, answer)
            answer.pop(n)
            k--
        }
        answer.push(n)
        // console.log('fn', answer, k)
    }
    return answer.join('').slice(0,number.length-k)
}

// 1차 :  런타임 에러 
// number는 2자리 이상, 1,000,000자리 이하인 숫자입니다. 이니까... 다른 방법을 찾아보자
function solution(number, k) {
    const n = number.split('')
    const arr = fn(n, n.length-k)
    // console.log(arr, arr.sort((a,b) => b-a))
    return arr.sort((a,b) => b-a)[0];
}
function fn (arr, l){
    const res = []
    if(l === 1){
        return arr.map(a => [a])
    }
    arr.forEach((e,i,a) => {
        // console.log(e,i,a)
        const f = a.slice(i + 1);
        const c = fn(f, l - 1)
        const s = c.map(v => e + v)
        // console.log(f, c,s)
        res.push(...s)
    })
    return res
}
