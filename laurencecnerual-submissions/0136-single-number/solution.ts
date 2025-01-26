function singleNumber(nums: number[]): number {
    let dict = {};

    for (let num of nums) {
        if (dict[num]) {
            dict[num]++;
        } else {
            dict[num] = 1;
        }
    }

    for (const [key, value] of Object.entries(dict)) {
        if (value === 1) {
            return Number(key);
        }
    }
};
