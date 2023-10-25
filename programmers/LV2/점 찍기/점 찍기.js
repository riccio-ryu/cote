/* 2, 4 -> 2 의 배수, 4까지
oxxxx
xxxxx
oxoxx
xxxxx
oxoxo       -> 3 2 1  : 6

4**2 = 0**2 + y**2, 4**2 = 1**2 + y**2, 4**2 = 2**2 + y**2
y = root(4**2 - 0**2), root(4**2 - 1**2), root(4**2 - 2**2)

oxxxxx
ooooxx
ooooox
ooooox
ooooox
oooooo      -> 6 5 5 5 4 1  : 26



원 안에 들어가는 것(문제: 두원 사이의 정수)
Math.floor(Math.sqrt(r2**2 - i**2))
*/
function solution(k, d) {
    let answer = 0;
    for(let i = 0; i <= d; i+=k){
        // console.log(~~(Math.sqrt(d**2 - i**2)/k)+1)
        answer += ~~(Math.sqrt(d**2 - i**2)/k)+1
    }
    return answer;
}
