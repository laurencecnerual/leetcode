function pivotIndex(nums: number[]): number {
    let leftSum = 0;
    let rightSum = nums.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0) - nums[0];
    let valueToShiftLeft = nums[0]

    if (nums.length === 1 || leftSum === rightSum) {
        return 0;
    }

    for (let i = 1; i < nums.length; i++) {
        leftSum += valueToShiftLeft;
        rightSum -= nums[i];
        valueToShiftLeft = nums[i];

        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
};
