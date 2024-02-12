// 2024
//공식찾는데만 10분 쓴듯

/*
참고 : https://mathbang.net/562#gsc.tab=0
[[a11 a12 a13], [a21 a22 a23]]        [[b11 b12], [b21 b22], [b31 b32]]
=> [[a11*b11+a12*b21+a13*b31], [a11*b12+a12*b22+a13*b32], [a21*b11+a22*b21+a23*b31], [a21*b12+a22*b22+a23*b32]]

[2*5+3*2+2*3=22
2*4+3*4+2*1=22
2*3+3*1+2*1=11]
*/
function solution(arr1, arr2) {
    let answer = [];
    for(let i = 0; i < arr1.length; i++){//arr1 높이만큼
        let arr = []
        for(let j = 0; j < arr2[0].length; j++){//arr2의 너비만큼
            let sum = 0
            for(let k = 0; k < arr2.length; k++){ //arr2의 높이 만큼
                // console.log(i,j,k)
                sum+=arr1[i][k]*arr2[k][j]
            }
            // console.log(sum)
            arr.push(sum)
        }
        // console.log(arr)
        answer.push(arr)
    }
    return answer;
}
