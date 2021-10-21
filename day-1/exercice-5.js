import { length } from "../modules/length.js";

export const my_array_alpha = str => {
    var arr = [];
    for (let i = 0; i < length(str); i++) {
        arr[i] = str[i];
    }
    return arr;
}