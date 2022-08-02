function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            const pp = numbers[i] + numbers[j]
            answer.push(pp)
        }
    }
    let mos = Array.from(new Set(answer))
    return mos.sort((a,b) => a-b);
}


/*
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
*/
