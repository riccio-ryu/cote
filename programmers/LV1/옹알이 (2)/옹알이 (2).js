function solution(babbling) {
    let answer = 0;
    const arr = ["aya", "ye", "woo", "ma"]  // 발음 가능 // 2연속은 안됨
    for(const b of babbling){
        let bb = b
        for(let i = 0; i < arr.length; i++){
            if(bb.includes(arr[i].repeat(2))){   // 2연속 거르기
                break;
            }
            bb = bb.replaceAll(arr[i], '@')
        }
        if(bb.replaceAll('@', '').length === 0) answer++  // 문자열이 비어있다면 
    }
    return answer;
}


/* fail : 9, 10, 11, 12, 13, 14, 16, 17, 19, 20
function solution(babbling) {
    let answer = 0;
    const arr = ["aya", "ye", "woo", "ma"]  // 발음 가능 // 2연속은 안됨
    for(const b of babbling){
        let bb = b
        for(let i = 0; i < arr.length; i++){
            if(bb.includes(arr[i].repeat(2))){   // 2연속 거르기
                break;
            }
            bb = bb.replaceAll(arr[i], '')
        }
        if(bb.length === 0) answer++  // 문자열이 비어있다면 
    }
    return answer;
}
*/


/*
잘못 생각한점, bb.replaceAll(arr[i], '')
인데 해당 부분에서 빈칸으로 바꾼다고 하면 'ayamayaa' 라는 문자열은 aya m aya a 로 분해 된다 즉,
aya를 '' 빈칸으로 둔다면, 'ayamayaa'는 'ma'가 되어 버려서 다음에 ma가 지워질 차례에 지워져 버린다.......
그렇다면 빈칸 대신에 '알파벳'이 아닌것을 넣어두면 될것
for문이 끝나면 if로 특수기호를 빈칸으로 바꿔서 길이비교를 해보면 될것
*/
