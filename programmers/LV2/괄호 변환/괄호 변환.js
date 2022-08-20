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
