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
