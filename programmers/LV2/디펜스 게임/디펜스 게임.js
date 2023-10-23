// 2023
// 2차
function solution(n, k, enemy) {
    let answer = 0;
    let s = 0, e = enemy.length;
    
    while(s <= e){
        let m = ~~((s+e)/2)
        let arr = enemy.slice(0,m).sort((a,b) => b-a)
        // console.log(m, arr)
        let flag = true;
        let t = 0;  // total sum
        // console.log(k,m, arr)
        for(let i = k; i < arr.length; i++){    // k~ arr.length 앞의 셋을 무적권이라 보고 총합이 n이하로 작게
            t += arr[i]
            // console.log('t : ', t, arr[i], i)
            if(t > n) flag = false
        }
        // console.log('f : ', flag)
        if(flag){
            answer = m
            s = m+1
        }else{
            e = m-1
        }
        // console.log('``', answer, s, e)
    }
    return answer;
}

// 1차 : 62.5 / 100.0
// 실패사유 : 6 시간초과, 6실패....
// 질문하기를 보면 이분탐색(이진탐색)으로 가야한다는 의견이 있다....
/*
[5,3,3,1]
[4,2,4]		[4,4,2]
n.length ->0
answer->3

[3,3,1] [4,4] []... 5 2
[5,2] ...5 [2]
[3,3,1] [5,4,4] [2]
[2] 
n.length -> 2
answer->4

[3,1] [5,4] [2]
[4,3,2] ...4 [3,2]
[3,1] [5,4,4] [3,2] 
n.length -> 5
answer->5

[1] [5,4] [3,2] ...3,4
[1] [5,4,4] [3,3,2] -> 8 f

answer->5
*/

function solution(n, k, enemy) {
    let answer = k;
    const e = [...enemy]    // 남은 enemy
    let m = e.splice(0, k)  // enemy앞부터 무적권 일단 설정
    let s = []    //병사랑 부딪히는 배열(수)
    let flag = e.length ? true : false;
    // console.log(m, s, e)
    while(flag){
        if(!e.length) flag = false;
        const ev = e.shift()
        const t = ([...m,...s, ev]).sort((a,b) => b-a)
        m = t.splice(0,k)
        // console.log(ev, m, s, s.reduce((a,c) => a+c, 0))
        if(t.reduce((a,c) => a+c, 0) >= n){
            flag = false
        }else{
            s = t
        }
    }
    console.log(m, s)
    return m.length + s.length;
}
