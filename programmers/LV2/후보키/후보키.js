// 2023
/*
1. 가능한 배열 설정?
[ [0], [1], [2], [3], [0,1], [0,2], [0,3], [1,2], [1,3], [2,3], [0,1,2], [0,1,3], [0,2,3], [1,2,3], [0,1,2,3] ]
가장 어려웠던 문제, 문제 풀이 팁들을 보고 답이 안나왓다.
참고 : https://velog.io/@euneun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%9B%84%EB%B3%B4%ED%82%A4-2019-kakao-blind-recruitment-javascript
*/
function solution(relation) {
    const base = new Array(relation[0].length).fill().map((_, i) => i);
    let arr = []
    for(let i=1; i <= base.length; i++){
        arr.push(...makePoss(base,i))
    }
    // console.log(arr)
    arr = uniqueness(relation, arr)
    // console.log(arr)
    arr = minimality(arr)
    // console.log(arr)
    return arr.length;
}
// 최소성
function minimality(arr){
    let res = []
    while(arr.length){
        // console.log('1 ', arr, res)
        res.push(arr[0]);
        // console.log('11 ', arr, res)
        arr = arr.reduce((a,c) => {
            // console.log('a ', a, 'c ', c, ' a0 ',arr[0])
            let u = arr[0].every(v => c.includes(v));
            // console.log('u', u)
            if(!u) a.push(c); 
            // console.log('return a : ', a)
            return a;
        },[])
        // console.log('2 ',arr, res)
    }
    return res
}
// 유일성
function uniqueness(relation, arr){
    let res = [];  
    arr.forEach((a) => { 
        let set = new Set(); 
        relation.forEach((rel) => {
            // console.log('a ', a, ' rel ', rel, ' / ', a.map(aa => rel[aa]))
            set.add(a.map(aa => rel[aa]).join(','));
        });
        if(set.size == relation.length){
            res.push(a); 
        }
    }); 
    // console.log('res ', res)
    return res;
}
// 가능한 조합 만들기
function makePoss (arr, n) {
    const res = []
    if(n===1){
        return arr.map(v=>[v])
    }
    arr.forEach((e,i,o)=>{
        const os = o.slice(i+1);
        const c = makePoss(os,n-1);
        const m = c.map((p)=>[e,...p]);
        // console.log(e,i,o, os, 'c : ', c, 'm : ', m)
        res.push(...m)
    })
    return res
}
/*
1 :: [0], [1], [2], [3]
2 ::
[0] -> [1], [2], [3]
[1] -> [2], [3]
[2] -> [3]
3 :: 
[0] -> [1] -> [2], [3]
[0] -> [2] -> [3]
[1] -> [2] -> [3]
4 ::
[0] -> [1] -> [2] -> [3]
*/
