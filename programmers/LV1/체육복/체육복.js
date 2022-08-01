function solution(n, lost, reserve) {
    let answer = 0;
    let cloth = new Array(n).fill(1)
    for(x of lost) cloth[x-1] -= 1
    for(x of reserve) cloth[x-1] += 1
    for(let i =0; i< n; i++){
        if(cloth[i] === 0 && cloth[i+1] === 2 || cloth[i] === 2 && cloth[i+1] === 0 ){
            cloth[i] = 1
            cloth[i+1] = 1
        }
    }
    answer = cloth.filter(x => x>=1).length
    return answer;
}


/*
function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}
*/
