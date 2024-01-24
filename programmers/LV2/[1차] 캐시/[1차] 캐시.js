/*
LRU 알고리즘 : 가장 오랫동안 참조되지 않은 페이지를 교체하는 기법
*/
function solution(cacheSize, cities) {
    let answer = 0;
    
    const miss = 5;
    const hit = 1;
    
    if (cacheSize === 0) return miss * cities.length;
    
    const arr = []      // push, shift
    
    cities.forEach(c => {
        // console.log(c)
        const cup = c.toUpperCase()
        const idx = arr.indexOf(cup)
        
        if(idx === -1){
            //없음
            if(arr.length >= cacheSize) arr.shift() //앞에거 지우기
            answer += miss
        }else{
            //있음
            arr.splice(idx,1)
            answer += hit
        }
        arr.push(cup)
    })
    return answer;
}
