function findDifference(nums1: number[], nums2: number[]): number[][] {
    let distinctNums1 = new Set(nums1);
    let distinctNums2 = new Set(nums2);

    let uniqueNums1 = new Set();
    let uniqueNums2 = new Set();

    for (let distinctNum of distinctNums2) {
        if (!distinctNums1.has(distinctNum)) {
            uniqueNums2.add(distinctNum);
        }
    }

    for (let distinctNum of distinctNums1) {
        if (!distinctNums2.has(distinctNum)) {
            uniqueNums1.add(distinctNum);
        }
    }

    let answer = [[...uniqueNums1.keys()] as number[], [...uniqueNums2.keys()] as number[]];
    return answer;
};
