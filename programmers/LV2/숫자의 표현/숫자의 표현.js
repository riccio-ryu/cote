// 2024

function solution(n) {
    let answer = 1; // n = n
    for(let i=1; i<=n/2; i++) {
        let sum = 0;
        let j = i;
        
        while(sum < n) {
            sum += j;
            j += 1;
        }
        
        if(sum === n) {
            answer += 1;    
        }
    }
    return answer;
}

// 1차, 정확성: 75.0 효율성: 20.8 합계: 95.8 / 100.0
function solution(n) {
    let answer = 1; // n = n
    for(let i = 1; i < n/2; i++){
        let sum = i;
        for(let j = i+1; j < n; j++){
            sum += j;
            if(sum === n){
                answer++
                break;
            }else if(sum > n) break
        }
    }
    return answer;
}
