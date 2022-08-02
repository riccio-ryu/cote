function solution(N, stages) {//N 스테이지 개수 N+1 최종, stages는 배열.. 1~n+1, return은 실패율 높은 스테이지 번호 내림차순
    let answer = [];
    let sl = stages.length
    for(let i = 1; i< N+1; i++){
        const top = stages.filter(x => x===i).length
        const bot = stages.filter(x => x>=i).length
        answer.push([i, top/bot])
    }
    answer.sort((a, b) => b[1]-a[1])
    return answer.map(x => x[0]);
}



/*
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}
*/
