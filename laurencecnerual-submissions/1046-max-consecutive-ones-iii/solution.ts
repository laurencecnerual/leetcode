function longestOnes(nums: number[], k: number): number {
    let maxStreak = 0;
    let zeroes = 0;
    let start = 0;
    let currentStreak = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 0) {
            zeroes++;
        }

        while (zeroes > k) {
            if (nums[start] === 0) {
                zeroes--;
            }

            start++;
        }

        currentStreak = end - start + 1;

        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }
    }

    return maxStreak;
};
