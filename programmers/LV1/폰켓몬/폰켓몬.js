function solution(nums) {
    let arr = Array.from(new Set(nums))
    const hf = nums.length/2
    return arr.length >= hf ? hf : arr.length;
}
