func calPoints(operations []string) int {
    var nums []int

    for _, val := range operations {
        if val == "C" {
            nums = nums[:len(nums) - 1]
        } else if val == "D" {
            nums = append(nums, nums[len(nums) - 1] * 2)
        } else if val == "+" {
            nums = append(nums, nums[len(nums) - 1] + nums[len(nums) - 2])
        } else if num, err := strconv.Atoi(val); err == nil {
            nums = append(nums, num)
        }
    }

    sum := 0;

    for i := 0; i < len(nums); i++ {
        sum += nums[i]
    }

    return sum
}
