// 2026

// 힙없이 풀기
const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

const [N, K] = input[0].split(' ').map(Number);
const jewels = [];
for (let i = 1; i <= N; i++) {
    jewels.push(input[i].split(' ').map(Number));
}
const bags = [];
for (let i = N + 1; i <= N + K; i++) {
    bags.push(Number(input[i]));
}

jewels.sort((a, b) => a[0] - b[0]);
bags.sort((a, b) => a - b);

const parent = new Array(K + 1).fill(0).map((_, i) => i);

function find(i) {
    if (parent[i] === i) return i;
    return parent[i] = find(parent[i]);
}

// 3. 이분 탐색으로 보석 무게를 담을 수 있는 최소 가방 위치 찾기
function findFirstBag(weight) {
    let left = 0, right = K - 1;
    let res = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (bags[mid] >= weight) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return res;
}

let totalPrice = 0n;

for (let i = 0; i < N; i++) {
    const [m, v] = jewels[i];
    
    // 이 보석이 들어갈 수 있는 가장 작은 가방의 인덱스를 찾음
    let startIdx = findFirstBag(m);
    
    if (startIdx !== -1) {
        // Union-Find로 실제 비어있는 가방 위치를 찾음
        let availableBagIdx = find(startIdx);
        
        // 사용 가능한 가방이 가방 배열 범위 내에 있다면
        if (availableBagIdx < K) {
            totalPrice += BigInt(v);
            // 해당 가방을 썼으니, 다음 인덱스와 합침 (사용 불가 처리)
            parent[availableBagIdx] = find(availableBagIdx + 1);
        }
    }
}

console.log(totalPrice.toString());


// 아 힙이 필요한 문제... 개어렵다...
const fs = require('fs');
const input = fs.readFileSync('example').toString().trim().split('\n');

// console.log(input);

const [N, K] = input[0].split(' ').map(Number);
const jewels = [];
for (let i = 1; i <= N; i++) {
    jewels.push(input[i].split(' ').map(Number));
}
const bags = [];
for (let i = N + 1; i <= N + K; i++) {
    bags.push(Number(input[i]));
}

jewels.sort((a, b) => a[0] - b[0]);
bags.sort((a, b) => a - b);

// console.log(N, K, jewels, bags);

class MaxHeap {
    constructor() { this.heap = []; }
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    pop() {
        if (this.size() === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let largest = index;
            if (left < this.heap.length && this.heap[left] > this.heap[largest]) largest = left;
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
    size() { return this.heap.length; }
}

let totalPrice = 0n; // 결과값이 매우 클 수 있으므로 BigInt 사용
const pq = new MaxHeap();
let jewelIdx = 0;

// 2. 작은 가방부터 순회
for (let i = 0; i < K; i++) {
    const currentBag = bags[i];

    // 현재 가방에 넣을 수 있는 무게의 모든 보석을 힙에 추가
    while (jewelIdx < N && jewels[jewelIdx][0] <= currentBag) {
        pq.push(jewels[jewelIdx][1]);
        jewelIdx++;
    }
console.log(pq)
    // 힙에서 가장 가격이 높은 보석 하나를 꺼내서 가방에 넣음
    if (pq.size() > 0) {
        totalPrice += BigInt(pq.pop());
    }
    console.log(totalPrice)
}

console.log(totalPrice.toString());
