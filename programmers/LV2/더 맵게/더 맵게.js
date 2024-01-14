// 2024
// 이게 lv2라고??
class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;

        while (
            currentIndex > 0 &&
            this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
        ) {
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
            this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
            currentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }

    // 값을 빼되, 오름차 순 정렬 함
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentIndex = 0;

        while (currentIndex * 2 + 1 < this.heap.length) {
            let minChildIndex = currentIndex * 2 + 2 < this.heap.length && this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1] ? currentIndex * 2 + 2 : currentIndex * 2 + 1;

            if (this.heap[currentIndex] < this.heap[minChildIndex]) {
                break;
            } 

            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[minChildIndex];
            this.heap[minChildIndex] = temp;
            currentIndex = minChildIndex;
        }

        return minValue;
    }

    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const sco of scoville) {
    minHeap.push(sco);
  }

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixedScov = first + second * 2;
    minHeap.push(mixedScov);
    mixedCount++;
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}

// 1차, 83.9 / 100.0   // 효율성 0 점,

function solution(scoville, K) {
    let answer = 0;
    scoville.sort((a,b) => a - b)
    while (scoville[0] < K) {
        if (scoville.length < 2) {
            return -1;
        }
        var mix = scoville[0] + scoville[1] * 2;
        scoville.splice(0, 2);
        scoville.push(mix);
        scoville.sort((a, b) => a - b);
        answer++;
    }
    return answer;
}
