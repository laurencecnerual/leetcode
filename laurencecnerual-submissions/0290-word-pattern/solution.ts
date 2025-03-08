function wordPattern(pattern: string, s: string): boolean {
    let strs = s.split(" ");

    if (pattern.length !== strs.length) {
        return false;
    }

    let patternDict = {};
    let strsDict = {};

    for (let i = 0; i < pattern.length; i++) {
        patternDict[pattern[i]] = patternDict[pattern[i]] ? patternDict[pattern[i]] + 1 : 1;
        strsDict[strs[i]] = strsDict[strs[i]] ? strsDict[strs[i]] + 1 : 1;
    }

    let mapping = {};
    let ks = Object.keys(patternDict);
    let vs = Object.keys(strsDict);

    for (let i = 0; i < ks.length; i++) {
        mapping[ks[i]] = vs[i];
    }

    for (let i = 0; i < pattern.length; i++) {
        if (mapping[pattern[i]] !== strs[i]) {
            return false;
        }
    }

    return true;
};
