//2023
function solution(n) {
    return String(n).split('').map(Number).reverse();
}

//2022
function solution(n) {
    return n
        .toString()
        .split("")
        .map(x => parseInt(x))
        .sort((a,b) => -1)
    ;
}
