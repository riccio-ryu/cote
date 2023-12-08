function solution(s) {
    let cs = s.split('')
    let answer = 0;
    for(let i = 0; i< cs.length; i++){
        const copy = [...cs]
        const stack = []
        // console.log(copy)
        while(copy.length){
            const sh = copy.shift()
            // console.log(sh)
            if(!stack.length) stack.push(sh)
            else{
                const pp = stack.pop()
                if(!(pp+sh === '()' || pp+sh === '[]' || pp+sh === '{}')) {
                    stack.push(pp)
                    stack.push(sh)
                }
            }
        }
        if(!stack.length) answer++
        // console.log(copy)
        cs.push(cs.shift()) // 마지막에 섞어주자
    }
    return answer;
}
