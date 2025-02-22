function removeDuplicates(nums: number[]): number {
    let dict = {};

    for (let i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = 1;
        } else if (dict[nums[i]] === 1) {
            dict[nums[i]] += 1;
        } 
    }

    nums.length = 0;
    Object.keys(dict).forEach((num) => { 
        if (dict[num] === 2) {
            nums.push(Number(num))
        }
        
        nums.push(Number(num))
    });
    nums.sort((a, b) => a - b);
    return nums.length;
};
