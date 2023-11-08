// dfs?
function solution(k, dungeons) {
    console.log(dungeons)
    let answer = 0;
    const dl = dungeons.length
    const dfs = (k,d,n) => {
        // console.log(k,d,n)
        for(let i = 0; i < dl; i++){
            const [nec, use] = d[i]
            if(!nec || nec > k) continue;
            const cd = [...d]
            cd[i] = [null, null];
            dfs(k - use, cd, n + 1)
        }
        return answer = Math.max(answer, n)
    }
    dfs(k,dungeons,0)
    return answer;
}
