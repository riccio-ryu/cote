//2023
// 2차
function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1)
    const arr = []  //indx 저장소
    for(let i = 0; i < numbers.length; i++){
        // console.log('arr ', arr, numbers[arr.at(-1)], numbers[i])
        while(arr.length && numbers[arr.at(-1)] < numbers[i]){  // arr 1개이상, arr 순서의 숫자가 현재 수 보다 낮다
            // console.log('w', '__ ', numbers[arr.at(-1)], numbers[i])
            answer[arr.pop()] = numbers[i]
        }
        arr.push(i)
    }
    return answer;
}

// 해결 방법 이중 for문으로 시간초과가 나는 것을 while로 변경해 보았다.
// 실패한 numbers를 저장하는 곳을 따로 두었고,

//1차 , 합계: 82.6 / 100.0 -> 시간 초과
function solution(numbers) {
    const answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i; j < numbers.length; j++){
            // console.log('i', i, numbers[i],'j', j, numbers[j])
            if(numbers[i] < numbers[j]) {
                answer.push(numbers[j])
                break
            }
            if(j === numbers.length-1) {
                answer.push(-1)
            }
        }
    }
    return answer;
}
