// 2024
/*
0 -> Math.floor(0/3), 0%3   => 0, 0 
1 -> Math.floor(1-1/3), 1%3   => 0, 1     => 1
2 -> Math.floor(2-1/3), 2%3   => 0, 2     => 2
3 -> Math.floor(3-1/3), 3%3   => 0, 0     => 4
4 -> Math.floor(4-1/3), 4%3   => 1, 1     => 11
5 -> Math.floor(5-1/3), 5%3   => 1, 2     => 12
6 -> Math.floor(6-1/3), 6%3   => 1, 0     => 14
7 -> Math.floor(7-1/3), 7%3   => 2, 1     => 21
8 -> Math.floor(8-1/3), 8%3   => 2, 2     => 22
9 -> Math.floor(9-1/3), 9%3   => 2, 0     => 24
10 -> Math.floor(10-1/3), 10%3   => 3, 1  => 41
11 -> Math.floor(11-1/3), 11%3   => 3, 2  => 42
12 -> Math.floor(12-1/3), 12%3   => 3, 0  => 44
13 -> Math.floor(13-1/3), 13%3   => 4, 1  => 111
*/
function solution(n) {
    let answer = '';
    const arr = ['4','1','2']
    while(n > 0){
        const r = n % 3
        n = Math.floor((n-1) / 3)
        // console.log(r, arr[r], n)
        answer = arr[r]+answer
        // break
    }
    return answer;
}

// 2022
function solution(n) {
    let answer = '';
    const arar = ['4','1','2']
    
    while(n > 0){
        const r = n%3
        answer = arar[r]+answer
        n = Math.floor((n-1) / 3)
    }
    
    return answer;
}

//복잡하게 생각하지 말자...
/*
0자리에 4가 있다고 생각하자  0은 x 1,2,4,11,12,14  3으로 나누어 떨어지는 (나머지가 0인)때에는 4가 있다.
ex) 10이라면은 10 -> r =1, n=3 / '1' -> r=0, n=0 / '4'+'1'

*/
