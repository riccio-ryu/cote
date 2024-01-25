// 2024
/*
영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다. 
*/
function solution(str1, str2) {
    const s1 = ch(str1)
    const s2 = ch(str2)
    const ss = new Set([...s1, ...s2])
    let min = 0, max =0
    for(const s of ss ){
        const q1 = s1.filter(q => q === s).length
        const q2 = s2.filter(q => q === s).length
        min += Math.min(q1, q2)
        max += Math.max(q1, q2)
    }
    // console.log(min/max, Math.floor(min/max*65536))
    return max === 0 ? 65536 : Math.floor(min/max*65536);
}
const ch = (str) => {
    str = str.toLowerCase()
    const reg = /[a-z]/
    const arr = []
    for(let i = 0; i < str.length-1; i++){
        if(reg.test(str[i]) && reg.test(str[i+1])) arr.push(str[i] + str[i+1])
    }
    return arr
}


// 2022
function solution(str1, str2) {
    let answer = 0;
    let a1 = chase(str1)
    let a2 = chase(str2)
    const uni = new Set([...a1, ...a2])
    let min = 0, max =0
    for(const u of uni ){
        console.log("u : ", u)
        const b1 = a1.filter(x => x === u).length
        const b2 = a2.filter(x => x === u).length
        console.log("b1 : ", b1, " b2 : ", b2)
        min += Math.min(b1, b2)
        max += Math.max(b1, b2)
        console.log("min : ", min, " max : ", max)
        console.log("------------")
    }
    answer = max === 0 ? 65536 : Math.floor(min/max*65536)
    return answer;
}

function chase (x){
    const eng = /[a-zA-Z]{2}/
    let result = []
    for(let i = 0; i < x.length - 1; i++){
        const sl = x.slice(i,i+2)
        if(eng.test(sl)) {
            result.push(sl.toLowerCase())
        }
    }
    return result
}


/*
"FRANCE", "french"

u :  fr
b1 :  1  b2 :  1
min :  1  max :  1
------------
u :  ra
b1 :  1  b2 :  0
min :  1  max :  2
------------
u :  an
b1 :  1  b2 :  0
min :  1  max :  3
------------
u :  nc
b1 :  1  b2 :  1
min :  2  max :  4
------------
u :  ce
b1 :  1  b2 :  0
min :  2  max :  5
------------
u :  re
b1 :  0  b2 :  1
min :  2  max :  6
------------
u :  en
b1 :  0  b2 :  1
min :  2  max :  7
------------
u :  ch
b1 :  0  b2 :  1
min :  2  max :  8
------------

16384
*/
