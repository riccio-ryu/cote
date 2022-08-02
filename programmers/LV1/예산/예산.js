function solution(d, budget) {
    let answer = d.sort((a,b) => a-b);
    let cnt = 0;
    for(let i = 0; i < d.length; i++){
        if(budget -d[i] < 0) break;
        budget -= d[i]
        cnt+=1
    }
    return cnt;
}



/*
function solution(d, budget) {
    return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
}
*/


/*
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}
*/
