/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dict = {};

    for (let num of nums) {
        if (dict[num]) {
            return true;
        }

        dict[num] = true;
    }

    return false;
};
