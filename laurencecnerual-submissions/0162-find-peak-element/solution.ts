function findPeakElement(nums: number[]): number {
    let max = [...nums].sort((a,b) => b-a)[0];
    return nums.indexOf(max);
};
