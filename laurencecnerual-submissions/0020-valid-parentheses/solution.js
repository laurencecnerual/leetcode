/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) {
        return false;
    }

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case "(":
                stack.push(")");
                break;
            case "[":
                stack.push("]");
                break;
            case "{":
                stack.push("}");
                break;
            default:
                let expectedChar = stack.pop();
                if (s[i] !== expectedChar) {
                    return false;
                }
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
};
