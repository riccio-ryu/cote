function solution(users, emoticons) {
    const answer = [0,0];
    const d = [10,20,30,40];
    const arr =[]   // 경우의 수 담음, [할인율, 가격]
    function dfs(e, r) {
        // console.log('dfs',e,r)
        if(e.length < 1){
            arr.push(r)
            return
        }
        for(let i = 0; i < d.length; i++){
            dfs(e.slice(1), [...r, [d[i], e[0]]])
        }
    }
    dfs(emoticons, [])
    // console.log(arr)
    const n = (m,p) => p * ((100-m) / 100)  // 할인된 가격
    arr.forEach(a => {  // a는 할인율과 emoticons(가격)의 가짓수를 나타낸다.
        const w = [0,0] // 비교 값
        users.forEach(([p,v]) => {
            // console.log(a)
            // console.log(p,v)
            let sum = 0;        //  합
            a.forEach(([x,y]) => {
                // console.log(x,y)
                if(x >= p) sum += n(x,y)
            })
            if(sum >= v){
                w[0]++
            }else{
                w[1] += sum
            }
        })
        // console.log(w, answer)
        if(answer[0] < w[0]) {//가입자 수가 더 많으면 w 값으로 최댓값 변경 0인덱스 비교
            answer[0] = w[0];
            answer[1] = w[1];
        } else if(answer[0] === w[0]) {//동일할 경우 매출액 비교한다.
            if(answer[1] < w[1]) {
                answer[1] = w[1];
            }
        }
    })
    return answer;
}
