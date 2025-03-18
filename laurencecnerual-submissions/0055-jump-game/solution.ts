function canJump(nums: number[]): boolean {
    if (nums.indexOf(0) === -1) {
        return true;
    }

    let maxJump = 0;

    for (let i = 0; i < nums.length; i++) {
        if (maxJump < i) {
            return false
        }

        maxJump = Math.max(maxJump, i + nums[i]);

        if (maxJump >= nums.length - 1) {
            return true;
        }
    }

    return false;
};
