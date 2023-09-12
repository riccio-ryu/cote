//2023
function solution(nums) {
    const s = Array.from(new Set(...[nums]))
    const c = nums.length/2
    console.log(s,c)
    return s.length > c ? c : s.length;
}

//2022
function solution(nums) {
    let arr = Array.from(new Set(nums))
    const hf = nums.length/2
    return arr.length >= hf ? hf : arr.length;
}
