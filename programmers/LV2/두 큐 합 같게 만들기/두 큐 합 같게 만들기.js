// 2023

// 2차 
// shift 대용으로 index를 저장했다. 채점은 1번이 오류가 났는데 qs를 두배로 해주면 통과가 된다.
function solution(queue1, queue2) {
    let answer = 0;
    const qs = queue1.length + queue2.length;
    let q1 = queue1.reduce((a,c) => a+c,0)
    let q2 = queue2.reduce((a,c) => a+c,0)
    let i1 = 0, i2 = 0;         // index지점... shift 대용
    let flag = false;
    // console.log(qs,q1,q2)
    while(answer < (qs)*2 ){
        if(q1 > q2){
            const e = queue1[i1++]
            q1 -= e
            q2 += e
            queue2.push(e)
        }else if(q1 < q2){
            const e = queue2[i2++]
            q1 += e
            q2 -= e
            queue1.push(e)
        }else{
            flag = true
            break;
        }
        // console.log(queue1, queue2)
        answer++
    }
    return flag ? answer : -1;
}

// 1차,합계: 83.3 / 100.0 
// 시간초과 :: 사유를 찾아보니 shift()가 용량을 많이 잡아 먹는다고 한다.
function solution(queue1, queue2) {
    let answer = 0;
    const qs = queue1.length + queue2.length;
    let q1 = queue1.reduce((a,c) => a+c,0)
    let q2 = queue2.reduce((a,c) => a+c,0)
    let flag = false;
    console.log(qs,q1,q2)
    while(answer < qs){
        if(q1 > q2){
            const e = queue1.shift()
            q1 -= e
            q2 += e
            queue2.push(e)
        }else if(q1 < q2){
            const e = queue2.shift()
            q1 += e
            q2 -= e
            queue1.push(e)
        }else{
            flag = true
            break;
        }
        answer++
    }
    return flag ? answer : -1;
}
