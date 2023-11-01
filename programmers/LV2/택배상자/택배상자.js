// 2023

// 2차
function solution(order) {
    let answer = 0;
    let l = order.length+1;
    const arr = [];
    let ci = 1;
    let oi = 0;
    
    while(ci <= l){
        // console.log(ci, l)
        if(arr.length !== 0 && order[oi] === arr.at(-1)){
            arr.pop();
            oi++;
            answer++;
        }else if(ci === order[oi]){
            oi++;
            answer++;
            ci++;
        }else{
            arr.push(ci)
            ci++
        }
    }
    return answer
}


// 1차 , 합계: 50.0 / 100.0

/* 4,3,1,2,5
c = [1,2,3,4,5]
h = []
->
c = [5]
h = [1,2,3]
a =[4]
->
c = [5]
h = [1,2]
a =[4,3]
->
a.push 2 or 5 x => 2
*/
function solution(order) {
    // let answer = 0;
    let arr = []    //트럭
    let sub = []    //보조
    let oi = 0      //order index
    let ci = 1      // ci -> 1,2,3,4,5...
    
    while(arr.length <= order.length){
        const o = order[oi]
        // console.log(arr, sub, ci, oi, o)
        if(sub.at(-1) === o && typeof(sub.at(-1)) === 'number'){   // 보조와 order[oi]번째인 o가 같다면
            arr.push(sub.pop())
            oi++
            ci++
        }else if(ci === o){     // 컨테이너 넘버와 o가 같다면
            arr.push(ci)
            oi++
            ci++
        }else if(ci > order.length){
            break
        }else{
            sub.push(ci)
            ci++
        }
    }
    // console.log(arr)
    return arr.length;
}
