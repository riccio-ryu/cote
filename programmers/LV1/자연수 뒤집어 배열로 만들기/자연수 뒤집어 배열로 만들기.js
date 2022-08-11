function solution(n) {
    return n
        .toString()
        .split("")
        .map(x => parseInt(x))
        .sort((a,b) => -1)
    ;
}
