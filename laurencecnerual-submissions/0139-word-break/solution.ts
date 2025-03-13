function wordBreak(s: string, wordDict: string[]): boolean {
    let cache = Array(s.length + 1).fill(false);
    cache[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (cache[j] && wordDict.includes(s.substring(j, i))) {
                cache[i] = true;
                break;
            }
        }
    }

    return cache[s.length];
};
