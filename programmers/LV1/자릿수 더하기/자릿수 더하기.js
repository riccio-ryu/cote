function solution(n)
{
    let answer = 0;

    return n
        .toString()
        .split("")
        .map((x) => parseInt(x))
        .reduce((a,c) => a+c,0)
}
