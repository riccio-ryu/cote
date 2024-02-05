// 2024

// 중간에 queue 부분잉 기존에는 begin 하나만 넣었는데, 오류가 났다. 해당 내용을 찾아보니, cnt를 따로 두어야 해서 같이 넣더라

function solution(begin, target, words) {
    let answer = 0;
    const queue = []
    const visited = []
    if(!words.includes(target)) return 0    // target이 words 안에 없으면 종료
    queue.push([begin,answer])
    while(queue){
    // console.log(queue, visited)
        let [v, cnt] = queue.shift()
        if(v === target) return cnt      // target과 v가 같다면 종료
        words.forEach(word => {
            let same = 0                    // 같은 수 채크
            if(visited.includes(word)) return;  // 패스
            for(let i = 0; i < word.length; i++){
                if(word[i] !== v[i]) same++
            }
            if(same === 1){
                queue.push([word, ++cnt])
                // answer++
                visited.push(word)
            }
        })
    }
    return answer;
}
