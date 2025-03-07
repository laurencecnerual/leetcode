function lengthOfLastWord(s: string): number {
    s.trim();
    let words = s.split(" ");
    let filteredWords = words.filter(word => word.length !== 0);
    return filteredWords[filteredWords.length - 1].length;
};
