// 2023
function solution(people, limit) {
    let answer = 0;
    people = people.sort((a,b)=>b-a)
    people.forEach(p => {
        const last = people.at(-1)
        // console.log(p, people, last)
        if(p + last > limit){
            answer++
        }else{
            people.pop()
            answer++
        }
    })
    return answer;
}
