export const my_display_comb = () => {
    var res = [];
    var n = 0;
    for (let i = 0; i < 100; i++) {
        for (let j = i +1; j < 100; j++, n++) {
            let str = i + " " + j;
            res[n] = str;
        }
    }
    return res;
}

console.log(my_display_comb());