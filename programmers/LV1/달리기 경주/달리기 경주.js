function solution(players, callings) {
    const M = new Map();
    players.map((n,i) => {
        M.set(n,i)
    })
    callings.map(n => {
        const ci = M.get(n)
        const e = players[ci - 1]
        players[ci - 1] = players[ci]
        players[ci] = e
        M.set(n, M.get(n) - 1)
        M.set(e, M.get(n) + 1)
    })
    return players;
}

/*
array로 풀려니 사간초과 에러 발생으로
객체로 각 선수의 순서를 기입해서 푸는 방법으로 바꾸었다
{a:1, b:2, c:3} -> {a:3,b:2,c:1}
해당 객체 기반에 순서를 참고하여 배열함
*/


/* 시간 초과 에러
function solution(players, callings) {
    let answer = [];
    let cl = callings.length
    let cnt = 0;    
    while (cnt < cl){
        let now = callings[cnt]
        const isName = (x) => x === now
        let ind = players.findIndex(isName)
        sw(players, ind, ind-1)
        cnt++;
    }
    answer = [...players]
    return answer;
}
function sw(arr, i1, i2) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}
*/
