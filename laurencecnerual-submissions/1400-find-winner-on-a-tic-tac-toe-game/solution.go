func checkRow(row []string) string {
    if (row[0] != "" && row[0] == row[1] && row[1] == row[2]) {
        return row[0]
    }

    return ""
}

func is_winner(result string) bool {
    if (result == "A" || result == "B") {
        return true
    }

    return false
}

func tictactoe(moves [][]int) string {
    move_count := len(moves)
    var grid [3][3]string

    for index, move := range moves {
        if (index % 2 == 0) {
            grid[move[0]][move[1]] = "A"
        } else {
            grid[move[0]][move[1]] = "B"
        }
    }

    //check rows
    result := checkRow([]string{grid[0][0], grid[0][1], grid[0][2]})
    if (is_winner(result)) { return result }
    result = checkRow([]string{grid[1][0], grid[1][1], grid[1][2]})
    if (is_winner(result)) { return result }
    result = checkRow([]string{grid[2][0], grid[2][1], grid[2][2]})
    if (is_winner(result)) { return result }

    //check columns
    result = checkRow([]string{grid[0][0], grid[1][0], grid[2][0]})
    if (is_winner(result)) { return result }
    result = checkRow([]string{grid[0][1], grid[1][1], grid[2][1]})
    if (is_winner(result)) { return result }
    result = checkRow([]string{grid[0][2], grid[1][2], grid[2][2]})
    if (is_winner(result)) { return result }

    //check diagonals
    result = checkRow([]string{grid[0][0], grid[1][1], grid[2][2]})
    if (is_winner(result)) { return result }
    result = checkRow([]string{grid[0][2], grid[1][1], grid[2][0]})
    if (is_winner(result)) { return result }

    //max moves exhausted
    if move_count == 9 { return "Draw" }

    return "Pending"
}
