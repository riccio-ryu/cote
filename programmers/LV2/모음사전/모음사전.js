function solution(word) {
    const v = ['A', 'E', 'I', 'O', 'U']
    const v2 = [], v3 =[], v4 =[], v5 = []
    v.map(q => {
        v.map(w => {
            v2.push(q+w)
        })
    })
    v2.map(q => {
        v.map(w => {
            v3.push(q+w)
        })
    })
    v3.map(q => {
        v.map(w => {
            v4.push(q+w)
        })
    })
    v4.map(q => {
        v.map(w => {
            v5.push(q+w)
        })
    })
    const arr = [...v, ...v2, ...v3, ...v4, ...v5].sort()
    // console.log(word, arr)
    // console.log(arr.findIndex(w => w === word)+1)
    return arr.findIndex(w => w === word)+1;
}
