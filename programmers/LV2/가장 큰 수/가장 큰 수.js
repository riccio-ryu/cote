// 2023

// 처음에 11번 실패가 났는데, 찾아보니, 0인 경우도 있다했다 numbers = [0]만 되어 있는 경우는 가장 큰 것이 0으로 해야한다.
function solution(numbers) {
    let answer = numbers.map(n => String(n)).sort((a,b) => (b+a) - (a+b)).join('')
    return answer[0] === '0' ? '0' : answer;
}
