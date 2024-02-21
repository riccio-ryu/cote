//2024
function solution(s){
    let answer = 0;
    for(const x of s){
        if(x === '(') answer++
        if(x === ')') answer--
        if(answer < 0) return false
    }
    return answer === 0 ? true : false;
}
//2022
function solution(s){
    let cnt = 0;
    
    for(const x of s){
        if(x === '(') cnt+=1
        if(x === ')') cnt -= 1
        if(cnt < 0) return false
    }

    return cnt === 0 ? true : false ;
}
