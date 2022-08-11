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
