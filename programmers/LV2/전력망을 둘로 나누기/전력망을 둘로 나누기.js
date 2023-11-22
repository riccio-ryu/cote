/*
1:3 / 3:1
1:3 / 2:3 / 3:1,2
1:3 / 2:3 / 3:1,2,4 / 4:3
1:3 / 2:3 / 3:1,2,4 / 4:3,5 / 5:4
1:3 / 2:3 / 3:1,2,4 / 4:3,5,6 / 5:4 / 6:4
1:3 / 2:3 / 3:1,2,4 / 4:3,5,6,7 / 5:4 / 6:4 / 7:4
1:3 / 2:3 / 3:1,2,4 / 4:3,5,6,7 / 5:4 / 6:4 / 7:4,8 / 8:7
1:3 / 2:3 / 3:1,2,4 / 4:3,5,6,7 / 5:4 / 6:4 / 7:4,8,9 / 8:7 / 9:7
*/

function solution(n, wires) {
    let answer = Infinity;
    wires.forEach(([a,b])=>{        // [a,b] 는 두 부분을 자른다 a=v1, b=v2 ... 둘은 같을수 없고, a기준 순차인것 같다.
        const obj ={}   // 연결점  ... a와 b는 없는 즉 index0 부터 index n-1까지 중에  현재의 index는 들어가면 안됨
        for(let i=1;i<=n;i++){
            obj[i] = [] // 초기화
        }
        wires.forEach(([c,d],i)=>{
            if(!(a === c && b === d)){  // 첫번째 wires와 두번째 wires의 각 요소가 같다면 따로 //즉 1번요소 wires의 첫번째의 배열의 두값의 연결 제거 , 2번요소 + wires의 두번째의 배열의 두값의 연결 제거, 3번요소 + wires의 세번째의 배열의 두값의 연결 제거... 본인일 때는 통과시킨다
                obj[c].push(d)
                obj[d].push(c)
            }
        })
        // console.log('e ',obj)
        const p = [1], v=[]
        while(p.length !== 0){
            const pp = p.pop()
            if(!v.includes(pp)){
                p.push(...obj[pp])
                v.push(pp)
            }
        }
        answer = Math.min(answer, Math.abs(n - v.length*2))
        // console.log('~~~~~~ : ', a,b)
    })
    return answer;
}
