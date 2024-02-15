function solution(s) {
    s = s.split(' ').map(Number).sort((a,b) => a - b)
    return s[0] + ' ' + s[s.length-1];
}
