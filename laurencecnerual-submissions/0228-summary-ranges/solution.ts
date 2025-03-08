function stringify(fromNum: number, toNum: number) {
    if (fromNum === toNum) {
        return "" + fromNum;
    } else {
        return `${fromNum}->${toNum}`;
    }
}

function summaryRanges(nums: number[]): string[] {
    let summary = [];

    if (nums.length === 0) {
        return summary;
    }

    let countFrom = nums[0]
    let countTo = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1] + 1) {
            countTo = nums[i]
        } else {
            summary.push(stringify(countFrom, countTo));
            countFrom = nums[i];
            countTo = nums[i];
        }
    }

    summary.push(stringify(countFrom, countTo));

    return summary;
};
