// 20205

const fs = require('fs');
const input = fs.readFileSync('example').toString().trim();

// console.log(input);

function solve(ipv6) {
    // 1. "::"를 처리하기 위해 split을 사용합니다.
    // "::"를 기준으로 나누면 생략된 위치를 알 수 있습니다.
    let groups = ipv6.split(':');
    
    // "::"가 양 끝에 있을 경우 생기는 빈 문자열 제거 및 보정
    // 예: "::1" -> ["", "", "1"] / "1::" -> ["1", "", ""]
    // 하지만 단순히 빈 공간을 찾아 개수를 맞추는 것이 더 직관적입니다.
    
    let result = [];
    let emptyIndex = -1;

    // "::" 위치 찾기 (빈 문자열이 연속되거나 하나인 경우)
    // 실제 입력에서 ::는 단 한 번만 나타납니다.
    const actualGroups = [];
    for (let i = 0; i < groups.length; i++) {
        if (groups[i] === '' && emptyIndex === -1) {
            emptyIndex = i;
            // 만약 ::가 맨 앞이나 맨 뒤면 split 결과에 빈 문자열이 중복될 수 있음
            if (groups[i+1] === '') i++; 
        } else {
            actualGroups.push(groups[i]);
        }
        console.log(actualGroups)
    }

    // 2. 생략된 0000 그룹 개수 계산
    const missingCount = 8 - actualGroups.length;
    const zeroGroups = Array(missingCount).fill('0000');

    // 3. 원래 위치에 0000 삽입
    // emptyIndex가 -1이면 ::이 없는 경우, 있으면 해당 위치에 삽입
    if (emptyIndex !== -1) {
        const insertPos = ipv6.startsWith('::') ? 0 : 
                         ipv6.endsWith('::') ? actualGroups.length : 
                         groups.findIndex(g => g === '');
        
        actualGroups.splice(insertPos, 0, ...zeroGroups);
    }

    // 4. 각 그룹을 4자리로 맞추기 (앞에 0 채우기)
    const finalAddress = actualGroups.map(group => {
        return group.padStart(4, '0');
    });

    return finalAddress.join(':');
}

console.log(solve(input));
