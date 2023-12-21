function solution(dirs) {
    let answer = 0;
    let [x,y] = [0,0];
    const arr = []
    const move = (d) => {
        switch (d) {
          case 'U':
            y = y > 4 ? y : y+1
            break;
          case 'D':
            y = y < -4 ? y : y-1
            break;
          case 'L':
            x = x < -4 ? x : x-1
            break;
          case 'R':
            x = x > 4 ? x : x+1
            break;
          default:
            console.log(`default`);
        }
    }
    dirs.split('').map(d => {
        const [nx, ny] = [x,y]  // 현재 시점
        move(d)
        // console.log([nx,ny], [x,y]) // 과거, 현재,
        const v = [[nx, ny].join(), [x,y].join()].sort().join(' ')
        if(!arr.includes(v) && !(nx === x && y === ny)){
            // console.log(arr, v)
            arr.push(v)
            answer++
        }
    })
    return answer;
}
