func candy(ratings []int) int {
    candyCount := 0
    candies := make([]int, len(ratings))

    for i := 0; i < len(ratings); i++ {
        candies[i] = 1
    }

    for i := 1; i < len(ratings); i++ {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }

    for i := len(ratings) - 2; i >= 0; i-- {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1
        }
    }

    for i := 0; i < len(ratings); i++ {
        candyCount += candies[i]
    }

    return candyCount
}
