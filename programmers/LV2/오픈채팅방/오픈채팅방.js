// 2023
function solution(record) {
    const answer = [];
    const m = {}
    record.map(r => {
        const [act, uid, nick] = r.split(' ');
        // console.log(act, uid, nick)
        if (act !== 'Leave') m[uid] = nick
    })
    record.map(r => {
        const [act, uid, nick] = r.split(' ')
        switch(act){
            case 'Enter': 
                answer.push(`${m[uid]}님이 들어왔습니다.`)
                break;
            case 'Leave': 
                answer.push(`${m[uid]}님이 나갔습니다.`)
                break;
        }
    })
    return answer;
}





// 2022
function solution(record) {
    let answer = [];
    const mm = new Map();
    for(let i = 0; i < record.length; i++){
        const [act, uid, nick] = record[i].split(' ');
        
        if (act === 'Leave') {
            answer.push([uid, '님이 나갔습니다.']);
            
            continue;
        }
        
        if (act === 'Enter') {
            answer.push([uid, '님이 들어왔습니다.']);
        }
        mm.set(uid,nick)
    }
    return answer.map((x) => mm.get(x[0]) + x[1]);
}


/*
function solution(record) {
    var answer = [];
    const users = {}
    record.map(history => {
        const [action, id, name] = history.split(' ')
        if (action !== 'Leave') users[id] = name
    })
    record.map(history => {
        const [action, id, name] = history.split(' ')
        if (action === 'Enter') answer.push(`${users[id]}님이 들어왔습니다.`)
        if (action === 'Leave') answer.push(`${users[id]}님이 나갔습니다.`)
    })
    return answer;
}
*/
