function solution(participant, completion) {//participant = completion + ?
    participant = participant.sort()
    completion = completion.sort()
    for(let i = 0; i< completion.length; i++){
        if(completion[i] !== participant[i]){
            return participant[i]
        }
    }
    return participant[participant.length -1];
}

/*
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))

----

function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}
*/
