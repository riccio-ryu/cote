function solution(survey, choices) {
    let answer = '';
    const str = 'RTCFJMAN';
    const score = new Map([['R',0], ['T',0], ['C',0], ['F',0], ['J',0], ['M',0], ['A',0], ['N',0]]);
    for(let i = 0; i < choices.length; i++){
        if(choices[i] === 4){   // 4 는 0
            continue;
        }else if(choices[i] < 4){   // 4아래는 앞 문자에 더하기
            score.set(survey[i][0], score.get(survey[i][0]) + 4 - choices[i])
        }else{                      // 4 위는 뒷 문자에 더하기
            score.set(survey[i][1], score.get(survey[i][1]) + choices[i] - 4)
        }
    }
    for(let i = 0; i < 4; i++){
        // console.log(score.get(str[i*2]), score.get(str[i*2 +1]))
        let v = '';
        if(score.get(str[i*2]) === score.get(str[i*2 +1])){
            v = str[i*2] < str[i*2 + 1] ? str[i*2] : str[i*2 + 1];
        }else if(score.get(str[i*2]) > score.get(str[i*2 + 1])){
            v = str[i*2];
        }else{
            v = str[i*2 + 1];
        }
        answer += v
    }
    return answer;
}
