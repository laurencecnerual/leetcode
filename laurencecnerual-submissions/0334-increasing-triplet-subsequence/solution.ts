function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) {
        return false;
    }

    let min = Infinity;
    let secondMin = Infinity;

    for (let n of nums) {
        if (n <= min) {
            min = n;
        } else if (n <= secondMin) {
            secondMin = n;
        } else {
            return true;
        }
    }

    return false;
};
