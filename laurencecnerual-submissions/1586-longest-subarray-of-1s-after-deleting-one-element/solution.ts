function longestSubarray(nums: number[]): number {
    let maxZeroes = 1
    let maxStreak = 0;
    let zeroes = 0;
    let start = 0;
    let currentStreak = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 0) {
            zeroes++;
        }

        while (zeroes > maxZeroes) {
            if (nums[start] === 0) {
                zeroes--;
            }

            start++;
        }

        currentStreak = end - start; // intentionally exclude +1 to not include the "deleted" zero in the count

        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }
    }

    return maxStreak;
};
