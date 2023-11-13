// 2023

function solution(line) {
    let answer = [];
    let [maxH, minH, maxW, minW] = [-Infinity, Infinity, -Infinity, Infinity];
    line.forEach(([a,b,e], i) => {
        // console.log(a,b,e,i)
        for(let j = i+1; j < line.length;j++){
            const [c, d, f] = line[j];
            // console.log(c,d,f,j)
            const m = a * d - b * c;
            if (m === 0) continue;
            const xt = b * f - e * d;
            const yt = e * c - a * f;
            if (xt % m || yt % m) continue; // 소수 컷
            const [x, y] = [xt / m, yt / m];
            answer.push([x,y])
            maxW = Math.max(x, maxW);
            minW = Math.min(x, minW);
            maxH = Math.max(y, maxH);
            minH = Math.min(y, minH);
        }
    })
    // console.log(maxW, minW, maxH, minH)  // 4, -4, 4, -4
    const arr = new Array(maxH - minH + 1).fill(null).map(() => new Array(maxW - minW + 1).fill('.'))
    answer.forEach(([x, y]) => { 
        // console.log(x, y)   
        //[0][4]    //[-4][-4]  // [4][-4]   //[4][1]    //[-4][1]
        //[0][4] // [3][0]  // [3][8]   //[8][0]    //[8][8]
        arr[maxH - y][x - minW] = "*"
    });
    // console.log(arr)
    return arr.map((z) => z.join(""));
}

// 2022
function solution(line) {
    const MSI = Number.MAX_SAFE_INTEGER;
    let points = [];
    let minX = MSI;
    let minY = MSI;
    let maxX = -MSI;
    let maxY = -MSI;
    
    for(let i = 0; i <line.length; i++){
        for(let j = i+1; j < line.length; j++){
            const [a,b,e] = line[i]
            const [c,d,f] = line[j]
            const slope = a*d - b*c;
            
            if(slope){
                const pointX = (b*f - e*d) / slope;
                const pointY = (e*c - a*f) / slope;

                if(Number.isInteger(pointX) && Number.isInteger(pointY)){
                    points.push([pointX, pointY])
                    minX = Math.min(minX, pointX)
                    minY = Math.min(minY, pointY)
                    maxX = Math.max(maxX, pointX)
                    maxY = Math.max(maxY, pointY)
                    //console.log(i, j, pointX, pointY, minX, minY, maxX, maxY)
                }
            }
        }
    }
    
    let board = Array.from(Array(maxY - minY + 1), () => Array(maxX - minX + 1).fill("."))
    
    points.forEach(([x,y]) => {
        //console.log(x, y)
        //console.log(minX, minY, maxX, maxY)
        board[maxY-y][x-minX] = "*"
    })
    
    return board.map(x => x.join(""));
}


/*
function solution(line) {
    let answer = [];
    
    const getPoint = () => {
        let points = [];
        for(let i = 0; i <line.length; i++){
            for(let j = i+1; j < line.length; j++){
                const [a,b,e] = line[i]
                const [c,d,f] = line[j]
                const slope = a*d - b*c;
                //console.log(i,j, slope)
                if(slope){
                    const pointX = (b*f - e*d) / slope;
                    const pointY = (e*c - a*f) / slope;
                    
                    if(Number.isInteger(pointX) && Number.isInteger(pointY)){
                        points.push([pointX, pointY])
                    }
                }
            }
        }
        //console.log(points)
        return points
    }
    
    const getStar = (p) => {
        const [maxX, maxY, minX, minY] = p.reduce(
            ([maxX, maxY, minX, minY], [x,y]) => [Math.max(maxX, x), Math.max(maxY,y), Math.min(minX,x), Math.min(minY,y)], [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
        )
        //console.log(maxX, maxY, minX, minY)
        let board = Array.from(Array(maxY - minY + 1), () => Array(maxX - minX + 1).fill("."))
        
        p.forEach(([x,y]) => {
            board[maxY - y][x - minX] = "*"
        })
        
        return board.map(x => x.join(""));
    }
    
    return getStar(getPoint());
}
출처 : https://leego.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B5%90%EC%A0%90%EC%97%90-%EB%B3%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-JavaScript
*/
