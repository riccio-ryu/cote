// 2024

function solution(e, starts) {
    let answer = [];
    let arr = new Array(e+1).fill(0);
    let max = new Array(e+1).fill(e);   // 결과값
    // 약수 개수
    /* 
    1...1, 1...2, 1...3,,, 1...8
    2...2, 2...4, 2...6, 2...8
    3...3, 3...6
    4...4, 4...8
    5...5
    6...6
    7...7
    8...8
    */
    for(let i = 1; i <= e; i++) {   
        for(let j = i; j <= e; j += i) {
            // console.log(i, j, arr)
            arr[j] += 1;
        }
    }
    
    for(let i=e-1; i>0; i--) {
        // console.log(i, arr[i] , arr[max[i+1]], arr, max, arr[i] >= arr[max[i+1]])
        // max에 담긴 값은 Max값의 자연수(인덱스) 이므로 arr에서 자연수의 약수 개수를 가져온다.
        
        if(arr[i] >= arr[max[i+1]]) {// 약수의 개수가 크면 해당 자연수(인덱스)를 현재 max에 담는다.
            // console.log('max')
            max[i] = i;
        } else {// 약수의 개수가 작으면 앞으 자연수(index)를 현재 max에 담는다.
            max[i] = max[i+1];
        }
    }
    // console.log(arr, max)
    starts.forEach(s => answer.push(max[s]))
    return answer;
}
