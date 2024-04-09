// 2024

function solution(commands) {
    let answer = [];
    const table = new Array(51).fill().map(_ => new Array(51).fill())
    for (let i = 0; i < 51; i++) {
        for (let j = 0; j < 51; j++) {
            table[i][j] = [0, 'EMPTY'];
        }
    }
    let groupNum = 1;
    
    for (const command of commands) {
        const [com, ...rest] = command.split(' ');
        if (com === 'UPDATE') {
            if (rest.length === 3) {    // 채우기
                const [r, c, value] = rest;
                updateOne(r * 1, c * 1, value, table);
            }
            else {                      // 변경
                const [value1, value2] = rest;
                updateAll(value1, value2, table);
            }
        }else if (com === 'MERGE') {
            groupNum = merge(rest, groupNum, table) ?  groupNum + 1 : groupNum;
        }else if (com === 'UNMERGE') {
            const [r, c] = rest.map(Number);
            const [group, temp] = table[r][c];
            unMerge(group * 1, table);
            table[r][c][1] = temp;
        }else {
            const [r, c] = rest.map(Number);
            answer.push(table[r][c][1]);
        }
    }
    // console.log(table)
    return answer;
}

const updateOne = (r, c, v, t) => {
    const group = t[r][c][0] * 1;
    t[r][c][1] = v;

    if (group !== 0) {
        for (let i = 1; i < 51; i++) {
            for (let j = 1; j < 51; j++) {
                if (t[i][j][0] === group) {
                    t[i][j][1] = v;
                }
            }
        }
    }
}

const updateAll = (v1, v2, t) => {
    for (let i = 1; i < 51; i++) {
        for (let j = 1; j < 51; j++) {
            if (t[i][j][1] === v1) {
                t[i][j][1] = v2;
            }
        }
    }
}

const merge = (rest, group, t) => {
    const [r1, c1, r2, c2] = rest.map(Number);
    const [g1, v1] = t[r1][c1];
    const [g2, v2] = t[r2][c2];
    let value = 'EMPTY';

    if (g1 !== 0 && g2 !== 0 && g1 === g2) {
        return false;
    }

    if (v1 === 'EMPTY' && v2 !== 'EMPTY') {
        value = v2;
    }
    else {
        value = v1;
    }

    t[r1][c1] = [group, value];
    t[r2][c2] = [group, value];
    
    for (let i = 1; i < 51; i++) {
        for (let j = 1; j < 51; j++) {
            if ((g1 !== 0 && t[i][j][0] === g1) || (g2 !== 0 && t[i][j][0] === g2) ) {
                t[i][j] = [group, value];
            }
        }
    }
    return true;
}

const unMerge = (group, t) => {
    if (group === 0) {
        return;
    }
    
    for (let i = 1; i < 51; i++) {
        for (let j = 1; j < 51; j++) {
            if (t[i][j][0] === group) {
                t[i][j] = [0, 'EMPTY'];
            }
        }
    }
}
