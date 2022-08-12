function solution(numbers, target) {
    let answer = 0;
    
    dfs(0, 0);
    
    function dfs(index, sum) {
        // index가 5 까지 되야 sum에 numbers[4]의 값(끝)까지 다 넣을 수 있다.
        if (index === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    return answer;
}
