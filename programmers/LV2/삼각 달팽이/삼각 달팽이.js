/*
1 -> 1
    -> 1
2 -> 1,2,3
    -> 1 / 2, 3
3 -> 1,2,3,4,5,6
    -> 1 / 2, 6 / 3,4,5
4 -> 1,2,3,4,5,6,7,8,9,10
    -> 1 / 2, 9 / 3, 10, 8 / 4,5,6,7
5 -> 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
    -> 1 / 2,12 / 3,13,11 / 4,14,15,10 / 5,6,7,8,9,10
6 -> 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21
    -> 1 / 2,15 / 3, 16, 14 / 4, 17, 21, 13 / 5, 18, 19, 20, 12/ 6,7,8,9,10,11

n -> 6      => 1->6->2(3)->5->4

start [[0],[0,0],[0,0,0],[0,0,0,0],[0,0,0,0,0],[0,0,0,0,0,0]]
1 [[1], [0,0], [0,0,0], [0,0,0,0], [0,0,0,0,0], [0,0,0,0,0,0]]
1-> 6 [[1], [2,0], [3,0,0], [4,0,0,0], [5,0,0,0,0], [6,0,0,0,0,0]]
6 [[1], [2,0], [3,0,0], [4,0,0,0], [5,0,0,0,0], [6,7,8,9,10,11]]

[0]
[0], [0]
[0], [0], [0]
[0], [0], [0], [0]
[0], [0], [0], [0], [0]
[0], [0], [0], [0], [0], [0]

순서 = [0,0] / [1,0] / [2,0] / [3,0] / [4,0] / [5,0]
      [5,1] / [5,2] / [5,3] / [5,4] / [5,5]
      [4,4] / [3,3] / [2,2] / [1,1]
      [2,1] / [3,1] / [4,1]
      [4,2] / [4,3]
      [3,2]

아래 or 오른쪽 or 위+좌

갯수 (n) * (n+1) / 2 => 6*7/2 =>21
*/
function solution(n) {
    let answer = new Array(n).fill().map((_, i) => new Array(i+1).fill(0));
    const num = (n) * (n+1) / 2;
    // const dx = [0,1,-1]
    // const dy = [1,0,-1]     // 하, 우, 상+좌
    let [i,j,cnt] = [-1,0,1]   // x, y, 숫자 1~n   //arr[i][j] 하:arr[i+1][j] 우: arr[i][j+1] 상좌: arr[i-1][j-1]
    // cnt이 num보다 커지면 안됨
    while(cnt <= num){
        // console.log(cnt, i, j, answer)
        for(let k = 0; k < n; k++) {//하
            ++i
            answer[i][j] = cnt
            // console.log('k', k,i, answer)
            // i < n-1 ? i++ : i
            cnt++
        }
        for(let k = 0; k < n-1; k++){//우
            ++j
            // console.log('k1', k,i,j, answer, answer[i])
            answer[i][j] = cnt
            cnt++
        }
        for(let k = 0; k < n-2; k++){//상좌
            --i, --j
            answer[i][j] = cnt
            cnt++
            // console.log('k2', k, i, j, answer)
        }
        n -= 3
        // if(answer[i][j] === 0){ // answer[i][j] 0이면, cnt
        //     answer[i][j] = cnt
        //     // answer[i+1][j] === 0 ? i++ : ''
        //     if(i < n-1 && answer[i+1][j] === 0) i++
        //     // else if(j < n-1 && answer[i][j+1] === 0) j++
        //     // else if(answer[i-1][j-1] === 0) i--, j--
        //     console.log('~~~~',answer)
        // }
        // if(answer[i+1][j] === 0){   // 하단
        //     i += 1
        // }
        // console.log('~~~~',answer, cnt)
        // break;
        // cnt++
    }
    return answer.flat();
}
