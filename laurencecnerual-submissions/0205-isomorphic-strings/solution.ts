function isIsomorphic(s: string, t: string): boolean {
    let stMapping = {};
    let tsMapping = {};

    for (let i = 0; i < s.length; i++) {
        if (!stMapping[s[i]]) {
            stMapping[s[i]] = t[i];
            tsMapping[t[i]] = s[i];
        } else if (stMapping[s[i]] !== t[i] || tsMapping[t[i]] !== s[i]) {
            return false;
        }
    }

    return Object.keys(stMapping).length === Object.keys(tsMapping).length;
};
