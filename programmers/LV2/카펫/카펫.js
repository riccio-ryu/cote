/*
8,1 => 1의 4면((1+1)*2= 4) + 모서리 4면(4)
000
010
000
10,2 => 2의 4면 ((2+1)*2= 6) + 모서리 4(4)
0000
0110
0000
12,3 => 모서리 4 + ((3+1)*2= 8) => 12
00000
01110
00000
18,4 => 4 + ((4+1)*2 = 10) =>18
000000
011110
000000
12,4 => 4+ ((2+2)*2 = 8) => 12
0000
0110
0110
0000
*/
function solution(brown, yellow) {
    let b = (brown - 4)/2
    const arr = d(yellow)
    // console.log(b, arr, Math.ceil(arr.length/2))
    let cnt = 0
    while(Math.ceil(arr.length/2)){
        if(cnt === Math.ceil(arr.length/2)) break
        if(arr.at(-(cnt+1)) + arr[cnt] === b) {
            return [arr.at(-(cnt+1)) + 2, arr[cnt] + 2]
        }
        // console.log(arr[cnt], arr.at(-(cnt+1)))
        cnt++
    }
}

const d = (n) => {
    const arr = [];
    for(let i = 1 ; i <= Math.sqrt(n) ; i++){
        if(n % i === 0) {
            arr.push(i);
            if(n / i != i) arr.push(n / i);
        }
    }
    
    arr.sort((a, b) => a - b);
    // console.log(arr)
    return arr;
}
