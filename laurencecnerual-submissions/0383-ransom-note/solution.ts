function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) {
        return false;
    }

    let magazineDict = {};
    let noteDict = {};

    for (let i = 0; i < magazine.length; i++) {
        magazineDict[magazine[i]] = magazineDict[magazine[i]] ? magazineDict[magazine[i]] + 1 : 1;
        noteDict[ransomNote[i]] = noteDict[ransomNote[i]] ? noteDict[ransomNote[i]] + 1 : 1;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (magazineDict[ransomNote[i]] > 0) {
            magazineDict[ransomNote[i]]--;
        } else {
            return false;
        }
    }

    return true;
};
