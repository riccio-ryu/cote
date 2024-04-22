// 2024

/*

    1 - 2 \
    | /   5
    4  __/
*/
function solution(n, roads, sources, destination) {
    let answer = [];
    const g = Array.from(Array(n+1), () => [])
    roads.forEach(([a,b]) => {
        g[a].push(b)
        g[b].push(a)
    })
    let short = new Array(n + 1).fill(Infinity);
    console.log(g)
    const BFS = (goal) => {
        short[goal] = 0;
        let queue = [goal];
        while (queue.length) {
            let now = queue.shift();
            // console.log('now ', now)
            for (let i = 0; i < g[now].length; i++) {
                // console.log(g[now], short[now], short)
                if (short[now] + 1 < short[g[now][i]]) {
                    short[g[now][i]] = short[now] + 1;
                    queue.push(g[now][i]);
                }
            }
        }
    };
    BFS(destination);
    for (const s of sources) {
        if (short[s] === Infinity) {
            answer.push(-1);
        }else{
            answer.push(short[s]);
        }

    }
    return answer;
}
