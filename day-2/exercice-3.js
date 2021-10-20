import { length } from "../modules/length.js";

export const my_string_is_number = str => {
    var res = false;
    for (let i = 0; i < length(str); i++) {
        let c = str[i];
        if (c >= '0' && c <= '9') {
            res = true;
        }
    }
    return res;
}