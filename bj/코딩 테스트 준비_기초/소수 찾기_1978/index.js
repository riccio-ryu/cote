const isPrime = (numb) => {
    if(numb < 2) return false;
    for (let i = 2; i <= Math.sqrt(numb); i++) {
        if(numb%i === 0){
            return false;
        }
    }
    return true;
}

const input = require('fs').readFileSync('example.txt').toString().split('\n');

// let num = input[0]
// let list = input[1].split(' ').map(Number);
// let cnt = 0;


// for (let i = 0; i < num; i++) {
//     cnt += isPrime(list[i]) ? 0 : 1
// }

console.log(input[1].split(' ').filter(x => isPrime(x)).length);

// 주석 에러