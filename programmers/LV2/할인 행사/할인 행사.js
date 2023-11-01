function solution(want, number, discount) {
    let answer = 0;
    // const n = number.reduce((a,c) => a+c,0) // 총 개수
    const w = {}
    want.map((m,i) => w[m] = number[i])
    // console.log(w)
    discount.forEach((_,i)=>{
        const target = discount.slice(i,i + 10)     // 원소의 합은 10
        const cw = {...w}
        // console.log(target)
        target.map(t => {
            if(cw[t]){
                cw[t]--
            }
            if(cw[t] === 0){
                delete cw[t]
            }
        })
        if(Object.keys(cw).length === 0 ) answer++
    })
    return answer;
}
