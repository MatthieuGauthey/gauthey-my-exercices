import { length } from "../modules/length.js";

export const my_display_unicode = arr => {
    var alphabet = "0123456789       ABCDEFGHIJKLMNOPQRSTUVWXYZ      abcdefghijklmnopqrstuvwxyz";
    var res = "";
    console.log(arr);
    for (let i = 0; i < length(arr); i++) {
        if (typeof arr[i] != "number") {
            console.log("invalid arg");
            continue;
        }
        if (arr[i] === 32) {
            res += " ";
            console.log("space");
            continue;
        }
        let c = alphabet[arr[i] - 48];
        if (c === ' ') {
            console.log("OOB")
            continue;
        }
        console.log("valid char");
        res += c;
    }
    return res;
}