function solution(num) {
    let answer = 0;
    let cast = (num) => {
        if(num === 1){
            return answer;
        }else if( num%2 === 0){
            answer+=1
            cast(num/2)
        }else{
            answer+=1
            cast(num*3 + 1)
        }
    }
    cast(num)
    return answer >= 500 ? -1 : answer ;
}
