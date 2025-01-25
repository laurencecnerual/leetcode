function maxProduct(nums: number[]): number {
    let maxSoFar = nums[0];
    let currentStreak: number;

    for (let i = 0; i < nums.length; i++) {
        if (!currentStreak || currentStreak === 0) {
            currentStreak = nums[i];
        } else {
            currentStreak *= nums[i];
        }

        if (currentStreak > maxSoFar) {
            maxSoFar = currentStreak;
        }
    }

    currentStreak = 0;

    for (let j = nums.length - 1; j >= 0; j--) {
        if (!currentStreak || currentStreak === 0) {
            currentStreak = nums[j];
        } else {
            currentStreak *= nums[j];
        }

        if (currentStreak > maxSoFar) {
            maxSoFar = currentStreak;
        }
    }

    return maxSoFar;
};
