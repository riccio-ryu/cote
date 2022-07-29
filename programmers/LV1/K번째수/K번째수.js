function solution(array, commands) {
    return commands.map((command) => {
        const arr = array.slice(command[0]-1, command[1]).sort(function(a, b){return(a-b)});
        return arr[command[2]-1]
    })
}


/*  forEach
function solution(array, commands) {
    let answer = [];
    commands.forEach((command) => {
        const arr = array.slice(command[0]-1, command[1]).sort(function(a, b){return(a-b)});
        answer.push(arr[command[2]-1])
    })
    return answer
}
*/
