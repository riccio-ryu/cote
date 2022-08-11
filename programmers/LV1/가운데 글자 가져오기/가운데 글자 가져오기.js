function solution(s) {
    let answer = '';
    let cnt = s.length;
    let cen = 0;
    if(cnt%2 === 0){
        cen = cnt/2
        s.split('')
        answer = s[cen-1]+s[cen]
    }else{
        cen = parseInt(cnt/2) +1
        s.split('')
        answer = s[cen-1]
    }
    return answer;
}

/*
function solution(s) {
  return s.length % 2 !== 0
    ? s[Math.floor(s.length / 2)]
    : s.slice(s.length / 2 - 1, s.length / 2 + 1);
}
*/


/*
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
*/
