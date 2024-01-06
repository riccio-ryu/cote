function solution(numbers) {
    const n = numbers.split('')
    const set = new Set()
    dfs(set, n, '')
    // console.log(set)
    return set.size;
}
// 배열 만들기
function dfs(set, arr, str){
    // console.log(set, arr, str)
    if(arr.length >= 1){
        for (let i = 0; i < arr.length; i++) {
			let nstr = str + arr[i];
			let carr = [...arr];
            carr.splice(i,1)
            if(isPrime(parseInt(nstr))){
                set.add(parseInt(nstr))
            }
            dfs(set, carr, nstr)
        }
    }
}
// 소수
function isPrime (x) {
    if (x <= 1) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
}
