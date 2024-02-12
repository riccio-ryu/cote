// 2024

function solution(s) {
    return s.split(' ').map(m => m.slice(0,1).toUpperCase() + m.slice(1).toLowerCase()).join(' ');
}
