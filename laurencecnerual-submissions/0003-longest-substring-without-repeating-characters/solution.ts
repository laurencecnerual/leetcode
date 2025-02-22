function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) {
        return 0;
    }

    let dict = {};
    let longest = 1;
    let currentLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (!(dict[s[i]] >= 0)) {
            dict[s[i]] = i;
            currentLength++;

            if (currentLength > longest) {
                longest = currentLength;
            }
        } else {
            let duplicateIndex = dict[s[i]]
            currentLength = i - duplicateIndex;

            dict[s[i]] = i;

            for (let letter of Object.keys(dict)) {
                if (dict[letter] < duplicateIndex) {
                    delete dict[letter];
                }
            }
        }
    }

    return longest;
};
