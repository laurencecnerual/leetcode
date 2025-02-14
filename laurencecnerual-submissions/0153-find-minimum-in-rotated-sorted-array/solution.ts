function findMin(nums: number[]): number {
    let len = nums.length;

    if (nums[0] <= nums[len-1]) {
        return nums[0];
    }

    if (len == 2) {
        return nums[1];
    }

    let left = 1;
    let right = len-2;

    while (nums[left] > nums[right]) {
        left++;
        right--;
    }

    if (left > right) {
        return nums[left];
    } else if (left === right) {
        if (nums[left] > nums[left+1]) {
            return nums[left+1];
        } else {
            return nums[left];
        }
    } else {
        if (nums[left-1] > nums[left]) {
            return nums[left];
        } else {
            return nums[right+1];
        }
    }
};
