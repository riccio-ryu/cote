// 2023
//dfs
function solution(numbers, target) {
    let answer = 0;
    const dfs = (sum, idx) => {
        if(idx === numbers.length){
            if(sum === target) answer++
            return
        }
        dfs(sum + numbers[idx], idx+1)
        dfs(sum - numbers[idx], idx+1)
    }
    dfs(0,0)
    return answer;
}




// 2022
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


/*
function solution(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}

*/
