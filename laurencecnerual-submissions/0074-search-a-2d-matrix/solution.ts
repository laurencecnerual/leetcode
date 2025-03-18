function searchMatrix(matrix: number[][], target: number): boolean {
    for (let m of matrix) {
        let index = m.indexOf(target);

        if(index !== -1) {
            return true;
        }
    }

    return false;
};
