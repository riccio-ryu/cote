//2023
function solution(s, n) {
    let answer = '';
    const arr = s.split('').map(x => x.charCodeAt(0)).map(x => {
        if(x === 32) {
            answer+= ' '
        }else if(x + n > 90 && x <=90 || x + n > 122){
            answer+= String.fromCharCode(x + n - 26)
        }else{
            answer+= String.fromCharCode(x + n)
        }
    })
    return answer;
}

//2022
function solution(s, n) {
    return s
        .split('')
        .map((item) => {
        if (item === " ") return " ";
        const code = item.charCodeAt(0);
        if(code + n > 90 && code <= 90 || code + n >122){
            return String.fromCharCode(code + n - 26)
        }else{
            return String.fromCharCode(code + n)
        }
    }).join('')
}



// 다시 
