function solution(x) {
    const h = x.toString().split('').map(x=>parseInt(x)).reduce((a,c)=>a+c,0)
    return x%h === 0 ? true : false;
}
