/*
0 1 10 11 100 101 110 111 1000 1001
0 1 1 0 1 1 1 0 0 1 0 1 1 1 0 1 1 1 1 0 0 0 1 0 0 1
!   !   !   !
*/
function solution(n, t, m, p) {
    let str = ''
    let cnt = 0
    while(t*m > str.length){
        str += cnt.toString(n)
        cnt++
    }
    str = str.slice(0, t*m).toUpperCase()
    const answer = str.split('').filter((num, i) => {
        // 10 명중 (m) 4번째(p)라면 인덱스가 3, 13, 23 일때, 
        // ( 3 - 4 + 1 ) % 10 === 0, ( 13 - 4 + 1 ) % 10 === 0
        return ((i - p + 1)%m === 0)
    }).join('');
    return answer
}
