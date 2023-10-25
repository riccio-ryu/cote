// 2023
// 2차
function solution(topping) {
    let answer = 0;
    const at = new Map()    // 모든 토핑 갯수
    const b = new Map()     // 지정 기준 토핑 갯수
    topping.map(t => {
        at.set(t, (at.get(t) || 0) + 1)
    })
    // console.log(at)
    for(const t of topping){
        at.set(t, at.get(t) - 1)
        b.set(t, true)
        // console.log(at, b)
        if(!at.get(t)) at.delete(t)
        if(at.size === b.size) answer++
        if(at.size < b.size) break
    }
    return answer;
}

// 1차 10.0 / 100.0  시간초과
function solution(topping) {
    let answer = 0;
    // const t1 = {}, t2 = {}
    let k = 1;          // 기준점 index
    while(k < topping.length){
        const t1 = [...topping].splice(0,k)
        const t2 = [...topping].splice(k)
        const t1l = (new Set(t1)).size
        const t2l = (new Set(t2)).size
        // console.log(t1, t2)
        // console.log(t1l, t2l)
        if(t1l === t2l) answer++
        k++
    }
    return answer;
}
