func fib(n int) int {
    memo := make(map[int]int)
    return fib_dp(n, memo)
}

func fib_dp(n int, memo map[int]int) int {
    if n == 0 || n == 1 { return n }

    if stored_val, ok := memo[n]; ok {
        return stored_val
    }

    memo[n] = fib_dp(n - 1, memo) + fib_dp(n - 2, memo)
    return memo[n]
}
