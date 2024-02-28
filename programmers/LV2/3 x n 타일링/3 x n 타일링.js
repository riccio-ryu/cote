/*

참고 : https://s2choco.tistory.com/24

a => 11- / b => --- / c => -11
1 => x
2 => a/b/c  [3]
3 => x
4 => aa/ab/ac/ba/bb/bc/ca/cb/cc/ 예외 2 (4-1, 4-2)    [11]
5 => x
6 => aaa/aab/aac/aba/abb/abc/aca/acb/acc/       ->9
     baa/bab/bac/bba/bbb/bbc/bca/bcb/bcc/       ->9
     caa/cab/cac/cba/cbb/cbc/cca/ccb/ccc        ->9
     a(4-1)/a(4-2)/b(4-1)/b(4-2)/c(4-1)/c(4-2)       ->6
     (4-1)a/(4-2)a/(4-1)b/(4-2)b/(4-1)c/(4-2)c       ->6
     + 예외 2 (6-1, 6-2)                              [41]
     //
     aa a / aa b / aa c /
     ab a / ab c / ab c /
     ac a / ac c / ac c /
     ba a / ba c / ba c /
     bb a / bb c / bb c /
     bc a / bc c / bc c /
     ca a / ca c / ca c /
     cb a / cb c / cb c /
     cc a / cc c / cc c /
     (4-1) a / (4-1) c / (4-1) c /
     (4-2) a / (4-2) c / (4-2) c /              -> 33
     ---
     a(4-1)/a(4-2)/b(4-1)/b(4-2)/c(4-1)/c(4-2)  -> 6
     +(6-1) (6-2)                               -> 2
     11*3 + 3*2 + 2
8 -> 41*3 + 11*2 + 3*2 + 2  ->  153

f(n) = f(n-1) x 3 + f(n-2) x 2 + … + f(2) x 2 + 2
f(n-1) + (f(n-1) ... f(2))*2 +2
*/
function solution(n) {
    // n = 6
    if(n%2) return 0;
    n = n/2 - 1;
    let arr = [3,11]
    
    for(let i = 2; i <= n; i++){
        // console.log(((arr.reduce((c,a) => a+c, 0) * 2) % 1000000007), (arr[i-1]%1000000007))
        arr[i] = ((arr.reduce((c,a) => a+c, 0) * 2) % 1000000007) + (arr[i-1]%1000000007) + 2
    }
    // console.log(arr)
    return arr[n]%1000000007;
}
