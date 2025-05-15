function closeStrings(word1: string, word2: string): boolean {
    if (word2.length !== word1.length) return false; // both words need to consist of the same number of letters
    let w1Dict = {};
    let w2Dict = {};

    for (let i = 0; i < word1.length; i++) {
        w1Dict[word1[i]] = w1Dict[word1[i]] ? w1Dict[word1[i]] + 1 : 1;
        w2Dict[word2[i]] = w2Dict[word2[i]] ? w2Dict[word2[i]] + 1 : 1;
    }

    if (Object.keys(w1Dict).sort().join("") !== Object.keys(w2Dict).sort().join("")) return false; // both words need to consist of the same exact letters
    if (Object.values(w1Dict).sort().join("") !== Object.values(w2Dict).sort().join("")) return false; // also need the same number of occurences (for swapping)

    return true;
};
