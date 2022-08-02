function solution(left, right) {
    let answer = 0;
    let lng = right - left + 1;
    for(let i = left; i <= right; i++){
        const ud = cnty(i);
        if(ud%2 === 0){
            answer += i
        }else{
            answer -= i
        }
    }
    return answer;
}

function cnty(x){
    let cnt = 0;
    for(let i = 1; i <= x; i++){
        if(x%i === 0) cnt+= 1
    }
    return cnt
}


/*
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
*/
