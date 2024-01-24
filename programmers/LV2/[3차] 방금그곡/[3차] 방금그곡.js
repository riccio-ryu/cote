// 2024

/*
C, C#, D, D#, E, F, F#, G, G#, A, A#, B

https://school.programmers.co.kr/questions/56790
에서 // 정렬이 잘 됐는가? 를 확인 플레이 시간이 긴 순서가 앞선다
*/
function solution(m, musicinfos) {
    m = m.replace(/(C|D|F|G|A)#/g, (_, a) => {
        // console.log('_',_,'a', a)
        return a.toLowerCase()
    })
    // console.log(m)
    const mi = musicinfos.map(info => {
        let [s,e,t,a] = info.split(',')
        const l = e.split(':').reduce((c,b) => Number(b) + Number(c)*60, 0) - s.split(':').reduce((c,b) => Number(b) + Number(c)*60, 0)
        a = a.replace(/(C|D|F|G|A)#/g, (_, al) => al.toLowerCase())
        const str = a.padEnd(l, a).slice(0, l)
        // console.log(s,e,t,a, l, a, m, str)
        return [l, t, str]
    }).filter(([_, $, v]) => v.indexOf(m) >= 0).sort((a,b) => b[0] - a[0])
    // console.log(mi)
    return mi[0]?.[1] || '(None)';
}

// 1차   합계: 70.0 / 100.0
/*
C, C#, D, D#, E, F, F#, G, G#, A, A#, B
*/
function solution(m, musicinfos) {
    let answer = '';
    musicinfos.forEach(info => {
        const [s,e,t,a] = info.split(',')
        const l = e.split(':').reduce((c,b) => Number(b) + Number(c)*60, 0) - s.split(':').reduce((c,b) => Number(b) + Number(c)*60, 0)
        const arr = []
        let str = ''
        for(let i = 0; i < a.length; i++){
            if(a[i] === '#') continue
            if(a[i+1] === '#') arr.push(a[i]+a[i+1])
            else arr.push(a[i])
        }
        for(let i = 0; i < l; i++){
            str += arr[i%arr.length]
        }
        // console.log(s,e,t,a, l, arr, str)
        if(str.includes(m)) answer = t
    })
    return answer;
}
