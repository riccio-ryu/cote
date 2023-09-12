//2023
function solution(n) {
    return Math.sqrt(n)%1 ? -1: Math.pow(Math.sqrt(n)+1, 2);
}

//2022
function solution(n) {
    const sqrt = Math.sqrt(n)
    return sqrt%1 === 0 ? Math.pow(sqrt+1, 2) : -1;
}
