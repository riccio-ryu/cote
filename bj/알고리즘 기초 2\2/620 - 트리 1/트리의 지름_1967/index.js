// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

const n = parseInt(input[0]);
if (n === 1) { // 노드가 하나뿐이면 지름은 0
    console.log(0);
    process.exit();
}

const adj = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < n; i++) {
    const [u, v, w] = input[i].split(' ').map(Number);
    adj[u].push([v, w]);
    adj[v].push([u, w]);
}

// console.log(n,adj)

function bfs(startNode) {
    const visited = new Array(n + 1).fill(-1);
    const queue = [startNode];
    visited[startNode] = 0;
    
    let maxDist = 0;
    let farthestNode = startNode;
    let head = 0;

    while (head < queue.length) {
        const curr = queue[head++];
        // console.log(' --- ', queue, curr, head)
        
        for (const [next, weight] of adj[curr]) {
            if (visited[next] === -1) {
                visited[next] = visited[curr] + weight;
                queue.push(next);
                
                if (visited[next] > maxDist) {
                    maxDist = visited[next];
                    farthestNode = next;
                }
            }
        }
    }
    return { node: farthestNode, dist: maxDist };
}

const res1 = bfs(1);
// console.log(res1)
const res2 = bfs(res1.node);
// console.log(res2)

console.log(res2.dist);
