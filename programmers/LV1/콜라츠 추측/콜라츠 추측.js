//2023
function solution(num) {
    let answer = 0;
    if(num < 2){
        return 0
    }
    const fc = (n) => {
        if(answer >= 500){
            return answer = -1
        }else if(n===1){
            return answer
        }else if(n%2 ===0){
            answer++
            fc(n/2)
        }else{
            answer++
            fc(n*3 + 1)
        }
    }
    fc(num)
    return answer;
}

//2022
function solution(num) {
    let answer = 0;
    let cast = (num) => {
        if(num === 1){
            return answer;
        }else if( num%2 === 0){
            answer+=1
            cast(num/2)
        }else{
            answer+=1
            cast(num*3 + 1)
        }
    }
    cast(num)
    return answer >= 500 ? -1 : answer ;
}
