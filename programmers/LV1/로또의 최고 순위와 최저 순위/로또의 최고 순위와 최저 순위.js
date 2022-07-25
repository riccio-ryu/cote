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
