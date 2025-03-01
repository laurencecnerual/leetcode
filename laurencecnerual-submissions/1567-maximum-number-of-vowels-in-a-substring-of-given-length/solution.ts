function isVowel(char: string) {
    return char === "a" || char === "e" || char === "i" || char === "o" || char === "u";
}

function maxVowels(s: string, k: number): number {
    let currentStreak = 0;

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            currentStreak++;
        }
    }

    let maxStreak =  currentStreak;

    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i - k])) {
            currentStreak--;
        }

        if (isVowel(s[i])) {
            currentStreak++;
        }

        if (currentStreak > maxStreak) {
            maxStreak =  currentStreak;
        }
    }

    return maxStreak;
};
