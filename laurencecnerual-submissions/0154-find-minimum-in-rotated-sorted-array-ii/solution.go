func findMin(nums []int) int {
    for i := 0; i < len(nums) - 1; i++ {
        if nums[i] > nums[i+1] {
            return nums[i+1]
        }
    }

    return nums[0]
}
