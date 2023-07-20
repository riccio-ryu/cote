function solution(k, score) {
    let answer = [];
    let arr = [];
    
    for(let i = 0; i < score.length; i++){
        arr.push(score[i])
        arr.sort((a,b) => b-a)
        if(arr.length > k) arr.pop()
        answer.push(Math.min(...arr))
    }
    
    return answer;
}
