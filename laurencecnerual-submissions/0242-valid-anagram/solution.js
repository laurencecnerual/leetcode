/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }

    let dict = {}

    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        if (dict[letter]) {
            dict[letter]++;
        } else {
            dict[letter] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        let letter = t[i];

        if (!dict[letter] || dict[letter] < 1) {
            return false
        } else {
            dict[letter]--;
        }
    }
    
    return true;
};
