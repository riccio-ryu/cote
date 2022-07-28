function solution(nums) {
    let answer = 0;
    const leng = nums.length;
    for(let i = 0; i<leng; i++){
        for(let j = i+1; j< leng; j++){
            for(let k = j+1; k< leng; k++){
                const sum = nums[i] + nums[j] + nums[k]
                if(isPrime(sum)) answer += 1
            }
        }
    }
    
    return answer;
}
function isPrime(x){
    for(let i=2; i<= Math.sqrt(x); i++){
        if(x%i === 0) return false;
    }
    return x>=2
}
