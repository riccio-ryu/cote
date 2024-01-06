// 2023

// 3차
/*
"BBCBAAAAAAAAAB"
"BBAAABA"8/7
뒤를 먼저 입력 받는 부분도 생각을 했어야 했다...
*/
function solution(name) {
    let answer = 0;
    let min = name.length - 1;      // 우측으로만 이동한다면
    for(let i=0; i<name.length; i++){
        // console.log(name[i], a(name[i]))
        answer += a(name[i])        // 현재 알파벳 위아래
        let next = i+1              // 현재 이동된 위치
        // console.log(next, next < name.length, a(name[next]))
        while(next < name.length && a(name[next]) === 0){   // 다음것이 A ~ 다음것의 A의 끝까지
            // console.log('A')
            next += 1;            
        }
        // 그냥 우측으로만,
        // i만큼 두번 (오른쪽으로 와서 왼쪽으로 + next위치부터 끝 (== 총 길이 - next위치)),
        // 뒤로 먼저
        min = Math.min(min, (i*2) + name.length - next, i + 2 * (name.length - next));
    }
    answer+=min
    return answer;
}

function a(s){
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // console.log(str.indexOf(s), 26 - str.indexOf(s))
    if(str.indexOf(s) > 13) return 26 - str.indexOf(s)
    else return str.indexOf(s)
}

// 2차 합계: 59.3 / 100.0
/*
"BBCBAAAAAAAAAB"
"BBAAABA"8/7
*/
function solution(name) {
    let answer = 0;
    let min = name.length - 1;      // 우측으로만 이동한다면
    for(let i=0; i<name.length; i++){
        // console.log(name[i], a(name[i]))
        answer += a(name[i])        // 현재 알파벳 위아래
        let next = i+1              // 현재 이동된 위치
        // console.log(next, next < name.length, a(name[next]))
        while(next < name.length && a(name[next]) === 0){   // 다음것이 A ~ 다음것의 A의 끝까지
            // console.log('A')
            next += 1;            
        }
        //i만큼 두번 (오른쪽으로 와서 왼쪽으로 + next위치부터 끝 (== 총 길이 - next위치))
        min = Math.min(min, (i*2) + name.length - next);
    }
    answer+=min
    return answer;
}

function a(s){
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // console.log(str.indexOf(s), 26 - str.indexOf(s))
    if(str.indexOf(s) > 13) return 26 - str.indexOf(s)
    else return str.indexOf(s)
}

function a(s){
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // console.log(str.indexOf(s), 26 - str.indexOf(s))
    if(str.indexOf(s) > 13) return 26 - str.indexOf(s)
    else return str.indexOf(s)
}

// BBCBAAAAAAAAAB 라면 BBCB 갔다가 A에서 우로 이동(9칸)보다는 좌로 이동(4칸)이동하는 편이 빠르다..
// 1차 합계: 59.3 / 100.0
function solution(name) {
    name = name.split('')
    const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    function fn(d){
        let cnt = 0
        const c = 12    // m / n
        const obj = d === 1 ? [...name] : [...name.slice(0,1), ...name.slice(1).reverse()]
        while(obj.length){
            if(obj.at(-1) === 'A') {
                obj.pop()
            }else{
                break;
            }
        }
        obj.forEach((n,i, q) => {
            cnt += i > 0 ? 1 : 0
            let num = arr.indexOf(n) > 13 ? 26 - arr.indexOf(n) : arr.indexOf(n)
            cnt += num
        })
        return cnt
    }
    return Math.min(fn(1), fn(-1));
}
