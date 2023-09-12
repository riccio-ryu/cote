//2023
function solution(n) {
    return parseInt(String(n).split('').map(Number).sort((a,b) => b-a).join(''));
}

//2022
function solution(n) {
    return +n
    .toString()
    .split("")
    .sort((a,b) => b-a)
    .join("")
    ;
}
