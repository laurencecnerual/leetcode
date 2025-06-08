func nextGreatestLetter(letters []byte, target byte) byte {
    answer := letters[0]
    beaten_by := 27
    mapping := make(map[byte]int)

    for i := byte('a'); i <= 'z'; i++ {
        mapping[i] = int(i - 'a' + 1)
    }

    value_to_beat := mapping[target]

    for i := 0; i < len(letters); i++ {
        current_letter := letters[i]
        current_value := mapping[current_letter]
        if (current_value > value_to_beat && current_value - value_to_beat < beaten_by) {
            answer = current_letter
            beaten_by = current_value - value_to_beat
        }
    }

    return answer
}
