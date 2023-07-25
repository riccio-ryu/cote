function solution(k, m, score) {
    score.sort((a,b) => b-a)
    let answer = 0;
    let idx = m - 1;
    for(let i = 0; i < Math.floor(score.length / m); i++){
        // console.log('s : ', idx, answer)
        answer += score[idx] * m;
        idx += m;
        // console.log('e : ', idx, answer)
    }
    return answer;
}

/* 시간 초과 : 11,12,13,14,15
// 굳이 쓸대없이 시간을 사용하는 느낌의 코드를 수정하였다. splice 로 자르지 말고, 그냥 index 숫자별로 곱해서 더하면 더 빠를것

function solution(k, m, score) {
    let answer = 0;
    let s = score.sort((a,b) => b-a)
    let sl = score.length
    for(let i = 0; i < Math.floor(sl/m); i++){
        const arr = s.splice(0, m)
        answer += (Math.min(...arr)*m)
    }
    return answer;
}
*/
