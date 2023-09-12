//2023
function solution(arr) {
    // if(arr.length < 2){
    //     return [-1]
    // }else{
    //     arr.sort((a,b) => b-a).pop()
    // }
    // return arr;
    
    // 아.. 배열의 순서 안바뀌어야 함
    
    if(arr.length < 2){
        return [-1]
    }else{
        arr.splice(arr.indexOf(Math.min(...arr)), 1)
    }
    return arr
}

//2022
function solution(arr) {
    let answer = [];
    const mn = Math.min(...arr)
    let io = arr.indexOf(mn)
    arr.splice(io,1)
    return arr.length >= 1 ? arr : [-1];
}
