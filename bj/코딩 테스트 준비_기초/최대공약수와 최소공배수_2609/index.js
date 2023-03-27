const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

const sol = (n,m) => {
    let ddd = (n,m) => (n%m === 0 ? m : ddd(m,n%m))
    let sss = (n,m) =>  (n*m)/ddd(n,m)

    console.log(ddd(n,m));
    console.log(sss(n,m));
}

sol(input[0], input[1]);

// map number 안써서 출력형식 에러