/*
1  = 1
2  = 10
3  = 11
4  = 100
5  = 101
6  = 110
7  = 111
8  = 1000
9  = 1001
10 = 1010
11 = 1011
12 = 1100
13 = 1101
14 = 1110
15 = 1111
16 = 10000
17 = 10001
18 = 10010
19 = 10011
20 = 10100

짝수는 0으로, 홀수는 1로 끝난다.
짝수는 맨뒤에 1만 더하면 되고
홀수는 f(1) = 2    // 1 => 10            // 0001 => 0010
f(3)=5            // 11 => 101          // 0011 => 0101
f(5) = 6          // 101 => 110         // 0101 => 0110
f(7) = 11         // 111 => 1011        // 0111 => 1011
f(9) = 10         // 1001 => 1010       // 1001 => 1010
뒤에서부터 01을 찾아 10으로 바꾸자
*/
function solution(numbers) {
    const answer = [];
    numbers.map(n => {
        if(n%2) {
            const m = 0 + n.toString(2)
            const li = m.lastIndexOf('01')  // lio start(0), +2(1)
            const ms = m.slice(0, li)
            const mm = m.slice(li, li+2)    //'01'
            const me = m.slice(li+2)
            const m2 = ms+'10'+me
            answer.push(parseInt(m2, 2))
        }else{
            answer.push(n+1)
        }
    })
    return answer;
}
