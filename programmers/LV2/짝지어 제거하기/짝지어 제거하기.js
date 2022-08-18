function solution(s)
{
    let answer = -1;
    let arr = [];
    for(let i =0; i< s.length; i++) arr[arr.length -1] === s[i] ? arr.pop() : arr.push(s[i])
    answer = arr.length === 0 ? 1 : 0
    return answer;
}
