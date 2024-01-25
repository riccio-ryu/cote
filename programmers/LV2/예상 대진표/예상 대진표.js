// 1,2,4,8,16
// 12 34 56 78 // 12 34 // 12 // v
function solution(n,a,b)
{
    let answer = 0;
    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }
    return answer;
}
