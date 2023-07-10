function solution(s, skip, index) {
    let answer = '';
    const txt = new Set('abcdefghijklmnopqrstuvwxyz')
    
    let skipSplit = [...skip]
    skipSplit.map(q => txt.delete(q))  // set 으로 만든 객체에서 제외 시키고
    
    const arr = [...txt]  // set을 배열로 바꾸어서 index 넘버로 만들어 구한다.
    
    for(const x of s){
        const i = arr.indexOf(x) + index
        // console.log(arr.length, i, arr[i])
        answer += arr[i % arr.length]  // 총 22자리라면 (0~21) 0:a, z:21  ===  22가 나온다면 0이,  21 이 나온다면 21이, 23이 나온다면 23 % 22인 1이 나온다.
    }
    return answer;
}
