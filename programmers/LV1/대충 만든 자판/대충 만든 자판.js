function solution(keymap, targets) {
    let answer = [];
    const kmap = new Map();
    
    for (const key of keymap) {
        for(let i = 0; i < key.length; i++){
            // console.log(key, i, key[i])
            if(!kmap.has(key[i]) || i + 1 < kmap.get(key[i])){  // kmap 등록 안되어 있거나, 숫자가 크면 작은걸로
                kmap.set(key[i], i+1)
            }
        }
    }
    
    targets.map(t => {
        let cnt = 0;
        for(let i = 0; i < t.length; i++){
            cnt += kmap.get(t[i])
        }
        // console.log(cnt)
        answer.push(cnt || -1)
    })
    
    return answer;
}
