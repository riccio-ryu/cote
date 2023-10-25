function solution(k, tangerine) {
    let answer = 0;
    const ts = new Map()
    tangerine.map(t => {
        if(ts.has(t)) ts.set(t, ts.get(t)+1)
        else ts.set(t, 1)
    })
    const at = Array.from(ts).sort((a,b) => b[1] - a[1])
    // console.log(at)
    for(let i = 0; i < at.length; i++ ){
        const v = at[i][1]
        // console.log(k)
        if(k - v <= 0){
            answer++
            break;
        }else{
            answer++
            k -= v
        }
    }
    return answer;
}
