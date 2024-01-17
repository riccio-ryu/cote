/*
a: 1, 2
b: 4,5,6
c: 8, 7
d: 3

1,2,3,4,5,6,7,8

1 : 4/ 5 / 6/ 7 / 8 / 3         
1,4 : 8 / 7 / 3                 
1,4,8 : 3
*/
function solution(clothes) {
    let answer = 1;
    const obj = {}
    clothes.forEach(([item, type]) => {
        if(obj[type] === undefined){
            obj[type] = 1
        }else{
            obj[type]++
        }
    })
    for (const [key, value] of Object.entries(obj)) {
        // console.log(key, value)
        answer *= (value + 1)  // 안입는경우 +1
    }
    return answer-1;  // 모두 다 안 입었을 경우 제외
}
