import { length } from "../modules/length.js";

export const my_size_alpha = str => {
    if (typeof str != "string") {
        return 0;
    }
    return length(str);
}