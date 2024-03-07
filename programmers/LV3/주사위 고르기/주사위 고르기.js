// 2024
// 악랄한 문제다..... 
/* 문제 푸는 방법에 대한 힌트
주사위를 선택할수 있는 모든 리스트를 구한다
A와 B가 선택한 주사위 리스트에서 나올수 있는 합의 리스트를 각각 구한다.
B의 합리스트를 정렬하고 A의 합리스트의 각 원소가 이길수 있는 원소의 갯수를 더한다.
합이 최대가 되는 리스트를 return
*/
function solution(dice) {
    let answer = [];
    let max = 0;            // 최대 승
    const n = dice.length   // 개수
    const arr = new Array(n).fill(0).map((_,i)=>i)  // arr
    const c = getA(n/2,arr)
    c.forEach(da => {
        const db = arr.filter(d => !da.includes(d))
        
        const s1 = getS(dice, da).sort((a,b)=>a-b)
        const s2 = getS(dice, db).sort((a,b)=>a-b)
        let cnt = 0
        
        for(let i = 0; i < s1.length; i++){
            // console.log(getC(s1[i], s2))
            cnt += getC(s1[i], s2)
        }
        if(cnt > max){
            answer = da
            max = cnt
        }
    })
    return answer.map(a => a+1);
}
const getA = (n,arr) => {   //배열 만들기
    if(n === 1) return arr.map(a => [a])
    const result = []
    arr.forEach((fix,i,origin)=>{
        const rest=origin.slice(i+1);
        const combi=getA(n-1,rest);
        const attach=combi.map((c)=>[fix,...c]);
        result.push(...attach)
    })
    return result
}
const getS = (d, l) => {
    // console.log('------- d, l', d,l)
    let tmp = [...d[l[0]]]
   for(let i=1; i < l.length; i++){     // l 의 길이 만큼    tmp 처음에 0번째 인덱스를 집어 넣었기 때문에 1부터
       const q = []
       for(let j=0; j < tmp.length; j++){   // l에 담긴 눈금의 길이 만큼(tmp의 번째)
           for(let k = 0; k < 6; k++){  //dice[i]의 길이 = 6
               // console.log(d[l[i]][k], tmp, tmp[j], q, '~~~~')
               q.push(d[l[i]][k] + tmp[j])
           }
       }
       tmp = q
       // console.log('tmp update', tmp)
   }
    // console.log(tmp)
    return tmp
}
const getC = (n, list) => { // 번째, 찾기
    // console.log(n, list)
    let l = 0;
    let r = list.length-1
    if(n > list[r]){
        return r+1
    }
    while(l < r){
        let m = Math.floor((l+r)/2)
        if(list[m] < n){
            l = m+1
        }else{
            r = m
        }
    }
    return r
}
