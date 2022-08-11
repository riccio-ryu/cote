function solution(s) {
    const arr = s.split(" ")
    return arr.map((x) => {
        let typ = ''
        for(let i =0; i < x.length; i++){
            if(i%2===0) typ += x[i].toUpperCase();
            else typ += x[i].toLowerCase()
        }
        return typ
    }).join(" ");
}
