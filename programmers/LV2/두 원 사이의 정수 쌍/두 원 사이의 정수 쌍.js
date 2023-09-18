// 2023
// 블로그를 참조함 : https://sasca37.tistory.com/320
/* 참조 내용
  피타고라스 정의로 원의 지름이 5면 x가 1일때, 5**2 = 1**2 + y**2 즉, r2**2 = i**2 + y**2 => y = root(r2**2 - i**2)
  Math.floor(Math.sqrt(r2**2 - i**2)) 부분은 인터넷 발췌 x 가 1일때 2가 최대여야하고 2일때는 2 3일 때는 0이어야 하는데 이걸 공식으로 어케해야하나 싶었다... 문제의 해결 방법은 제곱근, 
*/

// 1/4을 구하고 *4를 하자..
// <2, 3> [0,2], [0,3],  // [1,2], [2,2], [2,1] -> 2~3 , 2 + 
// <2, 4> [0,2], [0,3], [0,4], // [1,2], [1,3], [2,1], [2,2], [2,3], [3,1], [3,2], [3,3] -> 2~4-> 3 + 
// <3, 4> [0,3], [0,4], [1,3], [2,3], [3,3], [3,2], [3,1] -> 3~4 -> 1 + 
// x기준 y는 r1보다는 커야하고(초과) r2보다는 작아야(미만)한다.
function solution(r1, r2) {
    let answer = 0;
    for(let i = 1; i <= r2; i++){
        // console.log(r2, i, Math.sqrt(r2**2 - i**2), Math.floor(Math.sqrt(r2**2 - i**2)))
        const maxY = Math.floor(Math.sqrt(r2**2 - i**2));
        let minY = 0
        if(r1>i){
            minY = Math.ceil(Math.sqrt(r1**2 - i**2));
        }
        // console.log(maxY, minY)
        answer += maxY-minY+1
    }
    return answer*4;
}
