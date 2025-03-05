function maxOperations(nums: number[], k: number): number {
    let pairCount = 0;
    nums.sort((a,b) => a - b);
    nums = nums.filter(num => num + nums[0] <= k);

    let lowIndex = 0; // the current left side index in the sorted array
    let highIndex = nums.length - 1; // the current right side index in the sorted array

    while (lowIndex < highIndex) {
        if (nums[lowIndex] + nums[highIndex] === k) {
            pairCount++;
            lowIndex++;
            highIndex--;
        } else if  (nums[lowIndex] + nums[highIndex] > k) {
            highIndex--;
        } else {
            lowIndex++;
        }
    }

    return pairCount;
};
