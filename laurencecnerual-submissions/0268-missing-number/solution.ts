function missingNumber(nums: number[]): number {
    nums.sort((a: number, b: number) => a - b);
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    return n;
};
