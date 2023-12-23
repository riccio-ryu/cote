// 2023

/*
)(
)(  ''
( '' )

()))((()
()  ))((()
()  ))((    ()
()  [ ))((    () ] -> ')' )( '('    () -> '(' () ')'
*/
function solution(p) {
    return fn(p);
}
function fn (p){        //1234
    // 1
    if (p.length === 0) return "";
    // 2
    const [u, v, bool] = uv(p); //u,v, 올바른지
    // console.log(u,v, bool)
    // 3
    if (bool) {// 올바른 괄호 문자열 이라면(3) / v에 대해 1단계 부터 다시 수행
        return u + fn(v);
    }else { 
        // 4
        const vr = "(" + fn(v) + ")";
        let ur = "";
        for (const us of u.slice(1, u.length - 1)) {
            if (us === "(") ur += ")"; 
            else ur += "(";
        }
        return vr + ur;
    }
}
function uv (p){         // uv
    let [u, v] = ["", ""];
    let b = true;
    let first = 1;      // 첫번째가 ( ?
    if (p[0] === "(") first = 1;    // (
    else first = -1;                // )
    
    for (let i = 1; i < p.length; i++) {
        if (p[i] === "(") first += 1; 
        else first -= 1;
        if (first === 0) {          // 시작점 부터 괄호의 수가 맞으면 종료된다.
            [u, v] = [p.slice(0, i + 1), p.slice(i + 1)];
            break;
        }
    }
    if (u[0] === ")" || u.at(-1) === "(") {
        return [u, v, false];
    }
    let stack = new Array()
    for(let i=0; i < u.length; i++){
        const cui = u[i]
        const sp = stack.pop()
        if(!sp) continue
        if(!(sp + cui === '()')) stack.push(sp), stack.push(cui)
    }
    return stack.length !== 0 ? [u, v, false] : [u, v, true];
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
