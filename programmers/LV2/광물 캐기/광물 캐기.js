// 2023

// 3차 시도
// 1차의 원인은 내림차순의 기준을 잘못 잡은것, 2차는 총 광물의 수가 곡괭이를 할 수 있는 숫자보다 많게 되어서..... 
function solution(picks, minerals) {
    let answer = 0;
    let arr = []
    let tp = picks.reduce((a,b) => a + b, 0)    // 총 picks 수
    const ml = Math.ceil(minerals.length / 5)
    minerals = minerals.splice(0, tp * 5);      // 광물의 수를 picks의 곡괭이 총수*5한만큼 자르기
    for(let i = 0; i < ml; i++){
        const ms = minerals.splice(0,5);        // 광물 5개 자르기
        let obj = {diamond:0, iron:0, stone:0}  //0~4 각각의 갯수
        ms.map(m => obj[m]++)
        const conditions = [obj.diamond + obj.iron + obj.stone, (obj.diamond * 5) + obj.iron + obj.stone, (obj.diamond * 25) + (obj.iron * 5) + obj.stone,]   // 각 곡괭이로 팠을때의 피로도
        // console.log('i : ' , i, obj, conditions)
        arr.push(conditions)
    }
    // console.log(arr) 
    /* 
    ex1 -> [ [ 5, 17, 85 ], [ 3, 7, 31 ] ] 
    ex2 ->[ [ 5, 25, 125 ], [ 5, 5, 25 ], [ 1, 5, 25 ] ]
    dia로 캐는것 비교 해서 큰것을 앞으로? dia로 해도 5보다 클수가?dia로 하면 5개면 5 그외에는 1~4 :: fail
    dia로 개는것 말고 stone의 합이 큰것을 기준으로 내림차순 :: fail
    */
    arr.sort((a, b) => {
        return b[2] - a[2]
    }).map(a => {
        if(picks[0] > 0) return picks[0]--, (answer += a[0])
        if(picks[1] > 0) return picks[1]--, (answer += a[1])
        if(picks[2] > 0) return picks[2]--, (answer += a[2])
    })
    // console.log('2', arr)
    
    return answer;
}
// 2차시도
// 합계: 97.1 / 100.0
function solution(picks, minerals) {
    let answer = 0;
    let arr = []
    let tp = picks.reduce((a,b) => a + b, 0)    // 총 picks 수
    const ml = Math.ceil(minerals.length / 5)
    for(let i = 0; i < ml; i++){
        const ms = minerals.splice(0,5);        // 광물 5개 자르기
        let obj = {diamond:0, iron:0, stone:0}  //0~4 각각의 갯수
        ms.map(m => obj[m]++)
        const conditions = [obj.diamond + obj.iron + obj.stone, (obj.diamond * 5) + obj.iron + obj.stone, (obj.diamond * 25) + (obj.iron * 5) + obj.stone,]   // 각 곡괭이로 팠을때의 피로도
        // console.log('i : ' , i, obj, conditions)
        arr.push(conditions)
    }
    // console.log(arr) 
    /* 
    ex1 -> [ [ 5, 17, 85 ], [ 3, 7, 31 ] ] 
    ex2 ->[ [ 5, 25, 125 ], [ 5, 5, 25 ], [ 1, 5, 25 ] ]
    dia로 캐는것 비교 해서 큰것을 앞으로? dia로 해도 5보다 클수가?dia로 하면 5개면 5 그외에는 1~4 :: fail
    dia로 개는것 말고 stone의 합이 큰것을 기준으로 내림차순
    */
    arr.sort((a, b) => {
        return b[2] - a[2]
    }).map(a => {
        if(picks[0] > 0) return picks[0]--, (answer += a[0])
        if(picks[1] > 0) return picks[1]--, (answer += a[1])
        if(picks[2] > 0) return picks[2]--, (answer += a[2])
    })
    // console.log('2', arr)
    
    return answer;
}

// 1차시도
// 42.9 / 100.0
function solution(picks, minerals) {
    let answer = 0;
    let arr = []
    let tp = picks.reduce((a,b) => a + b, 0)    // 총 picks 수
    const ml = Math.ceil(minerals.length / 5)
    for(let i = 0; i < ml; i++){
        const ms = minerals.splice(0,5);        // 광물 5개 자르기
        let obj = {diamond:0, iron:0, stone:0}  //0~4 각각의 갯수
        ms.map(m => obj[m]++)
        const conditions = [obj.diamond + obj.iron + obj.stone, (obj.diamond * 5) + obj.iron + obj.stone, (obj.diamond * 25) + (obj.iron * 5) + obj.stone,]   // 각 곡괭이로 팠을때의 피로도
        // console.log('i : ' , i, obj, conditions)
        arr.push(conditions)
    }
    // console.log(arr) 
    /* 
    ex1 -> [ [ 5, 17, 85 ], [ 3, 7, 31 ] ] 
    ex2 ->[ [ 5, 25, 125 ], [ 5, 5, 25 ], [ 1, 5, 25 ] ]
    dia로 캐는것 비교 해서 큰것을 앞으로? dia로 해도 5보다 클수가?dia로 하면 5개면 5 그외에는 1~4
    */
    arr.sort((a, b) => {
        return b[0] - a[0]
    }).map(a => {
        if(picks[0] > 0) return picks[0]--, (answer += a[0])
        if(picks[1] > 0) return picks[1]--, (answer += a[1])
        if(picks[2] > 0) return picks[2]--, (answer += a[2])
    })
    // console.log('2', arr)
    
    return answer;
}
