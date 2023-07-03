function solution(n, m, section) {
    let answer = 0;
    let p = 0;  // 현재까지 칠한 포인트
    section.map(x => {
        if(x > p){  // section의 요소가 칠해진 영역보다 클 때만 칠을 해야 겠지
            p = x + m -1    // 떨어져 있을 블록 거리를 생각해본다 :: 현재 칠해진 위치는 섹션의 요소에 붓길이를 더한것만큼
            answer++;
        }
    })
    return answer;
}


/* errorrr
function solution(n, m, section) {
    let smx = Math.max(...section)
    let smn = Math.min(...section)
    let c = smx - smn + 1
    return Math.ceil(c / m);
}
*/
