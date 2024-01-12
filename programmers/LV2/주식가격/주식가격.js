// 2024

// 2차 // 변경점, array선언시 미리 숫자 추가, while문을 통해 
function solution(prices) {
    let answer = Array.from({length:prices.length}, (_, i) => prices.length - i - 1)
    const arr = []
    prices.forEach((p,i) => {
        // console.log(arr, prices[arr.at(-1)], p, i)
        while(arr.length && prices[arr.at(-1)] > p){
            const ind = arr.at(-1)
            answer[ind] = i - ind
            arr.pop()       // 없애가며 확인할 예정
        }
        arr.push(i)
    })
    // console.log(arr)
    return answer;
}

// 1차 합계: 66.7 / 100.0 (효율성 0점)
function solution(prices) {
    let answer = Array.from({length:prices.length}, ()=>0)
    prices.forEach((p,i,a) => {
        const s = a.slice(i+1)
        const findp = s.find(e => e < p)    //정수
        // console.log('------ : ', p,i,a, s)
        // console.log(findp)
        if(findp){
            const ind = s.indexOf(findp)
            // console.log(ind)
            answer[i] = ind+1
        }else{
            answer[i] = s.length
        }
    })
    return answer;
}
