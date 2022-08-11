function solution(price, money, count) {
    let tt = 0
    for(let i = 1; i <= count; i++){
        tt += i * price
    }
    return tt-money <= 0 ? 0 : tt-money;
}

/*
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
*/
