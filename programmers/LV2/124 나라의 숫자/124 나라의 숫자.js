function solution(n) {
    let answer = '';
    const arar = ['4','1','2']
    
    while(n > 0){
        const r = n%3
        answer = arar[r]+answer
        n = Math.floor((n-1) / 3)
    }
    
    return answer;
}

//복잡하게 생각하지 말자...
/*
0자리에 4가 있다고 생각하자  0은 x 1,2,4,11,12,14  3으로 나누어 떨어지는 (나머지가 0인)때에는 4가 있다.
ex) 10이라면은 10 -> r =1, n=3 / '1' -> r=0, n=0 / '4'+'1'

*/
