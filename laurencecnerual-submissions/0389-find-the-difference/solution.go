func findTheDifference(s string, t string) byte {
    lettersOfS := make(map[string]int)

    for _, char := range s {
        _, exists := lettersOfS[string(char)]

        if exists {
            lettersOfS[string(char)] += 1
        } else {
            lettersOfS[string(char)] = 1
        }
    }

    for _, char := range t {
        count, exists := lettersOfS[string(char)]

        if exists {
            lettersOfS[string(char)] -= 1
        } else {
            return byte(char);
        }

        if count <= 0 {
            return byte(char);
        }
    }

    return 0 // should never happen since the difference should have been found before this
}
