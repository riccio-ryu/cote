function solution(n, info) {
    let answer = [-1];
    let max = 0;
    function c(inf, arr){
        return inf.reduce((a,c,i) => {
            // console.log('kkk : ', a,c,i)
            if (c < arr[i]) return a + 10 - i   // 라이언 win
            else if (c === 0 && arr[i] === 0) return a  // 비김 0
            else return a - 10 + i              // 어피치 win
        }, 0)
    }
    function dfs(m, array, idx){
        // 라이언 구하기
        // console.log(sum, array, idx)
        if(m === 0){    // 활 0
            // console.log('000000',info, array)
            const num = c(info, array)
            // console.log('m == 0', max, num, array)
            if (max < num) {
                max = num;
                answer = array;
            }
            return;
        }else{
            for(let i = idx; i < 11; i++){  // 작은 숫자 부터
                const j = 10 - i;
                const copy = [...array];
                // console.log(j, copy, m, info[j])
                if(m > info[j]){
                    copy[j] = info[j] + 1
                    dfs(m - copy[j], copy, i+1)
                }else{
                    // console.log('m<infoj ', m < info[j])
                    // console.log(m, info[j], info, copy)
                    copy[10] += m;
                    dfs(0, copy, i + 1);
                }
            }
            // console.log('------------- ', m, info, array)   // 활의 갯수가 남았다
            const copy = [...array];
            copy[10] += m;
            dfs(0, copy, -1);   // 나머지 활 다쏨 -> m=0
        }
    }
    dfs(n, new Array(11).fill(0), 0)
    return answer;
}
