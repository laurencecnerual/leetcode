function searchRange(nums: number[], target: number): number[] {
    let first = nums.indexOf(target);

    if (first === -1) {
        return [-1, -1]
    }

    let backwardNums = nums.toReversed();
    let lastIndex = nums.length - 1;
    let second = lastIndex - backwardNums.indexOf(target);

    return [first, second];
};
