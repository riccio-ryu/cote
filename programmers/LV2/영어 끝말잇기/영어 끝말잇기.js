function solution(n, words) {
    let answer = [0,0];
    
    for(let i = 1; i < words.length; i++){
        const w = words[i]
        const v = Math.ceil((i+1)/n)    // 번째턴
        const r = i%n + 1               // 번째 사람
        const idx = words.indexOf(w)
        // console.log(w,v,r)
        if(words[i].at(0) !== words[i-1].at(-1)){
            return [r,v]
        }
        if(idx !== i) {
            return [r,v]
        }
    }

    return answer;
}
