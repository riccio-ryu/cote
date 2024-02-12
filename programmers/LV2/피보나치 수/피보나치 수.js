// 2024

//2차 :: 피보나치 수를 구할 때마다 1234567로 나눈 것 중에서 n번째 수를 반환하는 것이다.
function solution(n) {
    let f = [0, 1];
    for(let i=2; i<=n; i++) {
        f[i] = (f[i-1]+f[i-2])%1234567;
    }
    return f[n];
}

//1차  42.9 / 100.0
function solution(n) {
    // console.log(f(10))
    return f(n)%1234567;
}

function f(n){
    return n <= 1 ? n : f(n-1) + f(n-2)
}
