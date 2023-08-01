function solution(a, b, n) {
    let answer = 0;
    let x = n;  //x clone
    while(true){
        // console.log('xxxx : ', x)
        if(x < a) break;
        const v = parseInt(x/a) * b;
        const r = x % a;
        // console.log(v, r)
        x = x - (x - r) + v;
        answer += v;
    }
    return answer;
}
