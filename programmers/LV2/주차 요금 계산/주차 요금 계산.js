function solution(fees, records) {
    const last = 23 * 60 + 59;
    const car = {}
    records.map((r) => {
        const [t,n,a] = r.split(' ')
        // console.log(t,n,a)
        const [h, m] = t.split(':').map(Number)
        const time = h*60 + m
        
        if (!car[n]) {// 처음 조회되는 차량일 시
          car[n] = { time: 0, n };
        }
        car[n].type = a;
        if (a == "OUT") {   // out일때 time 변경
            car[n].time += time - car[n].lastInTime;
            return;
        }
        car[n].lastInTime = time;   // last  time 작성
    })
    // console.log(car)
    return Object.values(car).sort((a,b) => a.n - b.n).map(v => {
        if(v.type === 'IN'){
            v.time += last - v.lastInTime
        }
        if(fees[0] > v.time){
            return fees[1]
        }
        return fees[1] + Math.ceil((v.time - fees[0]) / fees[2]) * fees[3]
    })
}
