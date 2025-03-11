function singleNumber(nums: number[]): number {
    nums.sort((a,b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i+=3) {
        if (nums[i] !== nums[i+1]) {
            return nums[i];
        }
    }

    return nums[nums.length - 1];
};
