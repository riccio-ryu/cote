// 2023
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

//2022
function solution(p) {
    if(p.length === 0) return p
    let answer = '';
    let cnt = 0;
    let isJudg = true;
    
    for(let i = 0; i < p.length; i++){
        //console.log('i :',i)
        if(p[i] === '('){
            cnt += 1
        }else{
            cnt -= 1
        }
        //console.log('cnt : ',cnt)
        if(cnt < 0 ) isJudg = false;
        if(cnt === 0){
            const [u,v] = [p.slice(0,i+1), p.slice(i+1)]
            //console.log('s',u,v)
            if(isJudg){
                //console.log('t',u,v)
                return u + solution(v)
            }else{
                //console.log('f',u,v)
                let str = '(' + solution(v) + ')'
                const slStr = u
                .slice(1, u.length -1)
                .split('')
                .map(k => k === '(' ? ')' : '(' )
                .join('')
                return str+ slStr
            }
        }
    }
}
