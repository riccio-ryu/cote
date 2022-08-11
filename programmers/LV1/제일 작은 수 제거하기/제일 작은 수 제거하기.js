function solution(arr) {
    let answer = [];
    const mn = Math.min(...arr)
    let io = arr.indexOf(mn)
    arr.splice(io,1)
    return arr.length >= 1 ? arr : [-1];
}
