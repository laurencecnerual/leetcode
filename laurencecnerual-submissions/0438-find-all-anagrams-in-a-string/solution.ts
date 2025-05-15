function isEqual(pDict: Record<string,number>, sDict: Record<string,number>): boolean {
    for (let [key, value] of Object.entries(pDict)) {
        if (!sDict[key] || sDict[key] != value) return false;
    }

    return true;
}

function findAnagrams(s: string, p: string): number[] {
    let pLetters = {};
    let sLetters = {};
    let pLen = p.length;
    let sLen = s.length;
    let anagramStartingPoints = [];

    for (let i = 0; i < pLen; i++) {
        pLetters[p[i]] = pLetters[p[i]] ? pLetters[p[i]] + 1 : 1;
        sLetters[s[i]] = sLetters[s[i]] ? sLetters[s[i]] + 1 : 1;
    }

    if (isEqual(pLetters, sLetters)) anagramStartingPoints.push(0);

    for (let j = pLen; j < sLen; j++) {
        sLetters[s[j]] = sLetters[s[j]] ? sLetters[s[j]] + 1 : 1;
        
        sLetters[s[j - pLen]] -= 1;
        if (sLetters[s[j - pLen]] < 1) delete sLetters[s[j - pLen]];

        if (isEqual(pLetters, sLetters)) anagramStartingPoints.push(j - pLen + 1);
    }

    return anagramStartingPoints;
};
