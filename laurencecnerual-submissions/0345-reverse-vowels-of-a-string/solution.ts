function reverseVowels(s: string): string {
    let vowels = "aeiou";
    let vowelIndexes = [];
    let vowelOrder = ""

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            vowelIndexes.push(i);
            vowelOrder += s[i];
        }
    }

    let remainingReplacements = vowelOrder.length;
    let arrS = [...s];

    for (let index of vowelIndexes) {
        arrS[index] = vowelOrder[remainingReplacements - 1];
        remainingReplacements--;
    }

    return arrS.join("");
};
