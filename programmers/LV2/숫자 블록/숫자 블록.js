// 2024

//이게 왜 정답이 아니지... 잘 모르겠고, 설명도 잘 안나와있고, 거의 비슷하게 풀어져있고, 블로그답 긁어서 채점해도 다 실패다....

//1차  정확성: 66.7  효율성: 0.0  합계: 66.7 / 100.0
function solution (begin, end) {
  const answer = []
  
  for (let i = begin; i <= end; i++) {
    answer.push(f(i));
  }

  return answer;
}

const f = (n) => {
  if (n === 1) {
    return 0;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0 && n / i <= 10000000) {
      return n / i;
    }
  }
  return 1;
}
