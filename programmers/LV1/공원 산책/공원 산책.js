function solution(park, routes) {
    const mxH = park.length - 1;        // 최대 세로
    const mxW = park[0].length - 1;     // 최대 가로
    let h = park.findIndex(s => s.includes("S"))    //시작점 세로 위치
    let w = park[h].indexOf("S")        //시작점 가로 위치
    // console.log(mxW, mxH, w, h)
    routes.map(path => {
        let p= path.split(' ');
        let d = p[0];    // 방향
        let n = +p[1];   // 거리
        let tx = w;
        let ty = h;
        let tf = true;      // 조건
        for (let i = 0; i < n; i++) {
            if(d === 'N') ty--;
            else if(d === 'E') tx++;
            else if(d === 'W') tx--;
            else if(d === 'S') ty++;
            
            if(tx > mxW ||
               tx < 0 ||
               ty > mxH ||
               ty < 0 ||
               park[ty].slice(tx, tx+1) === "X"
            ){
                tf = false;
                break;
            }
        }
        
        if(tf){ //진위여부
            w = tx
            h = ty
        }
    })
    return [h, w];
}

/* 정확성 75.0
function solution(park, routes) {
    let start = [0,0]       // 시작위치(현재 위치)
    park.map((x, i) => {    // 시작점 찾아 놓기
        let s = x.indexOf("S")
        if(s !== -1){
            return start = [i,s]
        }
    })
    routes.map(x => {
        let path = x.split(' ');
        let d = path[0];
        let n = +path[1];
        switch(d){
            case "N":
                let vertN = v(park, start[1])
                let strN = vertN.slice(start[0]+1-n, start[0]+1)
                if(vertN.slice(0, start[0]+1).length < n || fd(strN)) break;
                start = [start[0] - n, start[1]]
                break;
            case "E":
                let strE = park[start[0]].slice(start[1]+1, start[1]+1+n)   // S search next part
                if(park[start[0]].slice(start[1]+1).length < n || fd(strE)) break;
                start = [start[0], start[1] + n]
                break;
            case "W":
                let strW = park[start[0]].slice(start[1]+1-n, start[1]+1)
                if(park[start[0]].slice(0, start[1]+1).length < n || fd(strW)) break;
                start = [start[0], start[1] - n]
                break;
            case "S":
                let vertS = v(park, start[1])
                let strS = vertS.slice(start[0]+1, start[0]+1+n)
                if(vertS.slice(start[0]+1).length < n || fd(strS)) break;
                start = [start[0] + n, start[1]]
                break;
            default:
                console.log('default')
        }
    })
    return start;
}
const fd = (t) => {
    return t.includes('X')
}
const v = (park, num) => {
    let txt = "";
    park.map(k => {
        txt += k.slice(num, num+1)
    })
    return txt;
}
*/
