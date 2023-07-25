function solution(ingredient) {
    let answer = 0;
    const arr = [];
    for(let i of ingredient){
        arr.push(i);
        // console.log(arr.join(''))
        if(arr.slice(-4).join('') === '1231'){
            arr.splice(-4);
            answer++;
        }
    }
    return answer;
}

/*
음.... 문자열로 하는것이 아닌 배열로 접근해 보자. 배열을 stack으로 쌓아서 처리할 수 있다.
stack의 한 방향으로 쌓임(array의 push로 인해)을 이용하여 추가가 될 때마다 뒤에서 4자리를 가져와 '1231'과 비교를 하여 맞으면 자르고 stack진행, 다르면 계속 push
*/

/* 2차 시간초과 : 4,5,6,7,8,12
function solution(ingredient) {
    let answer = 0;
    let txt = ingredient.join('')
    let plag = txt.includes('1231');
    while(plag){
        txt = txt.replace('1231', '');
        plag = txt.includes('1231');
        answer++
    }
    return answer;
}
*/

/* 1차 무수한 실패
function solution(ingredient) {
    let answer = 0;
    let txt = ingredient.join('')
    const rep = (str) => {
        console.log(txt)
        if(str.indexOf('1231') > 0){
            answer++;
            txt = str.replace('1231', '');
            rep(txt);
        }else{
            return answer;
        }
    }
    rep(txt);
    return answer;
}
*/
