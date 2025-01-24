function search(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length -1
    let middle: number;

    while (start <= end) {
        middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
};
