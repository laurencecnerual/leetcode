function majorityElement(nums: number[]): number {
    let len = nums.length;
    let dict = {};

    for (let i = 0; i < len; i++) {
        dict[nums[i]] = dict[nums[i]] ? dict[nums[i]] + 1 : 1;
    }

    // Sort the key-value pairs descending by value and grab the key associated with the first (biggest) value
    return Number(Object.entries(dict).sort(([, v1], [, v2]) => Number(v2) - Number(v1))[0][0]);
};
