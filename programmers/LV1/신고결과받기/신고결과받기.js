function solution(id_list, report, k) {
    let count = new Array(id_list.length).fill(0);
    let cu = Array.from({ length: id_list.length }, (i) => []);
    let mail = Array.from({ length: id_list.length }, (i) => 0)
    const report_list = new Set(report);
    const report_array = Array.from(report_list);
    
    for(let i = 0; i < report_array.length; i++){
        report_array[i] = report_array[i].split(" ");
        count[id_list.indexOf(report_array[i][1])]++;
        cu[id_list.indexOf(report_array[i][1])].push(report_array[i][0]);
    }
    
    for(let i =0; i< id_list.length; i ++){
        if(count[i] < k) continue;
        for(let j =0; j< cu[i].length; j++){
            mail[id_list.indexOf(cu[i][j])]++;
        }
    }
    return mail;
}


//모범 답안

function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}
