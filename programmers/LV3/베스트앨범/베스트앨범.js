// 2024
// 2차
function solution(genres, plays) {
    let answer = [];
    const obj = {};
    const arr = [];
    genres.forEach((g,i) => {
        arr.push([g, plays[i], i]);
        if(obj[g] === undefined) obj[g] = plays[i]
        else obj[g] += plays[i]
    })
    const sob = Object.entries(obj).sort(([,a], [,b]) => b - a)
    // console.log(arr)
    sob.forEach((k,i) => {
        let current=[];
        for(let j=0;j<arr.length;j++){
            if(k[0]===arr[j][0]){
                current.push(arr[j]);
            }
        }
        current.sort((a,b)=>b[1]-a[1]);
        // console.log(current)
        current.forEach((c,i)=>{
            if(i<2){
                    answer.push(c[2])
            }        
        })
    })
    return answer;
}

// 1차 합계: 53.3 / 100.0
function solution(genres, plays) {
    let answer = [];
    const obj = {};
    const arr = [];
    genres.forEach((g,i) => {
        arr.push([g, plays[i], i]);
        if(obj[g] === undefined) obj[g] = plays[i]
        else obj[g] += plays[i]
    })
    const sob = Object.entries(obj).sort(([,a], [,b]) => b - a)
    sob.forEach(([type, sum]) => {
        // console.log(type)
        const ca = [...arr].filter(f => f[0] === type).sort((a,b) => {
            return b[1] - a[1]
        }).splice(0, 2)
        // console.log(ca)
        answer.push(ca[0][2])
        answer.push(ca[1][2])
    })
    return answer;
}
