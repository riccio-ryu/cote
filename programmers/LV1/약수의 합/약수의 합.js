function solution(n) {
    const ps = yyy(n)
    return ps.reduce((a,c) => a+c,0);
}

function yyy (x){
    let arr =[];
    for(let i = 0; i <= x; i++){
        if(x%i === 0) arr.push(i)
    }
    return arr
}

/*
function solution(n) {
  let answer = 0;
  for (let divisor = 1; divisor <= n; divisor++) {
    if (n % divisor === 0) answer += divisor;
  }
  return answer;
}
*/
