// 2024 

// 참고 : https://velog.io/@_jake/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%93%B1%EB%8C%80-JavaScript
// 2차
function solution(n, lighthouse) {
    let answer = 0;
    const visited = Array(n + 1).fill(false);
    
    while(lighthouse.length) {
    const graph = Array.from(Array(n + 1), () => []);
    lighthouse.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    graph.filter(g => g.length === 1).forEach(g => {
        const [t] = g
        // console.log(t, visited[t])
        if(!visited[t]){
            visited[t] = true
            if(graph[t].length !== 1){
                answer += 1
            }else{
                answer += 0.5
            }
        }
    })
        // 간선이 1개인 섬 모두 제거
      lighthouse = lighthouse.filter((el) => {
        const [a, b] = el;
            
        return !visited[a] && !visited[b];
      });
    }
    // console.log(graph, visited, answer)
    return answer;
}

// 2024 1차 실패
function solution(n, lighthouse) {
    let answer = 0;
    const visited = Array(n + 1).fill(false);
    const graph = Array.from(Array(n + 1), () => []);
    lighthouse.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    graph.filter(g => g.length === 1).forEach(g => {
        const [t] = g
        // console.log(t, visited[t])
        if(!visited[t]){
            visited[t] = true
            if(graph[t] !== 1){
                answer++
            }
        }
    })
    // console.log(graph, visited, answer)
    return answer;
}

