// 2023
// 2차
function solution(weights) {
    // 1:1, 2:3, 2:4, 3:4 -> 1, 2/3, 2, 3/4
    let answer = 0;
    const ra = [1, 3/2, 2, 4/3]
    const m = new Map()
    weights = weights.sort((a,b)=> b - a)
    for(const w of weights){
        for(const r of ra){
            // console.log(m, w, r, w*r, (m.has(w*r)))
            if(m.has(w*r)) answer += m.get(w*r)
        }
        m.set(w, (m.get(w) || 0) + 1)
        // console.log(m)
    }
    return answer;
}

// for문이 여러개라서 시간 초과? >> map이나 set
// 비율 저장하고, map에 넣어가며 비교

// 1차, 64.7 / 100.0 :: 시간 초과
function solution(weights) {
    let answer = 0;
    weights = weights.sort((a,b)=> a - b)
    for(let i = 0; i < weights.length; i++){
        for(let j = i+1; j < weights.length; j++){
            // console.log(i,j,weights[i], weights[j])
            if(weights[i]*4 === weights[j]*3 || weights[i]*4 === weights[j]*2 || weights[i]*3 === weights[j]*2 || weights[i] === weights[j]) answer++
        }
    }
    return answer;
}
