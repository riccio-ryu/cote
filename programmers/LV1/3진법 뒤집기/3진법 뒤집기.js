//2023
function solution(n) {
    let t = n.toString(3)
    let r = t.split('').reverse().join('')
    return parseInt(r, 3);
}

//2022
function solution(n) {
    let answer = '';
    let thr = n.toString(3).split('')
    for(let i = thr.length -1; i >= 0 ; i--){
        answer += thr[i]
    }
    return parseInt(answer,3);
}


/*
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
*/
