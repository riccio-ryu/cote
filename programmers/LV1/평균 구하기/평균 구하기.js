//2023
function solution(arr) {
    return arr.reduce((a,b) =>a+b, 0)/arr.length;
}

//2022
function solution(arr) {
    return (arr.reduce((c,a) => c+a,0))/arr.length;
}
