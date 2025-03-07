/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        let lastNum = nums.pop();
        nums.unshift(lastNum);
    }
};
