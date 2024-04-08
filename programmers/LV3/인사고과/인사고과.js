// 2024  

function solution(scores) {
    let answer = 1;
    const w = scores[0];
    scores.sort((a, b) => {
        if (a[0] !== b[0]) return b[0] - a[0];
        return a[1] - b[1];
    });
    let num = 0
    for (const s of scores) {
        // console.log(w, s, num)
        if (w[0] < s[0] && w[1] < s[1]) return -1;
        if (num <= s[1]) {
          if (w[0] + w[1] < s[0] + s[1]) answer++;
          num = s[1];
        }
  }
    // console.log(w, scores)
    return answer;
}


//합계: 56.0 / 100.0
function solution(scores) {
    let answer = 1;
    let max = Infinity;
    const [w1, w2] = scores.shift()
    // console.log(max, w1, w2, scores)
    for(let i = 0; i < scores.length; i++){
        const [s1, s2] = scores[i]
        if(w1 < s1 && w2 < s2) return -1
        if(w1+w2 <= s1+s2){
            answer++
        }
    }
    return answer;
}
