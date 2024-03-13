/*
[2, 3, -6, 1, 3, -1, 2, 4]
1로 시작할 경우 [2, -3, -6, -1, 3, 1, 2, -4]
-1로 시작할 경우 [-2, 3, 6, 1, -3, -1, -2, 4]
*/
function solution(sequence) {
    let answer = 0;
    const arrP = [];
    const arrM = [];
    sequence.forEach((s, i) => {
        // console.log(i, s, -s)
        if(i === 0){
            arrP.push(s)
            arrM.push(-s)
        }else if(i % 2 === 0){
            //index 짝수
            // console.log('짝수', i, ':', s, arrP[i-1] + s, '/', -s, arrM[i-1] - s)
            arrP.push(Math.max(s, arrP[i-1] + s))
            arrM.push(Math.max(-s, arrM[i-1] - s))
        }else{
            //index 홀수
            // console.log('홀수', i, ':', -s, arrP[i-1] - s, '/', s, arrM[i-1] + s)
            arrP.push(Math.max(-s, arrP[i-1] - s))
            arrM.push(Math.max(s, arrM[i-1] + s))
        }
        // console.log(i, 'i 종료 ',arrP, arrM)
        // console.log('answer : ', answer, arrP[i], arrM[i])
        answer = Math.max(answer, arrP[i], arrM[i])
    })
    return answer;
}
