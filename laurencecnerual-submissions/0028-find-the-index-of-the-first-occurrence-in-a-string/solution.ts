function strStr(haystack: string, needle: string): number {
    if (haystack.length < needle.length) {
        return -1;
    }

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let word = haystack.substring(i, i + needle.length);

        if (word === needle) {
            return i;
        }
    }

    return -1;
};
