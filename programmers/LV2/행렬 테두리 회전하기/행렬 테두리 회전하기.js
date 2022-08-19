function solution(rows, columns, queries) {
    let answer = [];
    let mat = new Array(rows)
    for(let i = 0; i< rows; i++) mat[i] = new Array(columns)
    for(let i = 0; i< rows; i++) {
        for(let j = 0; j < columns; j++){
            mat[i][j] = i * columns + j + 1
        }
    }
    for(const que of queries){
        let order =[]
        const [row1,col1,row2,col2] = [que[0]-1, que[1]-1, que[2]-1, que[3]-1]
        for(let i = row1; i <= row2; i++) order.push(mat[i][col1])//i=1 ~ 4, mat[1][1], mat[2][1], mat[3][1], mat[4][1]
        for(let i = col1+1; i <= col2; i++) order.push(mat[row2][i])//i=2~3(첫번째랑 겹친거 뻬는+1), mat[4][2], mat[4][3]
        for(let i = row2-1; i >= row1; i--) order.push(mat[i][col2])//i=3~1(두번째랑 겹친거 뻬는-1), mat[3][3], mat[2][3], mat[1][3]
        for(let i = col2-1; i > col1; i--) order.push(mat[row1][i])//i=2(첫번째랑 세번째 겹친거 뻬는-1과 초과), mat[1][2]
        console.log('rcrc',row1,col1,row2,col2)
        console.log('od',order)
        order.push(order.shift())//맨앞에것을 뒤로.. 배열이 한바퀴 돈다.
        answer.push(Math.min(...order))//최소값을 집어 넣음
        console.log('od change',order)
        for (let i = row1; i <= row2; i++) {
            console.log('mt1', mat[i][col1], order[0])
            mat[i][col1] = order.shift()
        }
        for (let i = col1 + 1; i <= col2; i++) {
            console.log('mt2', mat[row2][i], order[0])
            mat[row2][i] = order.shift()
        }
        for (let i = row2 - 1; i >= row1; i--) {
            console.log('mt3', mat[i][col2], order[0])
            mat[i][col2] = order.shift()
        }
        for (let i = col2 - 1; i > col1; i--) {
            console.log('mt4', mat[row1][i], order[0])
            mat[row1][i] = order.shift()
        }
    }
    return answer;
}

//이건 진짜.... 모르겠다... 다시풀어볼 문제다

/*
function solution(rows, columns, queries) {
    const a = [...Array(rows)].map((_, r)=>[...Array(columns)].map((_, c)=>r*columns+c+1));
    const mins = [];

    queries.map(query => {
        const [x1, y1, x2, y2] = query.map(_=>_-1);
        let min = a[x1][y1], tmp = a[x1][y1];

        for(let i=x1;i<x2;i++) {
            a[i][y1] = a[i+1][y1];
            min = Math.min(min, a[i][y1]);
        }
        for(let i=y1;i<y2;i++) {
            a[x2][i] = a[x2][i+1];
            min = Math.min(min, a[x2][i]);
        }
        for(let i=x2;i>x1;i--) {
            a[i][y2] = a[i-1][y2];
            min = Math.min(min, a[i][y2]);
        }
        for(let i=y2;i>y1;i--) {
            a[x1][i] = a[x1][i-1];
            min = Math.min(min, a[x1][i]);
        }
        a[x1][y1+1] = tmp;

        mins.push(min);
    })

    return mins;
}
*/
