/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let tempArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            tempArr.push(nums[i]);
        }
    }

    for (let j = 0; j < tempArr.length; j++) {
        nums[j] = tempArr[j];
    }

    for (let k = tempArr.length; k < nums.length; k++) {
        nums[k] = 0;
    }
};
