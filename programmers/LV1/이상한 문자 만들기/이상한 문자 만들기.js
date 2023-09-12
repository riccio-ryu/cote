//2023
function solution(s) {
    const arr = s.split(' ')
    return arr.map(a => {
        const b = a.split('')
        for(let i=0; i<b.length; i++){
            if(i%2){
                b[i] = b[i].toLowerCase()
            }else{
                b[i] = b[i].toUpperCase()
            }
        }
        return b.join('')
    }).join(' ');
}

//2022
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
