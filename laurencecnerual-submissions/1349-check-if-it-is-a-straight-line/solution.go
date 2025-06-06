func checkStraightLine(coordinates [][]int) bool {
    if len(coordinates) == 2 {
        return true
    }

    gapX := coordinates[1][0] - coordinates[0][0]
    gapY := coordinates[1][1] - coordinates[0][1]

    slope := math.Inf(1) // Initially assume its a vertical line
    displacement := float64(coordinates[0][0]) // For that case, track the dispacement along the X axis

    if gapX != 0 { // It's actually not a vertical line, so recompute according to the equation y = mx + b
        slope = float64(gapY) / float64(gapX)
        displacement = float64(coordinates[0][1]) - slope * float64(coordinates[0][0])
    }

    if (slope != math.Inf(1)) { // handle non-vertical lines
        for rowIndex := 0; rowIndex < len(coordinates); rowIndex++ {
            if (float64(coordinates[rowIndex][1]) != slope * float64(coordinates[rowIndex][0]) + displacement) {
                return false
            }
        }
    } else { // handle vertical lines
        for rowIndex := 0; rowIndex < len(coordinates); rowIndex++ {
            if (float64(coordinates[rowIndex][0]) != displacement) {
                return false
            }
        }
    }

    return true
}
