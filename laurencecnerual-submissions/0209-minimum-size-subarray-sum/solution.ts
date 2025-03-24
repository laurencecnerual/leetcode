function minSubArrayLen(target: number, nums: number[]): number {
    let leftEdge = 0;
    let currentSum = 0;
    let minLength = nums.length + 1;

    for (let rightEdge = 0; rightEdge < nums.length; rightEdge++) {
        currentSum += nums[rightEdge];

        while (currentSum >= target) {
            let currentLength = rightEdge - leftEdge + 1;

            if (currentLength < minLength) {
                minLength = currentLength;
            }

            currentSum -= nums[leftEdge];
            leftEdge++;
        }
    }

    return minLength > nums.length ? 0 : minLength;
};
