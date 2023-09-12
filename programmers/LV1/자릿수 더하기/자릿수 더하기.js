//2023
function solution(n)
{
    return String(n).split('').map(Number).reduce((a,b) => a+b,0);
}

//2022
function solution(n)
{
    let answer = 0;

    return n
        .toString()
        .split("")
        .map((x) => parseInt(x))
        .reduce((a,c) => a+c,0)
}
