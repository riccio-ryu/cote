// 2024
function solution(n) {;
    let n2 = n.toString(2).split('').filter(f => f === '1').length
    let num = n+1
    while(true){
        const n3 = num.toString(2).split('').filter(f => f === '1').length
        if(n2 === n3){
            return num
        }
        num++
    }
}
