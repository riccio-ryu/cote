//2024

/*
1   2   3
4   5   6
7   8   9
x   0   x

재자리     1
상하좌우    2
대각선     3
인접x     가중치

1756    l:4, r:6
1: 4 -> 1  +2  /   7: 1 -> 7(6 -> 5 -> 7 : 5)  +4 /   5: 6 -> 5(7 -> 5 :3)   +2 / 6: 5->6   +2

5123    l:4, r:6
5: 6->5(4->5)   +2  /   1:  /   2:   /3: 
오 왼왼왼or 오 왼 오오
5는 왼 오 둘다 가능인데, 다음 숫자가 무엇인가에 따라 달라짐
*/
function solution(numbers) {
    let answer = 0;
    //[0][0] 1, [0][1] 7... 좌판이동
    const d = [ 
        [1, 7, 6, 7, 5, 4, 5, 3, 2, 3], 
        [7, 1, 2, 4, 2, 3, 5, 4, 5, 6], 
        [6, 2, 1, 2, 3, 2, 3, 5, 4, 5], 
        [7, 4, 2, 1, 5, 3, 2, 6, 5, 4], 
        [5, 2, 3, 5, 1, 2, 4, 2, 3, 5], 
        [4, 3, 2, 3, 2, 1, 2, 3, 2, 3], 
        [5, 5, 3, 2, 4, 2, 1, 5, 3, 2], 
        [3, 4, 5, 6, 2, 3, 5, 1, 2, 4], 
        [2, 5, 4, 5, 3, 2, 3, 2, 1, 2], 
        [3, 6, 5, 4, 5, 3, 2, 4, 2, 1],
    ]
    let arr = new Array(10).fill().map(_ => new Array(10).fill(null))
    // 시작점
    arr[4][6] = 0
    arr[6][4] = 0
    for (let num of numbers) {
        num = +num
        const arr2 = new Array(10).fill().map(_ => new Array(10).fill(null))  // num에 대한 기록
        
        arr.forEach((r,i) => {
            r.forEach((s,j) => {
                if(s !== null){ // 이미 값이 할당 됨
                    // console.log(r,i,s,j)
                    if(i === num || j === num){
                        const v = arr2[i][j] ? Math.min(arr2[i][j], s + 1) : s + 1; // 이미 기록된 가중치에 1을 더한 값
                        arr2[i][j] = v;
                        arr2[j][i] = v;
                    }else{
                        const w1 = d[i][num]; // i 위치가 움직일 경우
                        const w2 = d[j][num]; // j 위치가 움직일 경우
                        // 기록된 가중치와, 더해질 가중치의 합, 이미 기록된 값이 있다면, 작은 값으로 기록
                        const v1 = arr2[i][num] ? Math.min(arr2[i][num], s + w2) : s + w2; 
                        const v2 = arr2[j][num] ? Math.min(arr2[j][num], s + w1) : s + w1; 
                        // console.log(num, i, j, w1, w2, s, v1, v2)
                        // 더해진 가중치를 기록
                        arr2[i][num] = v1;
                        arr2[num][i] = v1;
                        arr2[num][j] = v2;
                        arr2[j][num] = v2;
                    }
                }
            })
        })
        // console.log(arr2)
        arr = arr2
    }
    return Math.min(...arr.flat().filter(a => a > 0));
}
