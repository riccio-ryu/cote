//2023
function solution(s) {
    return s.split('').sort((a,b) => {
        // console.log(a, b, a<b)
        return a < b ? 1 : a > b ? -1 : 0
    }).join('');
}

//2022
function solution(s) {
    return s
        .split('')
        .sort((a,b) => {
        if(a < b) return 1;
        if(a > b) return -1;
        return 0
    }).join('')
}
