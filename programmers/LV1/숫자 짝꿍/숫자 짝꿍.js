function solution(X, Y) {
    let answer = '';
    const x = X.split('').map(Number).sort((a,b) => b-a);
    const y = Y.split('').map(Number).sort((a,b) => b-a);
    // console.log(x,y)
    for(let i = 9; i >= 0; i--){
        const xl = x.filter(n => n === i).length;
        const yl = y.filter(n => n === i).length;
        answer += i.toString().repeat(Math.min(xl, yl));
    }
    // console.log(answer, parseInt(answer))
    
    return answer === "" ? "-1" : parseInt(answer) === 0 ? "0" : answer;
}
