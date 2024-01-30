function solution(n)
{
    let ans = 0;
    while(n !== 0){
        if(n%2 === 0){  // 짝수
            n = n/2
        }else{
            n = n - 1
            ans++
        }
    }
    return ans;
}
