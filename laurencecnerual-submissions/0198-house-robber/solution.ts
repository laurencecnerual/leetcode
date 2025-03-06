function rob(nums: number[]): number {

    if (nums.length === 1) {
        return nums[0];
    }

    let maxCost = new Array(nums.length);
    maxCost[0] = nums[0];
    maxCost[1] = nums[1];

    if (nums.length >= 3) {
        maxCost[2] = nums[2] + maxCost[0];
    }

    for (let i = 3; i < maxCost.length; i++) {
        maxCost[i] = nums[i] + Math.max(maxCost[i-2], maxCost[i-3]);
    }
    
    let maxTotal = Math.max(maxCost[maxCost.length-1], maxCost[maxCost.length-2]);
    return maxTotal;
};
