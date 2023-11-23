// 2023
/*
(r1, c1), (r2, c2)
|r1 - r2| + |c1 - c2| > 2
*/
function solution(places) {
    const answer = []
    places.map(place => answer.push(cd(place)))
    return answer;
}
const cd = (place) => {
    let rooms = place.map((room) => room.split(''));
    // console.log(rooms)
    const person = []
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(rooms[i][j] === 'P') person.push([i,j])
        }
    }
    // console.log(person)
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, 1, -1];
    while(person.length){
        const [x, y] = person.shift();
        // console.log(x,y)
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;   // 외부 제외
            if (rooms[nx][ny] === 'X') continue;                    // 상하좌우에 X
            if (rooms[nx][ny] === 'P') return 0;                    // 상하좌우에 P면 0
            for(let j = 0; j < 4; j++){                         // 상하좌우의 주변
                const mx = nx + dx[j]
                const my = ny + dy[j]
                if (mx < 0 || mx >= 5 || my < 0 || my >= 5) continue;   // 외부 제외
                if (mx === x && my === y) continue;                     // 주변에 [x,y]면 다시
                if (rooms[mx][my] === 'P') return 0;                    // 주변에 P면 0
            }
        }
    }
    return 1
}

//2022
function solution(places) {
    var answer = [];
    answer = places.map(place => {
        return place.some((row, rowIndex) =>
            row.split('').some((mark, colIndex, rowArr) => {
                if (mark === 'X') return false
                const countPeopleAround = [
                    rowArr[colIndex - 1] || '',
                    rowArr[colIndex + 1] || '',
                    (place[rowIndex - 1] || '')[colIndex],
                    (place[rowIndex + 1] || '')[colIndex],
                ].filter(mark => mark === 'P').length
                return (mark === 'P' && countPeopleAround > 0) || (mark === 'O' && countPeopleAround > 1)
            })
        ) ? 0 : 1
    })
    return answer;
}



/*
이해는 했지만 완전 꼬았다...
*/


/* 이런식의 노가다라도 짰어야 했다....
function solution(places) {
    var answer = [];
    answer = places.map((room) => {
        let person = [];
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(room[i][j] === 'P') person.push([i,j])
            }
        }

        for(let i = 0; i < person.length; i++){
            if(!manhattan(person[i], room)) return 0
        }
        return 1
    })
    return answer;
}

const isValid = (x, y) => (0 <= x && x < 5 && 0 <= y && y < 5);

function manhattan (arr, room) {
    let [a, b] = arr
    const up = isValid(a-1,b) ? room[a-1][b] : false
    const up2 = isValid(a-2,b) ? room[a-2][b] : false
    const down = isValid(a+1,b) ? room[a+1][b] : false
    const down2 = isValid(a+2,b) ? room[a+2][b] : false
    const left = isValid(a,b-1) ? room[a][b-1] : false
    const left2 = isValid(a,b-2) ? room[a][b-2] : false
    const right = isValid(a,b+1) ? room[a][b+1] : false
    const right2 = isValid(a,b+2) ? room[a][b+2] : false
    const upRight = isValid(a-1,b+1) ? room[a-1][b+1] : false
    const downRight = isValid(a+1,b+1) ? room[a+1][b+1] : false
    const upLeft = isValid(a-1,b-1) ? room[a-1][b-1] : false
    const downLeft = isValid(a+1,b-1) ? room[a+1][b-1] : false

    if(up && up === 'P') return false
    if(down && down === 'P') return false
    if(left && left === 'P') return false
    if(right && right === 'P') return false

    if(upRight && upRight === 'P'){
        if(up === 'O' || right === 'O') return false
    }
    if(downRight && downRight === 'P'){
        if(down === 'O' || right === 'O') return false
    }
    if(upLeft && upLeft === 'P') {
        if(up === 'O' || left === 'O') return false
    }
    if(downLeft && downLeft === 'P'){
        if(down === 'O' || left === 'O') return false
    }

    if(up2 && up2 === 'P'){
        if(up === 'O') return false
    }
    if(down2 && down2 === 'P'){
        if(down === 'O') return false
    }
    if(left2 && left2 === 'P') {
        if(left === 'O') return false
    }
    if(right2 && right2 === 'P') {
        if(right === 'O') return false
    }

    return true;
}
*/

/* 처음 생각했던 방식
function keep_dist(place) {
    place = place.map(v => v.split(''));

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {

            if (place[row][col] === 'P') {
                // 가로 한칸 체크
                if (col < 4 && place[row][col + 1] === 'P') {
                    return 0;                    
                }
                // 가로 두칸 체크
                if (col < 3 && place[row][col + 2] === 'P' && place[row][col + 1] === 'O') {
                    return 0;
                }

                // 세로 한칸 체크
                if (row < 4 && place[row + 1][col] === 'P') {
                    return 0;                  
                }
                // 세로 두칸 체크
                if (row < 3 && place[row + 2][col] === 'P' && place[row + 1][col] === 'O') {
                    return 0;
                }

                // 아래 왼쪽 대각
                if (row < 4 && place[row + 1][col - 1] === 'P') {
                    if (place[row + 1][col] === 'O' || place[row][col - 1] === 'O') {
                        return 0;
                    }
                }
                //아래 오른쪽 대각
                if (row < 4 && col < 4 && place[row + 1][col + 1] === 'P') {
                    if (place[row + 1][col] === 'O' || place[row][col + 1] === 'O') {
                        return 0;
                    }
                }
            } 
        }
    }

    return 1;
}

*/
