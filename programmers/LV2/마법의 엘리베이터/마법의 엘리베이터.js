// 2023

// 2차 :: 통과
function solution(storey) {
    const s = ('0' + storey).toString().split('').map(Number)
    // console.log(s)
    for(let i = s.length-1; i > 0; i--){
        // console.log(s[i])
        if(s[i]<5) continue
        else if(s[i] === 5 && s[i-1] < 5) continue
        // 현재가 5미만 혹은 현재가 5이고 이전것이 5보다 작으면 통과
        s[i] = 10 - s[i]
        s[i-1]++
        // 즉 현재가 5이상이거나 5인데 이전것이 5 이상인것을 계산
    }
    // console.log(s)
    return s.reduce((a,c) => a+c,0);
}

//1차
// 합계: 38.5 / 100.0
function solution(storey) {
    let answer = 0;
    const s = storey.toString().split('').map(Number)
    const sr = s.reverse()
    // console.log(sr)
    for(let i = 0; i < sr.length; i++){
        // console.log(sr[i])
        if(sr[i] > 5) {
            answer += (10 - sr[i])
            sr[i+1]++
        }else{
            answer += sr[i]
        }
    }
    return answer;
}
