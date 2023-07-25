function solution(food) {
    let answer = '';
    let arr = new Array()
    for(let i = 1; i < food.length; i++){
        // console.log(food[i]) // i의 갯수
        let n = Math.floor(food[i]/2) // i의 갯수
        while(n > 0){
            arr.push(i);
            n--
        }
    }
    answer = arr.join('') + 0 + arr.reverse().join('')
    return answer;
}
