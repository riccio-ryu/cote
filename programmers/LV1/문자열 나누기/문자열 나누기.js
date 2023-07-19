function solution(s) {
    let answer = []
    let cnt = 0;
    let txt = '';
    const arr = s.split('')
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i], txt.length)
        if(txt.length < 1){
            cnt++
            txt += arr[i]
        }else{
            if(arr[i] === txt[0]){
                cnt++
                txt += arr[i]
            }else{
                cnt--
                txt += arr[i]
            }
            
            if(cnt === 0){
                answer.push(txt)
                txt = '';
            }
        }
    }
    if(txt.length > 0) answer.push(txt)
    // console.log(answer, arr, txt)
    return answer.length;
}

/*
가장 좋은 문제 풀이 법이라 한다.
function solution(s, count=0) {
    if(!s) return count
    let [first, ...rest] = s.split("")
    let countSame = 1
    let countInSame = 0
    let i=0
    for(; i<rest.length; i++){
        if(rest[i] === first) countSame++
        else countInSame++
        if(countSame === countInSame) break
    }
    return solution(rest.slice(i+1).join(""), count+1)
}
*/
