import { length } from "../modules/length.js";

export const my_display_unicode = arr => {
    var alphabet = "0123456789       ABCDEFGHIJKLMNOPQRSTUVWXYZ      abcdefghijklmnopqrstuvwxyz";
    var res = "";
    for (let i = 0; i < length(arr); i++) {
        if (arr[i] === 32) {
            res += " ";
            continue;
        }
        let c = alphabet[arr[i] - 48];
        if (c === ' ') {
            continue;
        }
        res += c;
    }
    return res;
}