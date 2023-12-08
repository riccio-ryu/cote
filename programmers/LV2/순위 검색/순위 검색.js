//2023
/* 여러번 풀어봤지만 왜 안되는지 잘 모르겠다. 질문하기 보니까 이진탐색으로 하라고 한다? */
/* 참고 : https://mine-it-record.tistory.com/521 */
function solution(info, query) {
    const arr = new Map()
    info.map(i => {
        const [l,w,y,f,c] = i.split(' ')
        let k = l+w+y+f
        arr.set(k, arr.has(k) ? [...arr.get(k), +c] : [+c])
    })
    for(let [k,v] of arr){
        arr.set(k, v.sort((a,b) => a-b))
    }
    return query.map(q => {
        const conditions = q.split(/ and | |-/i).filter(e => e);
        return fn(arr, conditions);
    })
}
const fn = (rule, conditions) => {  // query기준 만큼 들어옴
    const score = conditions.pop();
    // console.log('---')
    return Array.from(rule.keys())
        .filter(key => conditions.every(v => key.includes(v)))
        .reduce((a, c) => {
        // console.log('c : ', c, 'rr : ', rule.get(c),'s : ', score, 'bs: ', bs(rule.get(c), score), '~~ : ', rule.get(c).slice(bs(rule.get(c), score)) ) 
        return a + rule.get(c).slice(bs(rule.get(c), score)).length
    }, 0);
}
const bs = (arr, target) => {
    // console.log('at : ', arr, target)
    let left = 0;
    let right = arr.length; 
    while(left < right){
        const mid = Math.floor((left + right) / 2);
// console.log('mid : ', mid, left, right)
        if(arr[mid] >= target) right = mid;
        else left = mid + 1;
    }
// console.log('left : ', left)
    return left;
}


/*
2차시도,
정확성: 40.0
효율성: 0.0
합계: 40.0 / 100.0
정확성은 다 통과했는데, 효율성은 다 시간초과...
*/
function solution(info, query) {
    const answer = [];
    const arr = new Map()
    info.map(i => {
        const [l,w,y,f,c] = i.split(' ')
        let k = l+w+y+f
        arr.set(k, arr.has(k) ? [...arr.get(k), +c] : [+c])
    })
    for(let [k,v] of arr){
        arr.set(k, v.sort((a,b) => a-b))
    }
    query.map(q => {
        const c = q.replaceAll('and', '').replaceAll('-', '').replaceAll('  ', ' ').split(' ')
        answer.push(fn(arr,c))
    })
    return answer;
}
const fn = (arr, c) => {
    // console.log(arr, c)
    let n = 0;
    const cnt = c.pop()
    const ob = Array.from(arr.keys()).filter(key => c.every(v => key.includes(v)))
    ob.map(o => {
        const nums = arr.get(o)
        // console.log(nums, cnt)
        for(let i = 0; i < nums.length; i++){
            const num = +nums[i]
            // console.log('ii',i, num)
            if(num >= cnt) n++
        }
    })
    return n
}

/*
1차 시도는 실패 
정확성: 40.0
효율성: 0.0
합계: 40.0 / 100.0
정확성은 다 통과했는데, 효율성은 다 시간초과...
*/
function solution(info, query) {
    const answer = [];
    // const arr = {java : 0, cpp: 0, python:0, backend:0, frontend:0, junior:0, senior:0, chicken:0, pizza:0}
    query.map(q => {
        let cnt = 0
        const [l,w,y,f,c] = q.replaceAll('and', '').replaceAll('  ', ' ').split(' ')
        // console.log('~~', l,w,y,f,c)
        // console.log('cnt : ', cnt)
        info.map(o => {
            const [l2,w2,y2,f2,c2] = o.split(' ')
            // console.log(l2,w2,y2,f2,c2)
            if( (l === l2 || l === '-') && (w === w2 || w === '-') && (y === y2 || y === '-') && (f === f2 || f === '-') && +c <= +c2) cnt++
        })
        answer.push(cnt)
    })
    return answer;
}
