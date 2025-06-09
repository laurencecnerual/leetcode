func judgeCircle(moves string) bool {
    directions := map[rune]int{
        'U': 0,
        'D': 0,
        'L': 0,
        'R': 0,
    }

    for i := 0; i < len(moves); i++ {
        directions[rune(moves[i])]++
    }

    return directions['U'] == directions['D'] && directions['L'] == directions['R']
}
