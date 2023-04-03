const input = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(Number);

let esm = (e,s,m) => {
    let x = 0;
    while (true) {
        if(x%15 === e - 1 && x%28 === s - 1 && x%19 === m - 1) break;
        x++;
    }
    return console.log(++x);
}

esm(input[0],input[1],input[2]);

//메모리 초과