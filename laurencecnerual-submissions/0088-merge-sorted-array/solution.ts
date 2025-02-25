/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let j = 0;

    for (let i = m; i < n + m; i++) {
        nums1[i] = nums2[j];
        j++;
    }

    nums1.sort((a,b) => a - b);
};
