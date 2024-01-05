// 참고 : https://school.programmers.co.kr/questions/64629

function solution(citations) {
    let answer = 0;
    citations = citations.sort((a,b) => b-a);
    // console.log(citations)
    let arr = [];

    for(let i=0; i<citations.length; i++){
        arr.push(citations[i]);
        // console.log(citations[i], arr, arr.length)
        if(citations[i]<arr.length){
            break;
        }
        answer++;
    }
    return answer;
}
