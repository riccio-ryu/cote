function solution(s) {
    let cs = s
    let cnt = 0;
    let z = 0;
    let n = 0
    while(cs !== '1'){
        const csl = cs.length
        const onel = cs.replaceAll('0','').length
        cnt++
        z += (csl - onel)
        cs = onel.toString(2)
        // console.log(csl, onel, cnt, z)
    }
    return [cnt, z];
}
