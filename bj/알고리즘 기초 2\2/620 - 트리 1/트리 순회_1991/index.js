// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

const N = parseInt(input[0]);
const tree = {};

// 트리 구성
for (let i = 1; i <= N; i++) {
    const [node, left, right] = input[i].split(' ');
    tree[node] = { left, right };
}

let result = '';

// console.log(tree);
// 전위 순회 (Root -> L -> R)
function preOrder(node) {
    if (node === '.') return;
    result += node;
    preOrder(tree[node].left);
    preOrder(tree[node].right);
}
// 중위 순회 (L -> Root -> R)
function inOrder(node) {
    if (node === '.') return;
    inOrder(tree[node].left);
    result += node;
    inOrder(tree[node].right);
}
// 후위 순회 (L -> R -> Root)
function postOrder(node) {
    if (node === '.') return;
    postOrder(tree[node].left);
    postOrder(tree[node].right);
    result += node;
}

preOrder('A');
// console.log('pre', result)
result += '\n';
inOrder('A');
// console.log('in', result)
result += '\n';
postOrder('A');
// console.log('post', result)

console.log(result);
