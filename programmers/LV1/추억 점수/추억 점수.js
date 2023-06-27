function solution(name, yearning, photo) {
    let answer = [];
    let m = new Map();
    for(let i = 0; i < name.length; i++){
        m.set(name[i], yearning[i])
    }
    // console.log(m)
    photo.map(x => {
        let zero = 0
        x.map(y => {
            zero += isNaN(m.get(y)) ? 0 : m.get(y)
        })
        answer.push(zero)
    })
    return answer;
}
