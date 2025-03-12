function gcdOfStrings(str1: string, str2: string): string {
    let x = "";
    let shorterLength = Math.min(str1.length, str2.length);
    let longerLength = Math.max(str1.length, str2.length);
    let gcd = 0;
    let str1Times = 0;
    let str2Times = 0;

    for (let i = shorterLength; i >= 1; i--) {
        gcd = i;

        if (longerLength % gcd === 0 && shorterLength % gcd === 0) {
            str1Times = str1.length / gcd;
            str2Times = str2.length / gcd;
            break;
        }
    }

    for (let i = 0; i < gcd; i++) {
        if (str1[i] === str2[i]) {
            x += str1[i];
        } else {
            break;
        }
    }

    let isGCD = str1 === x.repeat(str1Times) && str2 === x.repeat(str2Times);

    return isGCD ? x : "";
};
