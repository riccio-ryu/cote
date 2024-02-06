// 2024

//통과 모든 경우의 수를 보내고 sort해서 첫번째로
function solution(tickets) {
    let answer = [];
    const dfs = (t, ticket, arr) => {
        const u = [...arr, t];
        if( ticket.length === 0){
            answer.push(u)
        }else{
            // console.log(ticket)
            ticket.map((m,i) => {
                if(m[0] !== t) return;
                const to = m[1]
                const next = [...ticket]
                next.splice(i, 1)
                dfs(to, next, u)
            })
        }
    }
    dfs('ICN', tickets, [])
    return answer.sort()[0];
}

// 첫 제출 fail 50/ 100
function solution(tickets) {
    let answer = ['ICN'];
    let now = answer.at(-1)
    const ct = [...tickets]
    for(let i = 0; i < tickets.length; i++){
        const f = ct.filter(t => t[0] === now).sort((a,b) => b[1] > a[1] ? -1 : 1)[0]
        const idx = ct.findIndex(c => c === f)
        const sp = ct.splice(idx, 1)[0][1]
        now = sp
        answer.push(now)
        // console.log(f, idx, 'ct ', ct)
        // console.log(sp)
    }
    return answer;
}
