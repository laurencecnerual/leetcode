function uniqueOccurrences(arr: number[]): boolean {
    let dict = {};

    for (let i = 0 ; i < arr.length; i++) {
        if (! dict[arr[i]]) {
            dict[arr[i]] = 1;
        } else {
            dict[arr[i]] += 1;
        }
    }

    let occurrences = Object.values(dict);
    return occurrences.length === [...new Set(occurrences)].length;
};
