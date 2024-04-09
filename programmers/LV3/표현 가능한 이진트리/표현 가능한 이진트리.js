/*
1 + 2 + 4 + 8 ... 2 ^ n - 1
58 -> 111010 = 6개 -> 0111010
7   ->  111     ->
42  ->  101010  ->  0101010
5   ->  101     ->
*/
function solution(numbers) {
    let answer = [];
    numbers.forEach(num => {
        const two = makeNumber2(num)
        const c = two[parseInt(two.length / 2)]
        answer.push(check(two, c) ? 1 : 0)
    })
    return answer;
}

const makeNumber2 = (num) => {
    const n = num.toString(2)
    const nh = Math.ceil(Math.log2(n.length + 1))
    const nl = 2 ** nh - 1;
    return n.padStart(nl, '0')
}

const check = (tree, c) => {
    if(c === '0' && tree.indexOf('1') !== -1) return false
    if(tree.length === 0) return true
    
    const prevParent = parseInt(tree.length / 2)
    return (
        check(tree.slice(0, prevParent), tree[prevParent]) &&
        check(tree.slice(prevParent + 1), tree[prevParent])
    );
}
