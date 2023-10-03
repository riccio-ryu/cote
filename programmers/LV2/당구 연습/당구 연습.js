function solution(m, n, startX, startY, balls) {
    let answer = [];
    // console.log(m, n, startX, startY, balls)
    balls.map(ball => {
        const [x2,y2] = ball
        answer.push(d(m,n,startX,startY,x2,y2))
    })
    return answer;
}

function d (m,n,x1,y1,x2,y2){
    const arr = []
    // console.log(m,n,x1,y1,x2,y2)
    //x1, y1 기준점
    // x1 === x2 면, 상하를 비교할 필요가 없다. (y는 좌우)
    if(x1 !== x2 || y1 < y2){//b
        // console.log('b')
        arr.push([x1, -y1])
    }
    if(x1 !== x2 || y1 > y2){//t
        // console.log('t')
        arr.push([x1, n+n-y1])
    }
    if(y1 !== y2 || x1 < x2){//l
        // console.log('l')
        arr.push([-x1, y1])
    }
    if(y1 !== y2 || x1 > x2){//r
        // console.log('r')
        arr.push([m+m-x1, y1])
    }
    // console.log(arr)
    return (arr.reduce((a, b) => {
        // console.log('re ',a,b)
        // console.log('re2 ', a, (b[0]-x2)**2 , (b[1]-y2)**2)
        // a시작점이 m제곱 + n제곱으로 시작해서 최소값을 내보낸다. 
        // (옮겨진 점 - 비교될 balls의 위치 )의 제곱을 더하면 a**2 + b**2 = c**2이 되므로 a와 비교
        return Math.min(a, (b[0]-x2)**2 + (b[1]-y2)**2);
    }, m**2 + n**2))
}
