/*
a -> l  / b -> ㅡ
1 -> r  / 2 -> ㄱ    / 3 -> j    / 4 -> ㄴ

1 => a      (...1)
2 => aa, 1_3, 2_4       (...3)
3 => aaa, bbb, 1_3a, a1_3, 2_4a, a2_4, b13, 13b, b24, 24b       (...10)
4 => (3번째)a, (2번째)2, (1번째)5 + 2(uniq)

aaaa, bbba, 1_3aa, a1_3a, 2_4aa, a2_4a, b13a, 13ba, b24a, 24ba
1_31_3, 1_32_4, aa1_3, 2_41_3, 2_42_4, aa2_4
ab1_3, ab2_4, a1_3b, a2_4b, abbb
b31b, 4b2b
-> 23

uniq 2, 2, 4의 반복
*/
function solution(n) {
    // n = 9
    const dp = Array.from({length : n+1}, () => 0)
    const u = [[4,2,2], [2,4,2], [2,2,4]]
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 3;
    dp[3] = 10;
    const gu = (num, i) => {
        const g = u[num % 3]
        return g[i]
    }
    const acc = [0,0,0]
    for(let i = 4; i <= n; i++){
        const ai = (i-4)%3
        const j = dp[i-4]
        acc[ai] = (acc[ai] + j) % 1000000007
        dp[i] = (dp[i] + 1*dp[i-1] + 2*dp[i-2] + 5*dp[i-3]) % 1000000007;   //main
        // console.log('uniq : ', (acc[0]*gu(i,0) + acc[1]*gu(i,1) + acc[2] * gu(i, 2)) % 1000000007)
        dp[i] = (dp[i] + acc[0]*gu(i,0) + acc[1]*gu(i,1) + acc[2] * gu(i, 2)) % 1000000007; // uniq
        // console.log(i, ai, j, acc, dp[i], dp)
    }
    return dp[n]
}
