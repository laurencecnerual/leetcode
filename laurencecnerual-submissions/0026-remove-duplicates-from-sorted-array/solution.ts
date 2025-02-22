function removeDuplicates(nums: number[]): number {
    let dict = {};

    for (let i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = true;
        }
    }

    nums.length = 0;
    Object.keys(dict).forEach(num => nums.push(Number(num))); //Cast each string to number and add it to the array
    nums.sort((a, b) => a - b);
    return nums.length;
};
