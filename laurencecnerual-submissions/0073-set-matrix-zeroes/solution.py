class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rowNums = set()
        columnNums = set()

        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == 0:
                    rowNums.add(i)
                    columnNums.add(j)

        for i in rowNums:
            for j in range(len(matrix[i])):
                matrix[i][j] = 0

        for i in range(len(matrix)):
            for j in columnNums:
                matrix[i][j] = 0
        
