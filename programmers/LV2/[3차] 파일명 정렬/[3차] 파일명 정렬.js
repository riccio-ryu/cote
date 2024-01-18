/*
regex 
+ \d         : 숫자    ===[0-9]
+ \D         : 숫자가 아닌 것  ===[^0-9]
+ `+          : 최소 한개 or 여러개/Wo+/
*/
// 걸린시간은 약 40분,,, match로 찾을 정규식 찾는데 시간 다씀
function solution(files) {
    let arr = files.map(f => {
        // console.log(f.match(/(\D+)(\d+)/))  //[1] : head, [2] : number
        return f.match(/(\D+)(\d+)/)
    })
    // console.log(arr)
    arr.sort((a,b) => {
        // console.log(`a : ${a}, b : ${b}`)
        if(a[1].toUpperCase() > b[1].toUpperCase()){
            return 1
        }else if(a[1].toUpperCase() < b[1].toUpperCase()){
            return -1
        }else{
            // head 같다면, number 비교
            return Number(a[2]) - Number(b[2])
        }
    })
    // console.log(arr)
    return arr.map(f => f.input);
}
