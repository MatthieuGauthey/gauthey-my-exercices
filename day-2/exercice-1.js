import { length } from "../modules/length.js";

export const my_alpha_reverse = str => {
    var res = "";
    for (let i = length(str) - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}