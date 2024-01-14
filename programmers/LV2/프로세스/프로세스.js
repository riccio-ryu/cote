// 2024

function solution(priorities, location) {
    let answer = 0;
    // let arr = Array.from({length:priorities.length}, (_,i) => i)
    // console.log(arr)
    let cp = [...priorities]
    let data = priorities.map((p,i) => ({p,i}))
    while(data.length){
        const {p,i} = data.shift()
        const max = Math.max(...cp)
        // console.log(p,i, max, data)
        if(max <= p){
            // console.log('same', max, p, i, data, location, cp)
            answer++
            cp[i] = 1
            if(i === location) break
        }else{
            data.push({p,i})
        }
    }
    return answer;
}
