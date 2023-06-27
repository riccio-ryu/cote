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
배열로 문제를 풀어보니 시간초과 발생으로
객체에 순서를 정해줘서 바꿔가면서 하니까 정상 작동하였다
*/
