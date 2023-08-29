//2023
function solution(lottos, win_nums) {
    let sames = lottos.filter(l => win_nums.includes(l)).length // 같은 값 (최소)
    let zeros = lottos.filter(l => l === 0).length
    let mx = sames + zeros > 0 ? 7 - (sames + zeros) : 6
    let mn = 7 - sames > 6 ? 6 : 7 - sames
    // console.log(sames, zeros, mx, mn)
    return [mx, mn];
}

//2022
function solution(lottos, win_nums) {
    const same = lottos.filter(lot => win_nums.includes(lot)).length;
    const zeros = lottos.filter(lot => lot === 0).length;
    
    let min = 7 - same >= 6 ? 6: 7 - same;
    let max = min - zeros < 1 ? 1: min - zeros;
    //최고 순위, 최저 순위
    //6개일치 1등, 5개일치 2등 --->>  7 - k = n등수
    const answer = [max, min]
    return answer;
}



/*
초기에는
let max = 7 - same - zeros < 1 ? 1: 7 - same - zeros;
let min = 7 - same >= 6 ? 6: 7 - same;
    
이었으나 제출 하면 에러가 나왔다... 이유는 알수가 없다...
아마도 같은 숫자(same)과 0들의 숫자(zeros)가 둘다 0개일때, 7 - 0 - 0을 해서 7이 나와 오류가 아닐까...?
---그런것 같다...흠..
*/


/* 모범답안
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
*/
