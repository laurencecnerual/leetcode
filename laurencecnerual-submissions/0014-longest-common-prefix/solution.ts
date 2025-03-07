function longestCommonPrefix(strs: string[]): string {
    let prefix = "";
    strs.sort((a,b) => a.length - b.length);

    for (let i = 0; i < strs[0].length; i++) {
        if (strs.filter(s => s[i] === strs[0][i]).length === strs.length) {
            prefix += strs[0][i];
        } else {
            break;
        }
    }

    return prefix;
};
