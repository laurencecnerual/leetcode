function isSubsequence(s: string, t: string): boolean {
    let sCount = s.length;
    let foundCount = 0;

    for (let i = 0; i <  t.length; i++) {
        if (t[i] === s[foundCount]) {
            foundCount++;
        }
    }

    return foundCount === sCount;
};
