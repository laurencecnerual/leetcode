func diagonalSum(mat [][]int) int {
    len := len(mat)

    if (len == 1) {
        return mat[0][0];
    }

    sum := 0

    for i := 0; i < len; i++ {
        sum += mat[i][i]
    }

    endpoint := len - 1

    for i := endpoint; i >= 0; i-- {
        sum += mat[endpoint - i][i]
    }
             
    if (len % 2 == 1) {
        midpoint := len / 2
        sum -= mat[midpoint][midpoint] // remove duplicate
    }

    return sum 
}
