export const my_is_posi_neg = nbr => {
    if (nbr === null) {
        return "POSITIF";
    }
    if (typeof nbr === "undefined") {
        return "POSITIF";
    }
    if (nbr > 0) {
        return "POSITIF";
    }
    if (nbr === 0) {
        return "NEUTRAL";
    }
    if (nbr < 0) {
        return "NEGATIF";
    }
}