//2023
function solution(x) {
    return x % String(x).split('').reduce((a,b) => +a + +b,0) ? false : true;
}

//2022
function solution(x) {
    const h = x.toString().split('').map(x=>parseInt(x)).reduce((a,c)=>a+c,0)
    return x%h === 0 ? true : false;
}
