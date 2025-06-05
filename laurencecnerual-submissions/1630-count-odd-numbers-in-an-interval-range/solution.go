func countOdds(low int, high int) int {
    interval := high - low + 1

    if interval % 2 == 0 || (high % 2 == 0 && low % 2 == 0) {
        return interval / 2
    } else {
        return (interval / 2) + 1
    }
}
