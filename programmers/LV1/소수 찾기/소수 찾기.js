function solution(n) {
    let answer = 0;
    for(let i = 2; i <= n; i++){
        isPrime(i) ? answer+=1 : answer+=0 ;
    }
    return answer;
}

function isPrime(x) {
    for(let i = 2; i <= Math.sqrt(x); i++ ){
        if(x%i === 0) return false;
    }
    return x >= 2
}
