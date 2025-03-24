function jump(nums: number[]): number {
    let minJumpCount = 0;
    let maxJumpLength = 0;
    let jumpUntilIndex = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        maxJumpLength = Math.max(maxJumpLength, i + nums[i]);

        if (i === jumpUntilIndex) {
            minJumpCount++;
            jumpUntilIndex = maxJumpLength;

            if (jumpUntilIndex > nums.length - 1) {
                return minJumpCount;
            }

        }
    }

    return minJumpCount;
};
