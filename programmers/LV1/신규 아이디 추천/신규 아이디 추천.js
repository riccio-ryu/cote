function solution(new_id) {
    //소문자
    //소문자, 숫자, -, _, . 제외 모든 문자 삭제
    // .. 2번 이상의 . 하나로
    //처음과 끝에 . 있으면 제거
    //빈 문자열은 a를 대입
    //16자 이상이면 처음부터 15 / 끝에 . 있으면 모두 제거
    //2자 이하면 마지막 문자를 복사해 끝에 붙힘
    let answer = new_id
        .toLowerCase()
        .replace(/[^0-9a-z_.-]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/, '')
        .replace(/^$/g,'a')
        .slice(0,15)
        .replace(/\.$/, '')
    if(answer.length <= 2){
        answer = answer+ answer[answer.length-1].repeat(3-answer.length)
    }
    return answer;
}

//역시 정규식이 가장 어려운것 같다.... reapet은 처음 써보았다. slice와 splice 헷갈리지 말자



/*  모범답안
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

*/
