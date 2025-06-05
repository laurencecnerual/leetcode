func canMakeArithmeticProgression(arr []int) bool {
    sort.Ints(arr)
    gap := -1

    for i := 0; i < len(arr) - 1; i++ {
        if gap >= 0 {
            if arr[i + 1] - arr[i] != gap {
                return false
            }
        } else {
            gap = arr[i + 1] - arr[i]
        }
    }

    return true
}
