function findMaxAverage(nums: number[], k: number): number {
    let currentRollingSum = 0;

    for (let i = 0; i < k; i++) {
        currentRollingSum += nums[i];
    }

    let maxRollingSum = currentRollingSum;

    for (let i = k; i < nums.length; i++) {
        currentRollingSum -= nums[i - k];
        currentRollingSum += nums[i];

        if (currentRollingSum > maxRollingSum) {
            maxRollingSum = currentRollingSum;
        }
    }
    
    return maxRollingSum / k;
};
