// 2024
function solution(s)
{
    let answer = 0;
    const arr = []
    for(let i = 0; i< s.length; i++){
        // console.log(s[i], arr.at(-1))
        arr.at(-1) === s[i] ? arr.pop() : arr.push(s[i])
    }
    // console.log(arr)
    return arr.length ? 0 : 1;
}

//2022

function solution(s)
{
    let answer = -1;
    let arr = [];
    for(let i =0; i< s.length; i++) arr[arr.length -1] === s[i] ? arr.pop() : arr.push(s[i])
    answer = arr.length === 0 ? 1 : 0
    return answer;
}
