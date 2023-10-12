// 2023

// 처음 풀때는 함수 하나만 밖으로 뺐었는데, 두개로 구분해서 빼는게 (뒤에서 0인거 제거, 뒤에서부터 배달수거) 조금 더 좋게 되는것 같다.

function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    const d = [...deliveries]
    const p = [...pickups]
    let ds = d.reduce((a,b)=>a+b,0);
    let ps = p.reduce((a,b)=>a+b,0);
    // console.log(d.filter(z => z > 0).length)
    while(ds || ps){
        delArr(d)
        delArr(p)
        let l = Math.max(d.length, p.length)    // delArr로 지워지고 가장 큰 인덱스 찾기
        answer += l*2                           // 와리가리
        ds -= di(d, cap)
        ps -= di(p, cap)
        // console.log(d,p,l, ds, ps,answer)
    }
    return answer;
}
// a배열의 뒤에 확인해서 0이면 제거
function delArr (a) {
    for(let i = a.length-1; i >= 0; i--){
        if(!a[i]) a.pop()
        else return
    }
}
//cap기준 뒤에서 빼기 :: 1 0 3 1 2, 4 => 1 0 1 0 0
function di(a,c){
    let cnt = 0
    for(let i = a.length-1; i >= 0; i--){
        if(a[i] >= c){
            a[i] -= c
            cnt += c
            break
        }else{
            c -= a[i]
            cnt += a[i]
            a[i] = 0
        }
    }
    return cnt
}
