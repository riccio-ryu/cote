/*
[8,6,3,7,2,5,1,4]	
1_8 -> 8_4 -> 4_7 -> 7_1  :: 1은 이미 있음   = 4
2_6 -> 6_5 -> 5_2  :: 2는 이미 있음          = 3
3_3  :: 3은 이미 있음                        = 1
*/
function solution(cards) {
    let answer = 0;
    let visited = [...Array(cards.length)].map(x => 0);     // visit check array
    let arr = [];                                         // 결과 배열
    let start = 0;                                          // 시작점 index
    while(start >= 0) {
        arr.push(check(start, visited, cards, 0))
        start = visited.findIndex(isVisited => isVisited === 0);    // index이 아니면 -1
    }
    // console.log(arr)
    arr = arr.sort((a,b) => b-a)
    return arr.length >= 2 ? arr[0] * arr[1] : 0;
}

function check (s,v,c,n){
    // console.log(s,v,c,n)
    if(v[s] === 1){
        return n
    }
    v[s] = 1
    return check(c[s]-1,v,c,++n)
}
