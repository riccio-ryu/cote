function solution(t, p) {
    let arr = [];
    let pl = p.length
    // console.log(t.length)
    for(let i = 0; i < t.length - pl + 1; i++){
        const s = t.slice(i, i+pl)
        if(s <= p) arr.push(s)
    }
    return arr.length;
}
