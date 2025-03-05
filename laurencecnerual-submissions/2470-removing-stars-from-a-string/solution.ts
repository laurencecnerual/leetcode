function removeStars(s: string): string {
    let arrS = s.split("");
    let deleteCount = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (arrS[i] === "*") {
            deleteCount++;
        } else if (deleteCount > 0) {
            arrS[i] = "";
            deleteCount--;
        }
    }

    arrS = arrS.filter(char => char !== "*");
    return arrS.join("");
};
