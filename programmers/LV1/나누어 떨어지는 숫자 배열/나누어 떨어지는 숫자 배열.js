//2023
function solution(arr, divisor) {
    let answer = [];
    arr.forEach(a => {
        if(a%divisor === 0){
            answer.push(a)
        }
    })
    return answer.length > 0 ? answer.sort((a,b) => a-b) : [-1];
}

/2022
function solution(arr, divisor) {
    let answer = [];
    for(const num of arr){
        if(num%divisor === 0) answer.push(num)
    }
    if(answer.length > 0){
        answer.sort((a,b) => a-b)
    }else{
        answer.push(-1)
    }
    return answer;
}


/*
function solution(arr, divisor) {
  const answer = arr.filter((element) => element % divisor === 0);
  answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => a - b);
  return answer;
}
*/
