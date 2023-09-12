//2023
// 2022년과 비슷하게 풀었는데, 계속해서 시간초과가 났다. 원인을 찾아보다가 비슷한 블로그를 만났는데 set으로 해보면 괜찮을 것이라고 하여, set으로 진행을 해 보았다.
function solution(n) {
  // 2부터 n까지의 수로 구성된 Set
  const s = new Set();
  for (let i = 2; i <= n; i++) {
    s.add(i);
  }

  // 2부터 n의 제곱근보다 작은 최대 정수까지 
  for (let j = 2; j < Math.sqrt(n); j++) {
    // Set에 해당 수가 포함되면
    if (s.has(j)) {
      // 그 수를 제외하고 그 수의 배수는 모두 삭제
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

//2022
function solution(n) {
    let answer = 0;
    for(let i = 2; i <= n; i++){
        isPrime(i) ? answer+=1 : answer+=0 ;
    }
    return answer;
}

function isPrime(x) {
    for(let i = 2; i <= Math.sqrt(x); i++ ){
        if(x%i === 0) return false;
    }
    return x >= 2
}
