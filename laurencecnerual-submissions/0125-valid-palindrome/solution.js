/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let cleanedS = "";
    let regEx = /^[a-z0-9]+$/i;

    for (let i = 0; i < s.length; i++) {
        if (regEx.test(s[i])) {
            cleanedS += s[i];
        }
    }

    let backwardsS = cleanedS.split("").reverse().join("");

    if (backwardsS !== cleanedS) {
        return false;
    }

    return true;
};
