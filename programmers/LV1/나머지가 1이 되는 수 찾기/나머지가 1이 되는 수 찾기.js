function solution(n) {
    let answer = 0;
    let t = yac(n-1)
    
    return t[0];
}

function yac (k){
    let arr = [];
    for(let i = 2; i<= k ; i++){
        if(k%i === 0) arr.push(i)
    }
    return arr
}

/*
function solution(n) {

  let answer = 0;
  for (let divisor = n - 1; divisor >= 2; divisor--) {
    if (n % divisor === 1) answer = divisor;
  }
  return answer;
}
*/
