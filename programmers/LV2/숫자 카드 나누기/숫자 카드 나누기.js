function solution(arrayA, arrayB) {
    let answer = 0;
    let a = arrayA[0]
    let b = arrayB[0]
    for(let i = 0; i < arrayA.length; i++){
        a = gcd(a, arrayA[i]);
        b = gcd(b, arrayB[i]);
    }
    // console.log(a, b)
    if (a === 1) a = 0;
    if (b === 1) b = 0;
    if (arrayA.every((v) => v % b !== 0)) answer = Math.max(answer, b);
    if (arrayB.every((v) => v % a !== 0)) answer = Math.max(answer, a);
    
    return answer;
}

function gcd(a,b){
    return a % b === 0 ? b : gcd(b, a % b);
}
