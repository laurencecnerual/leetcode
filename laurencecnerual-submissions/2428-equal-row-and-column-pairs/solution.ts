function equalPairs(grid: number[][]): number {
    let dict = {};
    let matchCount = 0;

    for (let arr of grid) {
        dict[arr.join("-")] = dict[arr.join("-")] ? dict[arr.join("-")] + 1 : 1
    }

    let trans = grid[0].map((_, colIndex) =>
        grid.map(row => row[colIndex])
    );

    for (let arr of trans) {
        if (dict[arr.join("-")]) {
            matchCount += dict[arr.join("-")];
        }
    }

    return matchCount;
};
