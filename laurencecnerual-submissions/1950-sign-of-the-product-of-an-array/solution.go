func arraySign(nums []int) int {
    nums = append(nums, 1)
    product := 1

    for _, num := range nums {
        if num < 0 {
            product *= -1
        } else if num == 0 {
            return 0
        }
    }

    return product
}
