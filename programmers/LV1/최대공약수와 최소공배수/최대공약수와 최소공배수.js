function solution(n, m) {
    let ddd = (n,m) => (n%m === 0 ? m : ddd(m,n%m))
    let sss = (n,m) =>  (n*m)/ddd(n,m)
    return [ddd(n,m), sss(n,m)];
}


/*
유클리드 호제법 정리
function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}

https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B5%AC%ED%95%98%EA%B8%B0
*/
