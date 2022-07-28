function solution(numbers) {
    let total = 0;
    let sum =0;
    let answer = 0;
    for(let i = 0; i < 10; i++){
        total += i
    }
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    answer = total - sum
    return answer;
}

/*
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
*/
