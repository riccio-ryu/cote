// 2024
// 40분
function solution(N, road, K) {
    let answer = 0;
    const d = Array(N + 1).fill(Infinity);
    const e = Array.from({ length: N + 1 }, () => []);
    road.forEach(([a,b,c]) => {
        e[a].push({to:b, time:c})
        e[b].push({to:a, time:c})
    })
    const p = [{to:1,time:0}]
    d[1] = 0
    // console.log(d, e)
    while(p.length) {
        // console.log('p : ', p)
        let {to, time} = p.pop();
        e[to].forEach(next => {
            // console.log('next : ', next)
            if(d[next.to] > d[to] + next.time) {
                d[next.to] = d[to] + next.time;
                p.push(next);
            }
        })
        // console.log(d)
    }
    // console.log(d)
    return d.filter(i => i <= K).length;
}
