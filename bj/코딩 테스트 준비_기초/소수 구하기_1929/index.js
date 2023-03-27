const input = require('fs').readFileSync('example.txt').toString().split(' ').map(Number);

const [n,m] = input;;

const isPrime = (num) => {
    if(num < 2) return;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num%i === 0){
            return ;
        }
    }
    return console.log(num);
}

for (let i = n; i <= m; i++) {
    isPrime(i);
}