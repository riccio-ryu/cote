// 2024

function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(0)
    for(let i = 0; i < n; i++){
        if(visited[i]) continue
        answer++
        dfs(computers, visited, i)
    }
    return answer;
}
function dfs(c, v, i){
    v[i] = 1
    for(let j =0; j < c[i].length; j++){
        if(c[i][j] && !v[j]) dfs(c,v,j)
    }
}
