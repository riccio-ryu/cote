//2024
function solution(progresses, speeds) {
    const answer = [];
    const arr = progresses.map((p,i,a) => {
        return Math.ceil((100 - p) / speeds[i])
    })
    // console.log(arr)
    let max = arr[0]    // 현재 가장 큰수
    answer.push(1)      // 0번째 인덱스부터 출발
    for(let i = 1; i < arr.length; i++){
        // console.log(i, arr[i], max)
        if(arr[i] <= max){
            answer[answer.length - 1]++
        }else{
            answer.push(1)
            max = arr[i]
        }
    }
    return answer;
}

//2022
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
