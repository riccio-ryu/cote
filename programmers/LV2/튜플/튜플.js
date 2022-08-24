function solution(s) {
    let answer = [];
    let res = s.slice(2, -2).split("},{").map((e) => e.split(",").map((e) => parseInt(e))).sort((a, b) => a.length - b.length)
    for(let i = 0; i< res.length; i++){
        for(let j = 0; j < res[i].length; j++){
            const tmp = res[i][j];
            if(!answer.includes(tmp)) answer.push(tmp)
        }
    }
    return answer;
}


/*  가장 처음 적었던것... 테스트 5~14 실패
function solution(s) {
    let answer = [];
    let res = s.slice(2, -2).split("},{").sort((a, b) => a.length - b.length)
    //console.log('res : ', res)
    for(let i =0; i< res.length; i++){
        const onlyNum = /\D/g
        let num = res[i].replace(onlyNum, '')
        // const ba = new RegExp(`${answer.join('')}`)
        // const rest = num.replace(ba, '')
        //console.log(num)
        for(let j = 0; j< answer.length; j++){
            let reg = new RegExp(`${answer[j]}`)
            num = num.replace(reg, '')
        }
        answer.push(parseInt(num))
    }
    return answer;
}
*/

