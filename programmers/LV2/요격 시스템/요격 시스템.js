// 2023
// 2번째
// sort하는 방식을 바꾸어 두번째인 e를 기준으로 점차 커지게 하여, e를 비교값(end)로 두고, 해당 s와 end를 비교하여 컸을때 동작하도록 하였다
function solution(targets) {
    let answer = 0;
    let end = 0
    targets = targets.sort((a,b) => a[1] - b[1])
    // console.log(targets)
    for(const [s,e] of targets){
        // console.log(s,e)
        if(end <= s){
            answer++;
            // console.log(s,e,end)
            end=e;
        }
    }
    return answer;
}

// 1번째 풀이 : 합계: 36.4 / 100.0, 
// 잘못 푼 사유 : targets의 각행인 [s,e]가 있으면 미사일은 정확히 s와 e에서 요격 할 수 없다... 즉, [1,4]면, 1이나 4로 요격을 못한다...
/*
function solution(targets) {
    targets = targets.sort((a,b) => a[0] - b[0])
    let check = targets[0][1]
    let answer = 1;
    for(let i = 0; i < targets.length; i++){
        const [s,e] = targets[i]
        // console.log(s,e, check, answer)
        if(s >= check){
            check = e
            answer++;
        }
    }
    // console.log(targets, check)
    return answer;
}
*/
