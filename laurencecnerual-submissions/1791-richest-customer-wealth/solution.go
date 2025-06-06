func maximumWealth(accounts [][]int) int {
    max_wealth := 0
    current_customer_wealth := 0

    for _, customer_accounts := range accounts {
        for _, balance := range customer_accounts {
            current_customer_wealth += balance
        }

        if (current_customer_wealth > max_wealth) {
            max_wealth = current_customer_wealth
        }

        current_customer_wealth = 0
    }

    return max_wealth
}
