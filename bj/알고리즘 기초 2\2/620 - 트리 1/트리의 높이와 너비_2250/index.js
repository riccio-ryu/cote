// 2026

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);
const N = parseInt(input[0]);
const tree = Array.from({ length: N + 1 }, () => ({ left: -1, right: -1, parent: -1 }));
const levelMin = [];
const levelMax = [];

// 트리 구성 및 부모 노드 기록 (루트 찾기 위함)
for (let i = 1; i <= N; i++) {
    const [node, left, right] = input[i].split(' ').map(Number);
    tree[node].left = left;
    tree[node].right = right;
    if (left !== -1) tree[left].parent = node;
    if (right !== -1) tree[right].parent = node;
}
// console.log(tree);
// 루트 노드 찾기 (부모가 없는 노드)
let root = -1;
for (let i = 1; i <= N; i++) {
    if (tree[i].parent === -1) {
        root = i;
        break;
    }
}
// console.log('Root:', root);
let colOrder = 1; // 열 번호
let maxDepth = 0; // 전체 트리의 깊이

// 중위 순회하며 좌표 부여 (L -> V -> R)
function inorder(node, depth) {
    if (node === -1) return;
    
    maxDepth = Math.max(maxDepth, depth);

    // 왼쪽 서브트리 방문
    inorder(tree[node].left, depth + 1);

    // 현재 노드 처리 (열 번호 부여 및 레벨별 최소/최대 업데이트)
    if (!levelMin[depth] || levelMin[depth] > colOrder) levelMin[depth] = colOrder;
    if (!levelMax[depth] || levelMax[depth] < colOrder) levelMax[depth] = colOrder;
    colOrder++;

    // 오른쪽 서브트리 방문
    inorder(tree[node].right, depth + 1);
}

inorder(root, 1);
// console.log('Level Min:', levelMin);
// console.log('Level Max:', levelMax);
// 최대 너비 레벨 찾기
let resultLevel = 1;
let maxWidth = 0;

for (let d = 1; d <= maxDepth; d++) {
    const width = levelMax[d] - levelMin[d] + 1;
    if (width > maxWidth) {
        maxWidth = width;
        resultLevel = d;
    }
}

console.log(`${resultLevel} ${maxWidth}`);
