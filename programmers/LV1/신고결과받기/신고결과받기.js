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
