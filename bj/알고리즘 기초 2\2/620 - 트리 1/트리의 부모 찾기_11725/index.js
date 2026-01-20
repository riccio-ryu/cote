// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

const N = parseInt(input[0]);
const adj = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < N; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    adj[u].push(v);
    adj[v].push(u);
}

// console.log(adj)

const parents = new Array(N + 1).fill(0);
const queue = [1];
parents[1] = -1;

let head = 0;
while (head < queue.length) {
    const curr = queue[head++];
    // console.log('q : ', queue, 'c ', curr, 'a', adj[curr], 'p', parents);
    
    for (const next of adj[curr]) {
        // 아직 부모가 결정되지 않은(방문하지 않은) 노드라면
        // console.log('next', next, 'parents[next]', parents[next]);
        if (parents[next] === 0) {
            parents[next] = curr; // 현재 노드가 다음 노드의 부모가 됨
            queue.push(next);
        }
    }
    // console.log('----------');
}
/*
[
  [],          [ 6, 4 ],
  [ 4 ],       [ 6, 5 ],
  [ 1, 2, 7 ], [ 3 ],
  [ 1, 3 ],    [ 4 ]
]
  */
console.log(parents.slice(2).join('\n'));
