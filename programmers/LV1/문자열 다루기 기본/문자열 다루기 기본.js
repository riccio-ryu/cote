//2023
function solution(s) {
    return parseInt(s) === +s && (s.length === 4 || s.length === 6) ? true : false;
}

//2022
function solution(s) {
    let answer = true;
    if(s.length === 4 || s.length === 6){
        let cas = (Number(s))
        answer = cas === parseInt(s) ? true : false;
    }else{
        answer = false
    }
    return answer;
}



/*
function solution(s) {
  return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
}
*/
