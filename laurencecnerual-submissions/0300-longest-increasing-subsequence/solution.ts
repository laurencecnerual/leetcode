function lengthOfLIS(nums: number[]): number {
    let cache = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                cache[i] = Math.max(cache[i], cache[j] + 1);
            }
        }
    }

    return Math.max(...cache);
};
