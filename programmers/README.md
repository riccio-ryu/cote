# 외울것 정리

### 유클리드 호제법 정리
```
function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);  // 최대공약수(Greatest Common Divisor, GCD)
    const lcm = (a, b) => a * b / gcd(a, b);                // 최소공배수(Lowest Common Multiple, LCM)
    return [gcd(num1, num2), lcm(num1, num2)];
}
```
