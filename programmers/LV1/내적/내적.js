//2023
function solution(a, b) {
    let answer = 0;
    for(let i = 0; i < a.length; i++){
        answer += a[i] * b[i]
    }
    return answer;
}

//2022
function solution(a, b) {
    return a.reduce((x,y,i) => x+(y*b[i]), 0)
}
