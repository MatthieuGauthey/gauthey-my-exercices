export const my_display_combv2 = () => {
    var res = [];
    var n = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = i+1; j < 9; j++) {
            for (let k = j+1; k < 10; k++, n++) {
                let str = i + " " + j + " " + k;
                res[n] = str;
            }
        }
    }
    return res;
}