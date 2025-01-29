function groupAnagrams(strs: string[]): string[][] {
    let sortedStrs = [...strs];
    let dict = {};
    
    for (let i = 0; i < sortedStrs.length; i++) {
        sortedStrs[i] = sortedStrs[i].split("").sort().join("");

        if (dict[sortedStrs[i]]) {
            dict[sortedStrs[i]].push(strs[i]);
        } else {
            dict[sortedStrs[i]] = [strs[i]];
        }
    }

    let answer = [];

    for (let value of Object.values(dict)) {
        answer.push(value);
    }

    return answer;
};
