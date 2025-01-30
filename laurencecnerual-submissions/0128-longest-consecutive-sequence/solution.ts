function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    nums.sort((a,b) => a - b);
    let maxStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < nums.length; i++) {
        let previousNumber = nums[i-1];
        let currentNumber = nums[i];

        if (currentNumber - previousNumber === 1) {
            currentStreak++;

            if (currentStreak > maxStreak) {
                maxStreak = currentStreak;
            }
        } else if (currentNumber - previousNumber !== 0) {
            currentStreak = 1;
        }
    }

    return maxStreak;
};
