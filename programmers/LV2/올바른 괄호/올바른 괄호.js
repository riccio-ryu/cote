function solution(s){
    let cnt = 0;
    
    for(x of s){
        if(x === '(') cnt+=1
        if(x === ')') cnt -= 1
        if(cnt < 0) return false
    }

    return cnt === 0 ? true : false ;
}
