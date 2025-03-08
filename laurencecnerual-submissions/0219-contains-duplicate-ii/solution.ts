function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let kArr = [];

    if (k > nums.length) {
        k = nums.length - 1;
    }
    
    for (let i = 0; i < k + 1; i++) {
        kArr.push(nums[i]);
    }

    let kSet = new Set([...kArr]);

    for (let i = k + 1; i < nums.length; i++) {
        if (kArr.length !== kSet.size) {
            return true;
        }

        let earliestNum = kArr.shift();
        kArr.push(nums[i]);

        kSet.delete(earliestNum);
        kSet.add(nums[i]);
    }

    if (kArr.length !== kSet.size) {
        return true;
    }

    return false;
};
