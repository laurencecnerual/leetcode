function generate(numRows: number): number[][] {
    let pascalTriangle = [[1]]

    if (numRows === 1) {
        return pascalTriangle;
    }

    pascalTriangle.push([1,1]);

    if (numRows === 2) {
        return pascalTriangle;
    }

    for (let i = 2; i < numRows; i++) {
        let lastRow = pascalTriangle[i - 1];
        let newRow = new Array(lastRow.length + 1).fill(1);

        for (let j = 1; j < newRow.length - 1; j++) {
           newRow[j] = lastRow[j - 1] + lastRow[j];
        }

        pascalTriangle.push(newRow);
    }

    return pascalTriangle;
};
