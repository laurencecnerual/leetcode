func trap(height []int) int {
    left := 0
    right := len(height) - 1
    max_left := 0
    max_right := 0
    water := 0

    compareAndCalculate := func(current int, max *int) {
        if current >= *max {
            *max = current
        } else {
            water += *max - current
        }
    }

    for left < right {
        if height[left] < height[right] {
            compareAndCalculate(height[left], &max_left)
            left++
        } else {
            compareAndCalculate(height[right], &max_right)
            right--
        }
    }

    return water
}
