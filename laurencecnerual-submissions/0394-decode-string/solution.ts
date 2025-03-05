function decodeString(s: string): string {
    let decodedS = "";
    let stack = [];
    let strMultiplier = "0";
    let multiplier = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[") {
            multiplier = Number(strMultiplier);
            stack.push([multiplier, decodedS])
            
            decodedS = "";
            strMultiplier = "";
            multiplier = 0;
        } else if (s[i] === "]") {
            let [num, str] = stack.pop();
            decodedS = str + decodedS.repeat(num);
        } else if (isNaN(Number(s[i]))) {
            decodedS += s[i];
        } else {
            strMultiplier += s[i];
        }
    }

    return decodedS;
};
