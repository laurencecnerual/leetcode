func repeatedSubstringPattern(s string) bool {
    endpoint := len(s) / 2

    if len(s) % 2 == 1 {
        endpoint = len(s) / 3
    }

    for i := 1; i <= endpoint; i++ {
        repeated := strings.Repeat(s[:i], len(s) / i)

        if repeated == s {
            return true
        }
    }

    return false
}
