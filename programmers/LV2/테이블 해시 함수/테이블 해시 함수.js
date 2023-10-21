/* xor 이란?
두 값의 자릿수를 비교해 같으면 0을 다르면 1을 계산한다.
5 XOR 3 ->
0101 XOR 0011 = 0110
*/
function solution(data, col, row_begin, row_end) {
    let answer = 0;
    data.sort((a,b) => {    // 값이 동일하면 기본키인 첫 번째 컬럼의 값을 기준
        // console.log(a, b)
        if(a[col-1] === b[col-1]){
            return b[0] - a[0]
        }else{              //오름차순 정렬
            return a[col-1] - b[col-1]
        }
    })
    // console.log(data)
    data.map((d, i) => {
        // console.log(d,i)
        if(row_begin-1 <= i && row_end-1 >= i){
            const val = d.reduce((a,c) => {
                // console.log('a : ', a, ' c : ', c)
                return a + c%(i+1)
            }, 0)
            answer ^= val
        }
    })
    return answer;
}
