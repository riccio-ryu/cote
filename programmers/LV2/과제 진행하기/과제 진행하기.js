//2023

// 세번째 ... 통과

function solution(plans) {
    let answer = [];
    let res = [];
    // 1인덱스 시간별 정렬, 2 Number
    const q = plans.map(p => {
        let [name, start, play] = p
        return [name, start.split(':').reduce((a,b) => +a*60 + +b, 0), parseInt(play)]
    }).sort((a,b) => a[1] - b[1])
    for (let i = 0; i < q.length - 1; i++) {
        const [n, t, p] = q[i];

        if (t + p <= q[i + 1][1]) {
            answer.push(n);
            let rt = q[i + 1][1] - t - p;// 다음 시작 시간 - 현재 시작 시간 - 진행시간

            while (res.length) {
                const [cn, ct] = res.pop();
                if (ct <= rt) {
                    rt -= ct;
                    answer.push(cn);
                } else {
                    res.push([cn, ct - rt]);
                    break;
                }
            }
        } else {
            res.push([n, p - (q[i + 1][1] - t)]);// 다음부터는 시작시간 무의미... res는 [이름, 남은시간]
        }
    }
    answer.push(q[q.length - 1][0]);

    while (res.length) {
        answer.push(res.pop()[0]);
    }
    return answer;
}

// 두번째 시도 ... 합계: 41.7 / 100.0 -> 런타임 에러포함.. 아마도 while문 에러일것 같다.

function solution(plans) {
    let answer = [];
    let res = [];
    // 1인덱스 시간별 정렬, 2 Number
    const q = plans.map(p => {
        let [name, start, play] = p
        return [name, start.split(':').reduce((a,b) => +a*60 + +b, 0), parseInt(play)]
    }).sort((a,b) => a[1] - b[1])
    let time = q[0][1]  // 시간 업데이트(최초는 첫 과제 시작시간)
    
    
    for (let i = 0; i < q.length - 1; i++) {
        const [n, t, p] = q[i];
        // console.log(n,t,p)
        if (t + p <= q[i + 1][1]) {
          answer.push(n);
            let remain = q[i + 1][1] - t - p;   // 다음 시작 시간 - 현재 시작 시간 - 진행시간
            while(remain){
                const [cn, ct] = res.pop();
                if (cn <= remain) {
                  remain -= ct;
                  answer.push(cn);
                } else {
                  res.push([cn, ct - remain]);
                  break;
                }
            }
        } else {
          res.push([n, p - (q[i + 1][1] - t)]); // 다음부터는 시작시간 무의미... res는 [이름, 남은시간]
        }
    }
    answer.push(q[q.length -1][0])
    // console.log(q)
    // console.log(res)
    while(res.length){
        answer.push(res.pop()[0])
    }
    return answer;
}

// 첫시도 ... 합계: 45.8 / 100.0
function solution(plans) {
    let answer = [];
    let res = [];
    // 1인덱스 시간별 정렬, 2 Number
    const q = plans.map(p => {
        let [name, start, play] = p
        return [name, start.split(':').reduce((a,b) => +a*60 + +b, 0), parseInt(play)]
    }).sort((a,b) => a[1] - b[1])
    let time = q[0][1]
    let cnt = 0
    // console.log(q, time)
    
    for(let i = 0; i < plans.length; i++){
        if(i === plans.length - 1){
            answer.push(q[i][0])
        }else if(q[i + 1][1] - q[i][1] >= q[i][2]){
            answer.push(q[i][0])
        }else{
            res.unshift(q[i][0])
        }
    }
    return [...answer, ...res];
}

//틀린 이유 : 문제 파악 실패... 과제를 끝내고 다음 과제사이의 시간동안 멈춘 과제를 진행시켜야함!
