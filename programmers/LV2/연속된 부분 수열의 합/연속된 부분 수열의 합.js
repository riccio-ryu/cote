//2023
function solution(sequence, k) {
    let answer = [];
    let [l, r] = [0,0]
    let sum = sequence[l];
    while(r < sequence.length && l <= r){
        // console.log(sum, l, r)
        if(sum < k) {
            // console.log('s < k')
            r++
            sum += sequence[r]
        }else if(sum > k){
            // console.log('s > k')
            sum -= sequence[l]
            l++
        }else{
            // console.log('s = k')
            answer.push([l,r])
            r++
            sum += sequence[r]
            sum -= sequence[l]
            l++
        }
    }
    return answer.sort((a,b) => (a[1]- a[0]) - (b[1]-b[0]))[0];
}
