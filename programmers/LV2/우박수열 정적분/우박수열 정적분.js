function solution(k, ranges) {
    let answer = [];
    const arr = [k];
    const w = [0];
    
    while(k !== 1){
        if(k%2) k = k*3 + 1
        else k = k/2
        arr.push(k)
    }
    // console.log(arr)
    for(let i = 0; i < arr.length-1; i++){ // 너비 구간합
        const d = (arr[i] + arr[i+1]) / 2
        w[i+1] = d + w[i]
    }
    // console.log(w)
    for(const r of ranges){
        const [x1,x2] = [r[0], arr.length -1 + r[1]]
        // console.log(x1,x2, w[x1], w[x2])
        if(x1 > x2) answer.push(-1)
        else answer.push(w[x2] - w[x1])
    }
    return answer;
}
