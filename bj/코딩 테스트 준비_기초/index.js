const input = require('fs').readFileSync('example.txt').toString().split('\n').map(Number);

const isPrime = (num) => {
    if(num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num%i === 0) return false;
    }
    return true;
}

for (let i = 0; i < input.length; i++) {
    const that = input[i]
    for (let j = 3; j < that; j+=2) {
        if(!isPrime(j)) continue;
        if(!isPrime(that - j)) continue;
        if(that - j <= 1){
            console.log("Goldbach's conjecture is wrong.");
        }else{
            console.log(`${that} = ${j} + ${that - j}`);
        }
        break;
    }
}
// 시간 초과