//2023
function solution(arr)
{
    let answer = [];
    for(const x of arr){
        if(x === answer[answer.length-1]) continue;
        answer.push(x)
    }
    return answer;
}

//2022
function solution(arr)
{
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        if(answer[answer.length-1] === arr[i]) continue;
        answer.push(arr[i])
    }
    
    return answer;
}


/*
function solution(arr) {
  return arr.filter((element, index) => element !== arr[index + 1]);
}
*/
