function solution(wallpaper) {
    let lux, luy, rdx, rdy = 0; // rd 는 +1
    wallpaper.map((w, x) => {    // x -> index (y)
        const val = w.split('')
        val.map((v, y) => {     // y -> index (x)
            if(v === '#'){
                lux = lux < x ? lux : x;
                luy = luy < y ? luy : y;
                rdx = rdx > x + 1 ? rdx : x + 1;
                rdy = rdy > y + 1 ? rdy : y + 1;
            }
        })
    })
    return [lux, luy, rdx, rdy];
}
