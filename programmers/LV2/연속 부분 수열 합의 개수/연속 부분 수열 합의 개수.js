// 투포인트 알고리즘을 검색했는데 슬라이딩 알고리즘과 비교해주는 사이트를 보았고, 적용

function solution(elements) {
    const arr = new Set()
    const l = elements.length
    
    for(let i = 1; i <= l; i++){
        // console.log(i)   // i 는 길이의 수 ex) 1~5
        let sum = 0;
        for(let j =0; j < l; j++){  // elements의 인덱스
            if(j === 0){
                for(let k = 0; k < i; k++){
                    sum+=elements[k];
                }
            }else{
                // console.log('f',i,j,sum)
                sum-=elements[j-1] //이전것 제거
                sum+=elements[(j+i-1) % l]  // 다음것, [7,9,1,1,4]	에서 4에서 3가지이면, 
                // (j+i-1) % l -> %는 length를 넘어서는거 처리
                // i = 3(가지), j = 1(번째인 7부터)~3, -> 17 - 7 + 1 = 11
                // i = 3, j = 2~4, -> 11 - 9 + 4 = 6
            }
            arr.add(sum)
        }
    }
    // console.log(arr, arr.size)
    return arr.size;
}
