import { my_display_alpha } from "./exercise-1.js"

export const my_display_alpha_reverse = () => {
    var str = my_display_alpha();
    var res = "";
    for (let i = 25; i >= 0; i--) {
        res += str[i];
    }
    return res;
}
