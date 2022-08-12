function solution(progresses, speeds) {
    let answer = [];
    const tas = progresses.map((prog, index) => {
        return Math.ceil((100 - prog) / speeds[index])
    })
    console.log(tas)
    let mx = tas[0]
    answer.push(0)
    for(let i = 0; i< tas.length; i ++){
        if(tas[i] <= mx){
            answer[answer.length-1] += 1
        }else{
            answer.push(1)
            mx = tas[i]
        }
    }
    return answer;
}
