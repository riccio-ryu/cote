// 2024
function solution(arr) {
    let answer = 0;
    while(arr.length > 1){
        const a1 = arr.shift()
        const a2 = arr.shift()
        const b = g(a1, a2)
        arr.unshift(b)
        // break
    }
    // console.log(arr)
    return arr[0];
}

function g(a, b) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    // console.log(gcd(a,b), lcm(a,b))
    return lcm(a, b)
}
