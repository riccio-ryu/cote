function solution(skill, skill_trees) {
    let answer = 0;
    skill_trees.map(t => {
        const ts = t.split('');
        let num = 0;
        let plag = true;
        ts.map(s => {
            // console.log(ts, s, skill.indexOf(s), num, skill[num])
            if(skill.indexOf(s) > num) {
                // console.log('pass')
                plag = false
            }
            if(skill[num] === s) num ++
        })
        if(plag) answer++
    })
    return answer;
}
