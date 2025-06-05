func isMonotonic(nums []int) bool {
    check_descending := false

    for i := 0; i < len(nums) - 1; i++ {
        if nums[i] > nums[i + 1] {
            check_descending = true
            break
        }
    }

    if !check_descending {
        return true
    }

    for i := 0; i < len(nums) - 1; i++ {
        if nums[i] < nums[i + 1] {
            return false
        }
    }

    return true
}
