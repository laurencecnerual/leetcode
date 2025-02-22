function mergeAlternately(word1: string, word2: string): string {
    let mergedWord = "";
    let wordOneLonger = word1.length > word2.length;
    let shortLen = wordOneLonger ? word2.length : word1.length;

    for (let i = 0; i < shortLen; i++) {
        mergedWord += word1[i] + word2[i];
    }

    if (wordOneLonger) {
        mergedWord += word1.substring(shortLen);
    } else {
        mergedWord += word2.substring(shortLen);
    }

    return mergedWord;
};
