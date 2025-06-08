func findKthPositive(arr []int, k int) int {
    if k < arr[0] { return k }

    last_value := arr[len(arr) - 1]
    missing_count_up_to_end_of_arr := last_value - len(arr)

    if k > missing_count_up_to_end_of_arr {
        return last_value + (k - missing_count_up_to_end_of_arr)
    }

    missing_count_before_arr := arr[0] - 1
    current_k := missing_count_before_arr

    for i := 0; i < len(arr) - 1; i++ {
        if (arr[i + 1] != arr[i] + 1) {
            current_k += arr[i + 1] - arr[i] - 1

            if (current_k >= k) {
                over_by := current_k - k
                return arr[i + 1] - 1 - over_by
            }
        }
    }

    return -1
}
