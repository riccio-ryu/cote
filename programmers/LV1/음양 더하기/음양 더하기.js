function solution(absolutes, signs) {
    let answer = 0;
    for(let i =0; i< absolutes.length; i++){
        answer += (signs[i] ? +absolutes[i] : -absolutes[i]) 
    }
    return answer;
}

/*
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

reduce 를 이용한다... 매우 간단하게 가능...
0은 시작점, acc은 현재까지 더해진, val은 지금 
*/
